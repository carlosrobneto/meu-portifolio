// src/pages/Projects.js
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      link: '#'
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2',
      link: '#'
    }
    // Adicionar mais projetos conforme necessário
  ];

  return (
    <Container>
      <h1>Projetos</h1>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Link href={project.link}>Ver Projeto</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
