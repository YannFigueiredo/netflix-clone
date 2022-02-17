import './home.css';
import { useState, useContext } from 'react';
import Lista from '../../components/ListaMidias';
import { MidiasContext } from '../../contexts/Midias';


export default function Home(){
    const { listas } = useContext(MidiasContext);
    const [loading, setLoading] = useState([true]);

    return(
        <div>
            {
                listas.map((lista, key) => (
                    <Lista key={key} lista={lista}/>
                ))
            }
        </div>
    );
}