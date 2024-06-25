// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/footer.css'; // Importar estilos específicos do Footer.js

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>© 2024 Neto Hoffmann. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
