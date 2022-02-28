import './destaque.css';
import { useEffect, useState, useContext, useRef } from 'react';
import { MidiasContext } from '../../contexts/Midias';
import Loading from '../../components/Loading';

export default function Destaque(){
    const [ midiasPopulares, setMidiasPopulares ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    //const [ midiaRandom, setMidiaRandom ] = useState();
    const { listas, generos } = useContext(MidiasContext);
    let listaTemp = []
    let midiaRandom = null;
    const containerMidia = useRef(null);
    const nomeMidia = useRef(null);
    const notaMidia = useRef(null);
    const lancamentoMidia = useRef(null);
    const generoMidia = useRef(null);
    const selecionarMidiaRandom = () => {
        return Math.ceil(Math.random() * (midiasPopulares.length - 0) + 0);
    };

    const pegarAnoMidia = () => {
        let dataMidia = typeof(midiaRandom.release_date) !== 'string' ? midiaRandom.first_air_date : midiaRandom.release_date;
        let anoMidia = new Date(dataMidia);

        return anoMidia.getFullYear();
    };

    const pegarGeneroMidia = () => {
        let listaGeneros = [];

        generos[0].map(genero => {
            midiaRandom.genre_ids.map(item => {
                if(genero.id === item)
                    listaGeneros.push(genero.name);
            });
        });

        return listaGeneros;
    };

    function criarListaMidias(){
        listas.map((item, key) => {
            if(item.label === 'Popular'){
                item.itens.map(midiaPopular => {
                    listaTemp.push(midiaPopular);
                });
            }
        });
    } 
    
    useEffect(async() => {
        await criarListaMidias();
        await setMidiasPopulares(listaTemp);
        
        setLoading(false);
    }, [listas]);

    useEffect(async () => {
        midiaRandom = await midiasPopulares[selecionarMidiaRandom()];

        //Configurando div principal
        containerMidia.current.style.backgroundImage = `linear-gradient(to right, black 25% , transparent 75%), url(http://image.tmdb.org/t/p/original${midiaRandom.backdrop_path})`;
        containerMidia.current.style.backgroundPosition = 'bottom center';
        containerMidia.current.style.backgroundSize = 'cover';

        nomeMidia.current.textContent = typeof(midiaRandom.title) !== 'string' ? midiaRandom.name : midiaRandom.title;
        notaMidia.current.textContent = midiaRandom.vote_average + ' pontos ';
        lancamentoMidia.current.textContent = '| ' + pegarAnoMidia();

        //Coletando genêros da mídia
        let listaGeneros = await pegarGeneroMidia();
        listaGeneros = [...new Set(listaGeneros)]; //Remove elementos repetidos do array
        let conteudoGenero = '';

        listaGeneros.map((item, key) => {
            conteudoGenero += item;
            
            if(key < listaGeneros.length - 1)
                conteudoGenero += ', ';
        });

        generoMidia.current.textContent = 'Genêros: ' + conteudoGenero;
    }, [midiasPopulares, generos]);

    if(loading === true){
        return(<Loading/>);
    }else{
        return(
            <div>
                <section className='destaque' ref={containerMidia}>
                    <h1 className='destaque--titulo' ref={nomeMidia}></h1>
                    <div className='destaque--area-info' >
                        <span className='destaque--nota' ref={notaMidia}></span>
                        <span className='destaque--lancamento' ref={lancamentoMidia}></span>
                    </div>
                    <span className='destaque--genero' ref={generoMidia}></span>
                </section>
                <div className='destaque--divisoria'></div>
            </div>

        );
    }
}