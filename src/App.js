import Rotas from './routes';
import { useContext, useEffect } from 'react';
import { MidiasContext } from './contexts/Midias';
import apiMidias from './services/api_midias';

function App() {
  const { urlBase, listas, setLista } = useContext(MidiasContext);

  useEffect(() => {
    async function loadApi(titulo, label, url){
      const response = await apiMidias.get(urlBase + url, {
        params: {
          api_key: '6d7eca4cdb083ab58f531783d27d25fc',
          language: 'pt-br'
        }
      });

      setLista([...listas, {titulo: titulo, label: label, itens: response.data.results}]);
    }

    loadApi('Populares', 'popular', '/movie/popular');
  }, []);

  return (
    <Rotas/>
  );
}

export default App;
