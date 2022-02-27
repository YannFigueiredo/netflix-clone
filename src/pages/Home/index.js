import './home.css';
import { useContext } from 'react';
import Lista from '../../components/ListaMidias';
import { MidiasContext } from '../../contexts/Midias';
import Destaque from '../../components/Destaque';


export default function Home(){
    const { listas } = useContext(MidiasContext);

    return(
        <div>
            <Destaque/>
            {
                listas.map((lista, key) => (
                    <Lista key={key} lista={lista}/>
                ))
            }
        </div>
    );
}