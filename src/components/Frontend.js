import React from 'react';
import Padaria from '../assets/padaria.png';
import Site from '../assets/site.png';
import Decodificador from '../assets/decodificador.png'
import Alura from '../assets/alura.png';
import PDV from '../assets/pdv.png';
import Cadastro from '../assets/cadastro.jpeg';


function Frontend() {
    return (
      <section className='conteudo'>
        <h2>Desenvolvimento de Frontend</h2>
        <p>
          Estou imersa no mundo do desenvolvimento de frontend, empenhando-me em aprofundar meu conhecimento e habilidades nessa área. Trabalhando com tecnologias como HTML, CSS, JavaScript, e outras, estou focada em criar interfaces de usuário atraentes, responsivas e de alta qualidade. Estou constantemente explorando novos frameworks e bibliotecas para melhorar minhas habilidades e oferecer experiências excepcionais aos usuários.
        </p>
        <div className='sobre-mim-texto' style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div  className="linha-imgs" style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around' }}> 
            <img src={Site} alt="Site" style={{ width: '40%', height: '40%'  }} className='imag-back' />
            <img src={Alura} alt="Portifolio Alura" style={{ width: '40%', height: '40%'  }} className='imag-back' />
          </div>
          <div  className="linha-imgs" style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around' }}> 
            <img src={Padaria} alt="Padaria" style={{ width: '40%', height: '40%'  }} className='imag-back' />
            <img src={Decodificador} alt="Decodificador" style={{ width: '40%', height: '40%'  }} className='imag-back' />
          </div>
        </div>
        <p>
          No Projeto PDV, minha principal responsabilidade foi no back-end, mas também auxiliei no front-end, onde trabalhei na troca do layout e na criação de funcionalidades importantes. Utilizei Next.js e React para desenvolver um layout moderno e funcional.

          Fiz a implementação do carrinho de compras e das telas de estoque, garantindo uma navegação intuitiva e uma apresentação clara das informações. Além disso, reralizei a migração do projeto para Docker, facilitando a integração entre front-end e back-end e melhorando a consistência e o gerenciamento do ambiente de desenvolvimento.

          Essa experiência não só aprimorou minhas habilidades em design e desenvolvimento, mas também reforçou a importância de uma boa experiência do usuário e da eficiência na integração das tecnologias.
        </p>
        <div className='sobre-mim-texto imagens-projetos'>
          <div className="linha-imgs">
            <img src={PDV} alt="PDV" style={{ width: '40%', height: '40%'  }} className='imag-back' />
            <img src={Cadastro} alt="cadastro" style={{ width: '40%', height: '40%'  }} className='imag-back' />
          </div>
        </div>
        <h3>Tecnologias Utilizadas:</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React</li>
          <li>Criação de interfaces responsivas</li>
        </ul>
      </section>
    );
  }
    
  export default Frontend;