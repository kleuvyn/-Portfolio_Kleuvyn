import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Logo from './assets/logo.jpeg'; 
import SobreMim from './components/SobreMim';
import Estudos from './components/Estudos';
import Backend from './components/Backend';
import Frontend from './components/Frontend';
import CienciaDeDados from './components/CienciaDeDados'
import Contatos from './components/Contatos';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <div className="navbar-logo">
              <Link to="/">
                <img src={Logo} alt="Logo" className="logo-img" />
              </Link>
            </div>
            <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
              <li><Link to="/">Sobre Mim</Link></li>
              <li><Link to="/estudos">Estudos</Link></li>
              <li><Link to="/backend">Backend</Link></li>
              <li><Link to="/frontend">Frontend</Link></li>
              <li><Link to="/ciencia-de-dados">Ciência de Dados</Link></li>
              <li><Link to="/contatos">Contatos</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<SobreMim />} />
            <Route path="/estudos" element={<Estudos />} />
            <Route path="/backend" element={<Backend />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/ciencia-de-dados" element={<CienciaDeDados />} />
            <Route path="/contatos" element={<Contatos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
