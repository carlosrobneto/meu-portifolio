// src/pages/Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/home.css'; // Importar estilos específicos para Home

const Home = () => {
  return (
    <Container className="home-container my-5">
      <Row className="align-items-center">
        <Col className="text-center">
          <h1 className="home-title">Bem-vindo ao Meu Portfólio</h1>
          <p className="home-lead">Veja meus projetos e entre em contato.</p>
          <Button className="home-button" variant="primary" size="lg">Saiba Mais</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
