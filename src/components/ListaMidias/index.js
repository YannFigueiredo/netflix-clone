import './lista-midias.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function listaMidias({ lista }){
    return(
        <section className="lista-midias">
            <h1 className="lista-midias--titulo">{lista.titulo}</h1>
            <div className="lista-midias--area-midia">
                <div className="area-btn-slide area-btn-voltar">
                    <IoIosArrowBack className="btn-voltar"/>
                </div>
                <div className="area-btn-slide area-btn-avancar">
                    <IoIosArrowForward className="btn-avancar"/>
                </div>
                {   
                    lista.itens.map((item, key) => (
                        <article key={key} className="lista-midias--midia">
                            <div className="midia--capa">
                                <img src={'http://image.tmdb.org/t/p/w300'+item.poster_path} alt={item.title}/>
                            </div>
                            <div className="midia--detalhes">
                                <h2 className="midia--titulo">{item.title}</h2>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}