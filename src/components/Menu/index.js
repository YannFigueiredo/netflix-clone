import './menu.css';
import { useEffect, useState } from 'react';
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md';

export default function Menu(){
    const [ menuMobile, setMenuMobile ] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth <= 768){
                setMenuMobile(true);
            }else{
                setMenuMobile(false);
            }   
        });
    }, []);

    return(
        <nav className='header-principal--area-menu'>
            {menuMobile && 
                <div className='header-principal--btn-menu-mobile'>
                    <span>Navegar</span>
                    <div>
                        <MdOutlineArrowDropDown/>
                    </div>
                </div>
            }
            <div className='header-principal--container-menu'>
                {menuMobile &&
                    <div style={{backgroundColor: 'transparent', marginBottom: '-17px'}}>
                        <MdOutlineArrowDropUp style={{fontSize: '2.2em', color: 'white'}}/>
                    </div>
                }
                <ul className="header-principal--menu">
                    <li><a href='/'>Início</a></li>
                    <li><a href='#'>Séries</a></li>
                    <li><a href='#'>Filmes</a></li>
                    <li><a href='#'>Bombando</a></li>
                    <li><a href='#'>Minha lista</a></li>
                </ul>
            </div>
        </nav>
    );
}