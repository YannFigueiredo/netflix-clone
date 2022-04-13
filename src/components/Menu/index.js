import './menu.css';
import { useEffect, useState, useRef } from 'react';
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md';

export default function Menu(){
    const [ menuMobile, setMenuMobile ] = useState(false);

    const menu = useRef(null);
    const btnMenu = useRef(null);

    const toggleMenu = (e) => {
        e.preventDefault();

        if(menu.current.style.display === 'flex'){
            menu.current.style.display = 'none';
        }else{
            menu.current.style.display = 'flex';
        }
    };

    useEffect(() => {
        if(window.innerWidth <= 768){
            setMenuMobile(true);

            btnMenu.current.addEventListener('mouseover', function(){
                menu.current.style.display = 'flex';
            });
    
            btnMenu.current.addEventListener('mouseleave', function(){
                menu.current.style.display = 'none';
            });
        }else{
            setMenuMobile(false);
        }  

        window.addEventListener('resize', () => {
            if(window.innerWidth <= 768){
                setMenuMobile(true);
                menu.current.style.display = 'none';

                btnMenu.current.addEventListener('mouseover', function(){
                    menu.current.style.display = 'flex';
                });
        
                btnMenu.current.addEventListener('mouseleave', function(){
                    menu.current.style.display = 'none';
                });
            }else{
                setMenuMobile(false);
                menu.current.style.display = 'flex';
            }   
        });
    }, []);

    return(
        <nav className='header-principal--area-menu'>
            {menuMobile && 
                <div className='header-principal--btn-menu-mobile' ref={btnMenu}>
                    <span onClick={toggleMenu}>Navegar</span>
                    <div onClick={toggleMenu}>
                        <MdOutlineArrowDropDown/>
                    </div>
                </div>
            }
            <div className='header-principal--container-menu' ref={menu}>
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