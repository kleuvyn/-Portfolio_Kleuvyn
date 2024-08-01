import React from 'react';
import estudando from '../assets/estudando.jpg';


function Estudos() {
  return (
      <section className='conteudo'>
        <div className='titulo-estudos sobre-mim-texto'>
          <br></br>
          <br></br>
          <h2>
            Jornada de Aprendizado: De Conhecimentos Básicos a Intermediários em Desenvolvimento Web e Ferramentas de Programação
          </h2>
          <img src={estudando} alt="Estudando" style={{ width: '35%', height: '35%' }} className='imag-estudos' />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h3>
          Nos últimos meses, adquiri conhecimentos, abrangendo desde conceitos básicos até intermediários. Embora ainda não domine todos esses conhecimentos com excelência, pretendo dedicar-me e estudar intensamente para dominá-los plenamente e destacar-me no que quer que eu faça. 
        </h3>
        <div className="linha-imgs" style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around' }}>
          <img className="img-conteudo" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" />
          <img className="img-conteudo" src="https://seeklogo.com/images/I/insomnia-logo-A35E09EB19-seeklogo.com.png" alt="Insomnia" />
          <img className="img-conteudo" src="https://img.icons8.com/?size=256&id=aqb9SdV9P8oC&format=png" alt="Ferramenta 3" />
          <img className="img-conteudo" src="https://img.icons8.com/?size=256&id=54087&format=png" alt="Ferramenta 4" />
          <img className="img-conteudo" src="https://img.icons8.com/?size=256&id=0OQR1FYCuA9f&format=png" alt="Ferramenta 5" />
        </div>
      <div className="linha-imgs"style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around' }}>
        <img className="img-conteudo" src="https://img.icons8.com/?size=256&id=61466&format=png" alt="Ferramenta 6" />
        <img className="img-conteudo" src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg" alt="PyCharm" />
        <img className="img-conteudo" src="https://img.icons8.com/?size=256&id=13441&format=png" alt="Ferramenta 8" />
        <img className="img-conteudo" src="https://img.icons8.com/?size=256&id=UFXRpPFebwa2&format=png" alt="Ferramenta 9" />
        <img className="img-conteudo" src="https://img.icons8.com/?size=256&id=8rKdRqZFLurS&format=png" alt="Ferramenta 10" />
      </div>
      <div className="linha-imgs"style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around' }}>
        <img className="img-conteudo" src="https://img.icons8.com/?size=256&id=13679&format=png" alt="Ferramenta 11" />
        <img className="img-conteudo" src="https://img.icons8.com/?size=256&id=108784&format=png" alt="Ferramenta 12" />
        <img className="img-conteudo" src="https://img.icons8.com/?size=256&id=NfbyHexzVEDk&format=png" alt="Ferramenta 13" />
        <img className="img-conteudo" src="https://img.icons8.com/?size=256&id=20909&format=png" alt="Ferramenta 14" />
        <img className="img-conteudo" src="https://img.icons8.com/?size=256&id=7gdY5qNXaKC0&format=png" alt="Ferramenta 15" />
      </div>
 
      <div className="sobre-mim-texto">
        <h2>Estudos</h2>
        <ul  className="estudos-texto">
          <li>Análise e Desenvolvimento de Sistemas (Iesb) - Em andamento</li>
          <li>Licenciatura em Matemática (UniCesumar) - Em andamento</li>
        </ul>
        <h2>Qualificações/Cursos:</h2>
        <p>Concluídos:</p>
        <ul className="estudos-texto">
          <li>Projeto de Código Aberto – Ponto de Venda - IESB</li>
          <li>Potência Tech Powered by iFood | Ciência de Dados – 80h</li>
          <li>Santander Bootcamp 2023 - Ciência de Dados com Python - 89h</li>
          <li>Trilha BackEnd T5 – ONE – 328h</li>
          <li>Trilha FrontEnd T6 – ONE</li>
          <li>Python, Data Science no OCI e Oracle Analytics – ONE - 91h</li>
          <li>SQL com MySQL Server da Oracle – ONE - 70h</li>
          <li>Oracle Cloud Infrastructure – ONE - 21h</li>
          <li>Descubra a Nuvem AWS – LocalizaLabs - 5h</li>
          <li>Projeto de Inclusão Digital – Professora - Informática Básica - 40h</li>
          <li>Projeto de Inclusão Digital - Professora - Intermediário - 30h</li>
          <li>Curso de Auxiliar Administrativo</li>
          <li>Cuidadora Infantil</li>
        </ul>
        <h2>Experiência:</h2>
        <p>
          2023-2024: Projeto de Código Aberto – Ponto de Venda - IESB
        </p>
        <p>
          Cargo: Líder do Projeto e do BackEnd
          <br/>
          Participei de um projeto voluntário na faculdade IESB, onde fui líder por três semestres. Durante esse período, trabalhamos no desenvolvimento de uma plataforma de Ponto de Vendas para beneficiar a comunidade. Esta iniciativa visava atender às necessidades e promover o bem-estar da comunidade. Deixei o projeto nesse semestre para focar no meu portfólio pessoal, pois estou perto de finalizar meu curso.
        </p>
      </div>
    </section>
  );
}

export default Estudos;
