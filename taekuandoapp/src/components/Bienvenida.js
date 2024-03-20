import React from 'react';
import logo from '../logo.png';

function Bienvenida() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Bienvenido a <strong style={{color: "red"}}>Taekuondo-App</strong>
        </p>
        <a href='/Tablas'>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Comenzar
          </button>
        </a>
    </div>
  );
}

export default Bienvenida;