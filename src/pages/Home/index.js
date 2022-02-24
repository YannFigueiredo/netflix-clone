import './home.css';
import { useState, useEffect, useContext } from 'react';
import Lista from '../../components/ListaMidias';
import { MidiasContext } from '../../contexts/Midias';
import Destaque from '../../components/Destaque';


export default function Home(){
    const { listas } = useContext(MidiasContext);

    /*function criarListaPopulares(){
        listas.map(item => {
            if(item.label === 'Popular'){
                item.itens.map(midiaPopular => {
                    console.log(midiaPopular);
                    midiasPopulares.push(midiaPopular);
                });
            }
        });
    }

    criarListaPopulares();

    console.log(midiasPopulares);*/

    return(
        <div className="container">
            <Destaque/>
            {
                listas.map((lista, key) => (
                    <Lista key={key} lista={lista}/>
                ))
            }
        </div>
    );
}