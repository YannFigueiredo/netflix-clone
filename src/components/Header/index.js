import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState, useRef } from 'react';
import { UsuariosContext } from '../../contexts/Usuarios';
import './header.css';
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs';

export default function Header(){
    const { usuarios, ativo, setAtivo } = useContext(UsuariosContext);
    const [indexAtivo, setIndexAtivo] = useState(null);
    const [menuPerfis, setMenuPerfis] = useState(false);
    const perfilAtivo = useRef(null);
    const areaConfig = useRef(null);
    let avatar = null;
    let usuariosInativos = [];

    useEffect(() => {
        function pegarIndexAtivo(){
            usuarios.map((item, key) => {
                console.log(key);
                if(item.id === ativo)
                    setIndexAtivo(key);
            });
        }

        pegarIndexAtivo();
    }, []);

    useEffect(() => {
        perfilAtivo.current.addEventListener('mouseover', () => {
            areaConfig.current.style.display = 'inline-block';
        });

        perfilAtivo.current.addEventListener('mouseleave', () => {
            areaConfig.current.style.display = 'none';
        });
    }, []);

    if(indexAtivo !== null){
        avatar = usuarios[indexAtivo].avatar;

        usuariosInativos = usuarios.filter((item, key) => {return key !== indexAtivo});
        console.log(usuariosInativos);
    }

    return(
        <header className='header-principal container'>
            <div className='header-principal--area-navegacao'>
                <div className='header-principal--logo'>
                    <Link to='/'>
                     <img src={logo} alt='Logo do site'/>
                    </Link>
                </div>
                <nav className='header-principal--area-menu'>
                    <ul className="header-principal--menu">
                        <li><a href='/'>Início</a></li>
                        <li><a href='#'>Séries</a></li>
                        <li><a href='#'>Filmes</a></li>
                        <li><a href='#'>Bombando</a></li>
                        <li><a href='#'>Minha lista</a></li>
                    </ul>
                </nav>
            </div>
            <div className='header-principal--area-infos'>
                <div className='header-principal--perfis'>
                    <div className='header-principal--perfil-ativo' ref={perfilAtivo}>
                        <div className='header-principal--avatar-perfil'>
                            <img src={avatar} alt='Avatar do perfil ativo'/>
                        </div>
                        <MdOutlineArrowDropDown className='header-principal--btn-expandir'/>
                    </div>
                    <div className='header-principal--config' ref={areaConfig}>
                        <div style={{backgroundColor: 'transparent', textAlign: 'right'}}><MdOutlineArrowDropUp style={{fontSize: '2.2em', color: 'white', marginRight: '21px'}}/></div>
                        {usuariosInativos.map((item, key) => (
                            <div key={key} className='header-principal--perfil-inativo'>
                                <div className='header-principal--avatar-perfil'>
                                    <img src={item.avatar} alt='Avatar de perfil inativo'/>
                                </div>
                                <span>{item.nome}</span>
                            </div>
                        ))}
                        <div className='header-principal--gerenciar-perfil'>
                            <BsPencil className='header-principal--btn-gerenciar'/>
                            <span>Gerenciar perfis</span>
                        </div>
                        <hr/>

                    </div>
                </div>
            </div>
        </header>
    );
}