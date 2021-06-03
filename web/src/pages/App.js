import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './App.css';
import Header from '../components/header';
import Card from '../components/card';

function App() {
  const [idScreen, setIdScreen] = useState(0);
  const [lgShow, setLgShow] = useState(false);

  const ObjPessoas = [
    {
      name: "Pedro da Silva",
      msg: "Me ajudem pfv",
    },
    {
      name: "Renan Molinari",
      msg: "Gostaria de ter um jantar em familia",
    },
    {
      name: "Rebeca Santos",
      msg: "Tenho 13 anos e nunca tive uma boneca",
    },
    {
      name: "Yuri Martins",
      msg: "Meu sonho é ter uma bola",
    },
    {
      name: "Maria Ferreira",
      msg: "Gostaria de poder jantar todos os dias",
    },

  ];

  console.log('home', idScreen)
  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      <div className="App">
        <Header setIdScreen={setIdScreen} />
        {!idScreen ?
          <div className="container">
            <div className="content">
              <div className="subtitle">
                O mundo seria um lugar muito melhor se doássemos<br />aquilo que temos em abundância ao nosso<br />próximo necessitado.
            </div>
              <div className="container-card">
                {ObjPessoas.map(obj => {
                  return <Card setLgShow={setLgShow} name={obj.name} msg={obj.msg} />
                })}
              </div>
            </div>
          </div>
          :
          <div className="container">
            <div className="contentAbout">
              <div className="containerAbout-img">
                <img src="https://media-exp1.licdn.com/dms/image/C4E2DAQGt2e1zLo77vg/profile-treasury-image-shrink_800_800/0/1597850436834?e=1622764800&v=beta&t=Dvb7EUco6gts0eQHGBc-nWAo_x6zyOkK_Wk8uNfyMcg" alt="Foto do grupo" />
              </div>
              <div className="containerAbout-info">
                <h4>Sobre o projeto:</h4>
                <p>
                  A ideia da nossa aplicação junto com o Projeto de Vida, foi criar um site de
                  doação simples, útil e seguro, afim de contribuir com a sociedade nesse
                  momento tão difícil, onde qualquer ajuda é de grande importancia na vida dos que
                  estão precisando, faça o bem sem olhar a quem e a vida lhe pagara em dobro!
              </p>
                <h4>Curso:</h4>
                <span>Análise e Desenvolvimento de Sistemas.</span>
                <h4>Projeto Integrador desenvolvido na faculdade:</h4>
                <span>Unisal campus São José.</span>
              </div>

            </div>
          </div>
        }
      </div>
    </>
  );
}

export default App;
