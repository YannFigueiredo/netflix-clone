import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState, useRef } from 'react';
import { UsuariosContext } from '../../contexts/Usuarios';
import './header.css';
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs';
import Menu from '../Menu';

export default function Header(){
    const { usuarios, ativo, setAtivo } = useContext(UsuariosContext);
    const [indexAtivo, setIndexAtivo] = useState(null);
    const [menuPerfis, setMenuPerfis] = useState(false);
    const perfilAtivo = useRef(null);
    const areaConfig = useRef(null);
    let avatar = null;
    let usuariosInativos = [];
    const [controleScroll, setControleScroll] = useState(false);

    useEffect(() => {
        function pegarIndexAtivo(){
            usuarios.map((item, key) => {
                if(item.id === ativo)
                    setIndexAtivo(key);
            });
        }

        pegarIndexAtivo();
    }, []);

    useEffect(() => {
        let intervaloPerfil;
        let intervaloConfig;

        perfilAtivo.current.addEventListener('mouseover', () => {
            clearInterval(intervaloConfig);
            areaConfig.current.style.height = 'auto';
        });

        perfilAtivo.current.addEventListener('mouseleave', () => {
            intervaloPerfil = setTimeout(() => {
                areaConfig.current.style.height = '0px';
            }, 700);
        });

        areaConfig.current.addEventListener('mouseover', () => {
            clearInterval(intervaloPerfil);
            areaConfig.current.style.height = 'auto';
        });

        areaConfig.current.addEventListener('mouseleave', () => {
            intervaloConfig = setTimeout(() => {
                areaConfig.current.style.height = '0px';
            }, 700);
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 400){
                setControleScroll(true);
            }else{
                setControleScroll(false);
            }
        });
    }, []);

    if(indexAtivo !== null){
        avatar = usuarios[indexAtivo].avatar;

        usuariosInativos = usuarios.filter((item, key) => {return key !== indexAtivo});
    }

    return(
        <header className={controleScroll ? 'header-principal header-principal-fixo container' : 'header-principal container'}>
            <div className='header-principal--area-navegacao'>
                <div className='header-principal--logo'>
                    <Link to='/'>
                     <img src={logo} alt='Logo do site'/>
                    </Link>
                </div>
                <Menu/>
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
                        <div style={{backgroundColor: 'transparent', textAlign: 'right'}}><MdOutlineArrowDropUp style={
                        {fontSize: '2.2em', color: 'white', marginRight: '21px'}}/></div>
                        <div className='header-principal--area-config'>
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
            </div>
        </header>
    );
}