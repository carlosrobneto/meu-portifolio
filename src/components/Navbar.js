// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSun, BsMoon } from 'react-icons/bs'; // Importe os ícones desejados
import '../css/navbar.css';

const CustomNavbar = ({ toggleTheme, theme }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
      <Navbar.Brand as={Link} to="/">Meu Portfólio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">Sobre Mim</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projetos</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
