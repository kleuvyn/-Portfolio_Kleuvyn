import React from 'react';
import './Footer.css';
import logo from '../assets/logo.jpeg'; 



function Footer() {
  return (
    <section className="footer">
      <footer className="footer-conteudo">
        <a href="index.html">
          <img src={logo} alt="Logo" className="logo-img" />
        </a>
        <p>
          Em um mundo de bits e códigos,
          <br />
          programo meu caminho rumo ao futuro,
          <br />
          onde cada linha de código é um passo em direção à inovação e ao progresso.
        </p>
        <div className="imagens-footer">
          <a className="img-footer" href="https://github.com/kleuvyn">
            <img className="img-footer" src="https://img.icons8.com/ios/50/ffffff/github.png" alt="GitHub Kleuvyn" />
          </a>
          <a className="img-footer" href="https://www.linkedin.com/in/beatryz-kleuvyn-467a23198/">
            <img className="img-footer" src="https://img.icons8.com/ios/50/ffffff/linkedin.png" alt="LinkedIn Kleuvyn" />
          </a>
          <a className="img-footer" href="contato.html">
            <img className="img-footer" src="https://img.icons8.com/ios/50/ffffff/email.png" alt="Contato" />
          </a>
        </div>
        <p>&copy; 2024 Kleuvyn</p>
      </footer>
    </section>
  );
}

export default Footer;
