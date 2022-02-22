import { createContext, useState, useEffect } from 'react';
import avatarpadrao1 from '../assets/perfil-padrao1.png';
import avatarpadrao2 from '../assets/perfil-padrao2.jpg';
import avatarpadrao3 from '../assets/perfil-padrao3.jpg';
import avatarpadrao4 from '../assets/perfil-padrao4.jpg';
import avatarpadrao5 from '../assets/perfil-padrao5.jpg';

export const UsuariosContext = createContext();

export default function UsuariosProvider({children}){
    const [usuarios, setUsuarios] = useState([
        {id: 1, nome: 'Yann Figueiredo', avatar: avatarpadrao1},
        {id: 2, nome: 'Alex Figueiredo', avatar: avatarpadrao2},
        {id: 3, nome: 'Claudia Figueiredo', avatar: avatarpadrao3},
        {id: 4, nome: 'Ádilla Figueiredo', avatar: avatarpadrao4},
        {id: 5, nome: 'Max Figueiredo', avatar: avatarpadrao5}
    ]);

    const [ativo, setAtivo] = useState(usuarios[0].id);

    return(
        <UsuariosContext.Provider value={{usuarios, ativo, setAtivo}}>
            {children}
        </UsuariosContext.Provider>
    );
}