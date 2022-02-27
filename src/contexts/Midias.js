import { useState, useEffect, createContext } from 'react';
import apiMidias from '../services/api_midias';
import Loading from '../components/Loading';

export const MidiasContext = createContext({});

export default function MidiasProvider({children}){
    const [urlBase, setUrlBase] = useState('https://api.themoviedb.org/3');
    const [listas, setLista] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [loading, setLoading] = useState(true);
    let listaTemp = [];
    let generosTemp = [];

    useEffect(() => {
      async function loadApi(){
        //Carregando lista de filmes populares
        const filmesPop = await apiMidias.get(urlBase + '/movie/popular', {
          params: {
            api_key: '6d7eca4cdb083ab58f531783d27d25fc',
            language: 'pt-br'
          }
        });
  
        listaTemp.push({titulo: 'Filmes Populares', label: 'Popular', itens: filmesPop.data.results});
  
        //Carregando lista de séries populares
        const seriesPop = await apiMidias.get(urlBase + '/tv/popular', {
          params: {
            api_key: '6d7eca4cdb083ab58f531783d27d25fc',
            language: 'pt-br'
          }
        });
  
        listaTemp.push({titulo: 'Séries Populares', label: 'Popular', itens: seriesPop.data.results});
        
        //Carregando lista de filmes de comédia
        const filmesComedia = await apiMidias.get(urlBase + '/discover/movie', {
          params: {
            api_key: '6d7eca4cdb083ab58f531783d27d25fc',
            language: 'pt-br',
            with_genres: '35'
          }
        });
  
        //Carregando lista de séries de comédia
        const seriesComedia = await apiMidias.get(urlBase + '/discover/tv', {
          params: {
            api_key: '6d7eca4cdb083ab58f531783d27d25fc',
            language: 'pt-br',
            with_genres: '35'
          }
        });
  
        listaTemp.push({titulo: 'Comédia', label: 'Comedy', itens: filmesComedia.data.results.concat(seriesComedia.data.results)});
  
        //Carregando lista de filmes de ação
        const filmesAcao = await apiMidias.get(urlBase + '/discover/movie', {
          params: {
            api_key: '6d7eca4cdb083ab58f531783d27d25fc',
            language: 'pt-br',
            with_genres: '28'
          }
        });
  
        //Carregando lista de séries de ação
        const seriesAcao = await apiMidias.get(urlBase + '/discover/tv', {
          params: {
            api_key: '6d7eca4cdb083ab58f531783d27d25fc',
            language: 'pt-br',
            with_genres: '28'
          }
        });
  
        listaTemp.push({titulo: 'Ação', label: 'Action', itens: filmesAcao.data.results.concat(seriesAcao.data.results)});

        //Carregando lista de filmes de animação
        const filmesAnimacao = await apiMidias.get(urlBase + '/discover/movie', {
            params: {
              api_key: '6d7eca4cdb083ab58f531783d27d25fc',
              language: 'pt-br',
              with_genres: '16'
            }
          });
    
          //Carregando lista de séries de animação
          const seriesAnimacao = await apiMidias.get(urlBase + '/discover/tv', {
            params: {
              api_key: '6d7eca4cdb083ab58f531783d27d25fc',
              language: 'pt-br',
              with_genres: '16'
            }
          });
    
          listaTemp.push({titulo: 'Animação', label: 'Animation', itens: filmesAnimacao.data.results.concat(seriesAnimacao.data.results)});
  
        setLista(listaTemp);

        //Carregando genêros
        const generosSeries = await apiMidias.get(urlBase + '/genre/tv/list', {
          params: {
            api_key: '6d7eca4cdb083ab58f531783d27d25fc',
            language: 'pt-br'
          }
        });

        const generosFilmes = await apiMidias.get(urlBase + '/genre/movie/list', {
          params: {
            api_key: '6d7eca4cdb083ab58f531783d27d25fc',
            language: 'pt-br'
          }
        });

        generosTemp.push(generosSeries.data.genres.concat(generosFilmes.data.genres));

        setGeneros(generosTemp);
      }
  
      loadApi();

      setLoading(false);
    }, []);
    
    if(loading === true){
        return(
            <Loading/>
        );
    }else{
        return(
            <MidiasContext.Provider value={{listas, generos, urlBase}}>
                {children}
            </MidiasContext.Provider>
        );
    }
}