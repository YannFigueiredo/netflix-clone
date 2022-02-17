import './lista-midias.css';

export default function listaMidias({ lista }){
    return(
        <section className="lista-midias">
            <h1>{lista.titulo}</h1>
            {
                lista.itens.map((item, key) => (
                    <article key={key} className="lista-midias--midia">
                        <h2 className="lista-midias--titulo">{item.title}</h2>
                        <div className="lista-midias--capa">
                            <img src={'http://image.tmdb.org/t/p/w300'+item.poster_path} alt={item.title}/>
                        </div>
                    </article>
                ))
            }
        </section>
    );
}