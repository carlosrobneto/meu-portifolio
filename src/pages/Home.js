// src/pages/Home.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../css/home.css"; // Importe o arquivo de estilos específico para a página Home
import eu from "../img/eu-profissional.jpg"; // Importe a imagem


const Home = () => {
    const [selectedButton, setSelectedButton] = useState(1); // Estado para controlar o botão selecionado

    // Dados dos projetos por botão
    const projectsData = {
        1: [
            { id: 1, image: "projeto1.jpg", text: "Descrição do Projeto 1" },
            { id: 2, image: "projeto2.jpg", text: "Descrição do Projeto 2" },
        ],
        2: [
            { id: 3, image: "projeto3.jpg", text: "Descrição do Projeto 3" },
            { id: 4, image: "projeto4.jpg", text: "Descrição do Projeto 4" },
        ],
        3: [
            { id: 5, image: "projeto5.jpg", text: "Descrição do Projeto 5" },
            { id: 6, image: "projeto6.jpg", text: "Descrição do Projeto 6" },
        ],
    };

    // Função para atualizar o botão selecionado
    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
    };
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
                        <div className="button-wrapper">
                            <button className='button-dev-left-titulo'>Front-End</button>
                            <div className="popup">Tecnologias e ferramentas usadas para criar interfaces de usuário.</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-left'>HTML</button>
                            <div className="popup">Linguagem de marcação para a criação de páginas web.</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-left'>CSS</button>
                            <div className="popup">Estilização de elementos HTML.</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-left'>JavaScript</button>
                            <div className="popup">Linguagem de programação para criar interatividade em páginas web.</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-left'>TypeScript</button>
                            <div className="popup">Uma linguagem de programação que é um superconjunto de JavaScript, adicionando tipagem estática e outros recursos.</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-left-button'>SCSS</button>
                            <div className="popup">Compilador de CSS, usado para estilização de elementos HTML.</div>
                        </div>
                    </div>
                    <div className="card-center">
                        <div className="button-wrapper">
                            <button className='button-dev-center titulo'>Back-End</button>
                            <div className="popup">Tecnologias e ferramentas usadas para gerenciar o servidor, banco de dados e lógica do aplicativo.</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-center'>Node.js</button>
                            <div className="popup">Ambiente de execução JavaScript do lado do servidor.</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-center'>PHP</button>
                            <div className="popup">Uma linguagem de programação popular para desenvolvimento web, usada com frameworks como Laravel e Symfony.</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-center'>Python</button>
                            <div className="popup">Linguagem de programação usada para desenvolvimento web, automação e análise de dados.</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-center'>SQL</button>
                            <div className="popup">Linguagem de programação padrão para gerenciamento e manipulação de bancos de dados relacionais.</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-center'>C#</button>
                            <div className="popup">Linguagem de programação moderna e orientada a objetos, desenvolvida pela Microsoft como parte da plataforma.</div>
                        </div>
                    </div>
                    <div className="card-rigth">
                        <div className="button-wrapper">
                            <button className='button-dev-rigth-titulo'>Frameworks</button>
                            <div className="popup">Conjunto de ferramentas e bibliotecas para ajudar no desenvolvimento de aplicações web.</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-rigth'>React.js</button>
                            <div className="popup">Framework JavaScript para construção de interfaces de usuário, desenvolvida pelo Facebook. <br /> (OBS: Este portifólio é feito em React.js)</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-rigth'>Bootstrap</button>
                            <div className="popup">Framework CSS para desenvolvimento responsivo e móvel-first.</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-rigth'>Django</button>
                            <div className="popup">Framework web de alto nível para a linguagem de programação Python.</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-rigth'>Laravel</button>
                            <div className="popup">Framework web PHP conhecido por sua sintaxe expressiva e elegante.</div>
                        </div>
                        <div className="button-wrapper">
                            <button className='button-dev-rigth-button'>Angular</button>
                            <div className="popup">Plataforma de desenvolvimento para construir aplicações web com TypeScript.</div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="projects-section">
                <div className="projects-buttons">
                    <button
                        className={`project-button b-p-direita ${selectedButton === 1 ? "active" : ""}`}
                        onClick={() => handleButtonClick(1)}
                    >
                        1
                    </button>
                    <button
                        className={`project-button ${selectedButton === 2 ? "active" : ""}`}
                        onClick={() => handleButtonClick(2)}
                    >
                        2
                    </button>
                    <button
                        className={`project-button b-p-esquerda ${selectedButton === 3 ? "active" : ""}`}
                        onClick={() => handleButtonClick(3)}
                    >
                        3
                    </button>
                </div>

                {/* Lista de projetos */}
                <div className="projects-list">
                    {projectsData[selectedButton].map((project) => (
                        <Col key={project.id} md={6} className="project">
                            <img src={project.image} alt={`Projeto ${project.id}`} className="project-image" />
                            <div className="project-text">
                                <p>{project.text}</p>
                                <button className="saiba-mais">Saiba Mais</button>
                            </div>
                        </Col>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Home;
