import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tablas from './components/Tablas.js';
import Crear from './components/Crear.js';
import Bienvenida from './components/Bienvenida.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<Bienvenida/>} />
            <Route path="/Tablas" element={<Tablas/>} />
            <Route path="/Crear" element={<Crear/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
