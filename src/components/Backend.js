import React from 'react';
import PDV from '../assets/pdv.png';
import Login from '../assets/login.jpeg';
import Cadastro from '../assets/cadastro.jpeg'
import Gerenciamento from '../assets/gerenciamento.jpeg'

function Backend() {
    return (
      <section className='back' >
        <h1>
          Backend Development
        </h1>
        <br></br>
        <h2>
            Minha Experiência no Projeto PDV
        </h2>
        <p>
          De 2023 a 2024, liderar o projeto de código aberto na faculdade foi uma experiência incrível. Trabalhamos na criação de um sistema de Ponto de Venda (PDV) eletrônico, buscando otimizar transações comerciais e melhorar a gestão. Essa iniciativa não só aprimorou minhas habilidades técnicas, mas também destacou a importância do trabalho em equipe e da contribuição comunitária.
        </p>
        <div className='sobre-mim-texto' style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div  className="linha-imgs"  style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around' }}>   
            <img src={PDV} alt="PDV" style={{ width: '40%', height: '40%'  }} className='imag-back' />
            <img src={Cadastro} alt="cadastro" style={{ width: '40%', height: '40%'  }} className='imag-back' />
          </div>
          <div  className="linha-imgs" style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around' }}>
            <img src={Login} alt="login" style={{ width: '40%', height: '40%' }} className='imag-back' />
            <img src={Gerenciamento} alt="login" style={{ width: '40%', height: '40%' }} className='imag-back' />
          </div>
        </div>
        <div>
          <h3>
            Projeto PDV no GitHub
          </h3>
          <p>
            Começamos planejando e estruturando o banco de dados, criando tabelas essenciais como Usuário, Cliente, Fornecedor, e Produto. No desenvolvimento do back-end, utilizamos Node.js e TypeScript para construir uma API robusta com NestJS, implementando funcionalidades como autenticação de usuários e gerenciamento de produtos.
          </p>
          <p>
            Na segunda fase, enfrentamos novos desafios, como implementar o Docker para facilitar a configuração do ambiente e integrar o ORM Prisma para melhorar as interações com o banco de dados. Cada etapa foi uma oportunidade de aprendizado e crescimento.
          </p>
          <p>
            Para saber mais sobre o projeto PDV e acessar o código-fonte, visite o repositório no GitHub:
            <a href="https://github.com/fabrica-bayarea/pdv-back" target="_blank" rel="noopener noreferrer"> Projeto PDV BackEnd
            </a>.
          </p>
          <h1>
            Tecnologias Utilizadas:
          </h1>
          <ul>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>MySQL</li>
            <li>NestJS</li>
            <li>Docker</li>
            <li>Prisma</li>
          </ul>
          </div>
      </section>
    );
  }
  
  export default Backend;
  