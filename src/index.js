import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MidiasProvider from './contexts/Midias';
import UsuariosProvider from './contexts/Usuarios';

ReactDOM.render(
  <React.StrictMode>
    <MidiasProvider>
      <UsuariosProvider>
        <App />
      </UsuariosProvider>
    </MidiasProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
