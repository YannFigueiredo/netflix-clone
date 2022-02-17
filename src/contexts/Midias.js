import { useState, createContext } from 'react';

export const MidiasContext = createContext({});

export default function MidiasProvider({children}){
    const [urlBase, setUrlBase] = useState('https://api.themoviedb.org/3');
    const [listas, setLista] = useState([]);
    
    return(
        <MidiasContext.Provider value={{listas, setLista, urlBase}}>
            {children}
        </MidiasContext.Provider>
    );
}