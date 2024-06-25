// src/pages/Home.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/home.css"; // Importe o arquivo de estilos específico para a página Home
import eu from "../img/eu-profissional.jpg"; // Importe a imagem

const Home = () => {
    return (
        <>
            <Container className="home-container">
                <Row className="top-content">
                    <Col md={6} className="left-content">
                        <h1 className="txt-nome">
                            <span></span>
                        </h1>
                        <br />
                        <br />
                        <h4 className="legenda">Desenvolvedor Full-Stack</h4>
                        <div className="linha"></div>
                        <button className="button-legenda">GitHub</button>
                        <button className="button-legenda">Linkedin</button>
                    </Col>

                    <Col md={6} className="right-content">
                        <img src={eu} alt="Minha Foto" className="eu-img" />
                    </Col>
                </Row>
            </Container>
            <div className="Sobre">
                <Container className="home-container">
                    <Row>
                        <Col md={6} className="left-about">
                            <img src={eu} alt="Minha Foto" className="eu-img" />
                        </Col>
                        <Col md={6} className="right-about">
                            <h1 className="sobre-titulo">Sobre-mim</h1>
                            <p>
                                Tenho interesse na área de programação desde os 9 anos de idade.
                                Inicialmente, estudei hardware com meu pai, que é formado em
                                Mecatrônica. Aos 10 anos, comecei a estudar software e, nessa
                                mesma idade, dei meus primeiros passos desenvolvendo
                                calculadoras, jogos como Tetris, entre outros.
                                <br></br>
                                Aos 12 anos, despertei interesse em Web Design e, desde então,
                                tenho realizado diversos projetos como freelancer, atuando em
                                sites de médio e grande porte, como o da cabopec.com.br.
                                <br></br>
                                Tenho vários projetos publicados em meu GitHub, mas nunca
                                trabalhei formalmente na área (sob o regime CLT). Gostaria de
                                iniciar minha carreira profissional agora. Acredito que me
                                destacarei rapidamente onde quer que eu trabalhe, pois possuo
                                amplo conhecimento e aprendo novas habilidades de forma rápida e
                                eficiente.
                            </p>
                            <button className="cv">Abrir CV</button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <div className='row-skills'>
                    <div className="card-left">
                        <button className='button-dev-left-titulo'>Front-End</button>
                        <button className='button-dev-left'>GitHub</button>
                        <button className='button-dev-left'>GitHub</button>
                        <button className='button-dev-left'>GitHub</button>
                        <button className='button-dev-left'>GitHub</button>
                        <button className='button-dev-left-button'>GitHub</button>
                    </div>
                    <div className="card-center">
                        <button className='button-dev-center titulo'>Back-End</button>
                        <button className='button-dev-center'>GitHub</button>
                        <button className='button-dev-center'>GitHub</button>
                        <button className='button-dev-center'>GitHub</button>
                        <button className='button-dev-center'>GitHub</button>
                        <button className='button-dev-center'>GitHub</button>
                    </div>
                    <div className="card-rigth">
                        <button className='button-dev-rigth-titulo'>Framework</button>
                        <button className='button-dev-rigth'>GitHub</button>
                        <button className='button-dev-rigth'>GitHub</button>
                        <button className='button-dev-rigth'>GitHub</button>
                        <button className='button-dev-rigth'>GitHub</button>
                        <button className='button-dev-rigth-button'>GitHub</button>

                    </div>
                </div>
            </Container>

        </>
    );
};

export default Home;
