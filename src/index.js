import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MidiasProvider from './contexts/Midias';

ReactDOM.render(
  <React.StrictMode>
    <MidiasProvider>
      <App />
    </MidiasProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
