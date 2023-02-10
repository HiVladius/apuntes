import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Edad from './adivinar_edad'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Edad />
  </React.StrictMode>
);


