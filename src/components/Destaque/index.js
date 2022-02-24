import './destaque.css';
import { useEffect, useState, useContext } from 'react';
import { MidiasContext } from '../../contexts/Midias';

export default function Destaque(){
    const [ midiasPopulares, setMidiasPopulares ] = useState([]);
    const { listas } = useContext(MidiasContext);
    
    useEffect(() => {
        function criarListaPopulares(){
            listas.map((item, key) => {
                if(item.label === 'Popular'){
                    item.itens.map(midiaPopular => {
                        setMidiasPopulares([...midiasPopulares, midiaPopular]);
                    });
                }
            });
        }

        criarListaPopulares();

        console.log(midiasPopulares);
    }, []);

    return(
        <section>
            {
                midiasPopulares.map((item, key) => (
                    <h1 key={key}>nome: {typeof(item.title) !== 'string' ? item.nome : item.title}</h1>
                ))
            }
        </section>
    );
}