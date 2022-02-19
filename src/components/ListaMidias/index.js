import './lista-midias.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useEffect, useRef } from 'react';

export default function ListaMidias({ lista }){
    const areaMidia = useRef(null);
    const btnVoltar = useRef(null);
    const btnAvancar = useRef(null);
    const definirDisplayBtn = () => {
        if(areaMidia.current.scrollLeft === 0){
            btnVoltar.current.style.display = 'none';
        }else{
            btnVoltar.current.style.display = 'flex';
        }

        if(areaMidia.current.scrollLeft === areaMidia.scrollWidth){
            btnAvancar.current.style.display = 'none';
        }else{
            btnAvancar.current.style.display = 'flex';
        }
    };

    useEffect(() => {
        definirDisplayBtn();
        
        areaMidia.current.addEventListener('scroll', () => {
            definirDisplayBtn();
        });
    }, []);

    return(
        <section className="lista-midias">
            <h1 className="lista-midias--titulo">{lista.titulo}</h1>
            <div className="lista-midias--area-midia" ref={areaMidia}>
                <div className="area-btn-slide area-btn-voltar" ref={btnVoltar}>
                    <IoIosArrowBack className="btn-voltar"/>
                </div>
                <div className="area-btn-slide area-btn-avancar" ref={btnAvancar}>
                    <IoIosArrowForward className="btn-avancar"/>
                </div>
                {   
                    lista.itens.map((item, key) => (
                        <article key={key} className="lista-midias--midia">
                            <div className="midia--capa">
                                <img src={'http://image.tmdb.org/t/p/w300'+item.poster_path} alt={item.title}/>
                            </div>
                            <div className="midia--detalhes">
                                <h2 className="midia--titulo">{typeof(item.title) !== 'string' ? item.name : item.title}</h2>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}