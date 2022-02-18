import './home.css';
import { useState, useEffect, useContext } from 'react';
import Lista from '../../components/ListaMidias';
import { MidiasContext } from '../../contexts/Midias';


export default function Home(){
    const { listas } = useContext(MidiasContext);

    return(
        <div className="container">
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