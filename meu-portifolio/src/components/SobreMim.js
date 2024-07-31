import React from 'react';
import designer from '../assets/designer.jpg';

function SobreMim() {
    return (
      <section>
        <div className="imagem-container">
          <img src={designer} alt="Avatar" style={{ width: '100%', height: '450px', borderRadius: '1%' }} />
        </div>
        <div className="titulo">
          <h1>Desenvolvedora em construção</h1>
          <h2>Analisando o Presente, Desenvolvendo o Futuro.</h2>
        </div>
        <div className="sobre-mim-texto">
          <h2>
            Bem-vindo(a) ao Universo Tech de Beatryz Kleuvyn!
          </h2>
          <p>
            Olá, explorador(a) digital!
          </p>
          <p>
            Seja bem-vindo(a) ao meu espaço, onde a paixão pela tecnologia se encontra com a busca incessante por conhecimento. Eu sou Beatryz Kleuvyn, uma entusiasta da inovação e uma aprendiz dedicada da programação. Cada linha de código neste site reflete meu empenho e dedicação em criar uma experiência única para você, com HTML, CSS e JavaScript desenvolvidos por mim mesma.
          </p>
          <p>
            Atualmente, meu foco está na Análise de Dados, um campo que me fascina e no qual desejo me especializar e construir uma carreira. Sou apaixonada por extrair, carregar e tratar dados, e durante esse processo, minha mente se enche de possibilidades e ideias. Visualizo a montagem dos dados no Power BI, elaboro perguntas e considero diversas análises que podem ser realizadas. Embora minha experiência seja predominantemente acadêmica até agora, estou repleta de ideias para colocar em prática e continuar aprimorando minhas habilidades neste emocionante campo da ciência de dados.
          </p>
          <p>
            Sinta-se à vontade para explorar e, juntos, vamos desbravar o fascinante mundo da tecnologia!
          </p>
        </div>
      </section>
    );
  }

export default SobreMim;