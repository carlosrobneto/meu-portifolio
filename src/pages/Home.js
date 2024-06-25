// src/pages/Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/home.css'; // Importe o arquivo de estilos específico para a página Home
import eu from '../img/eu-profissional.jpg'; // Importe a imagem

const Home = () => {
    return (
        <Container className="home-container">
            <Row className="top-content">
                <Col md={6} className="left-content">
                    <h1 className='txt-nome'><span></span></h1>
                    <br /><br />
                    <h4>Características</h4>
                    <p>
                        Desenvolvedor Front-End & Back-End<br />
                        Desenvolvedor de Software<br /><br />
                        Resumindo, sou alguém apaixonado por programação não importa a linguagem!
                    </p>
                </Col>
                <Col md={6} className="right-content">
                    <img
                        src={eu}
                        alt="Minha Foto"
                        className="eu-img"
                    />
                </Col>
            </Row>
            
            <Row className="skills">
                <Col md={6} className="Hard">
                    <h4>Hard Skills</h4>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        {/* Adicione mais habilidades conforme necessário */}
                    </ul>
                </Col>
                <Col md={6} className="Soft">
                    <h4>Soft Skills</h4>
                    <ul>
                        <li>Trabalho em equipe</li>
                        <li>Comunicação eficaz</li>
                        <li>Pensamento crítico</li>
                        <li>Resolução de problemas</li>
                        {/* Adicione mais habilidades conforme necessário */}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
