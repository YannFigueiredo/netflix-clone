import './home.css';
import { useState, useEffect, useContext } from 'react';
import Lista from '../../components/ListaMidias';
import { MidiasContext } from '../../contexts/Midias';


export default function Home(){
    const { listas } = useContext(MidiasContext);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        setLoading(false);
    }, []);

    return(
        <div className="container">
            {loading && 
                <div>
                    <img src='https://c.tenor.com/DQyztbEmqnYAAAAC/netflix-loading.gif' alt='Carregando'/>
                </div>
            }
            <div className="destaque">

            </div>
            {
                listas.map((lista, key) => (
                    <Lista key={key} lista={lista}/>
                ))
            }
        </div>
    );
}