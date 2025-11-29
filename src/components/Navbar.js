import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CustomNavbar = ({ scrolled }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      bg="white" 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      className={`custom-navbar ${scrolled ? 'scrolled' : ''} shadow-sm py-3`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <div className="clinic-logo me-2">
            <div className="logo-icon">⚕️</div>
          </div>
          <div>
            <div className="clinic-name">Mata Charno Devi</div>
            <div className="clinic-tagline">Prosthetic, Orthotic & Physiotherapy</div>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={handleNavClick}
            >
              About Us
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/services" 
              className={location.pathname === '/services' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Services
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/treatments" 
              className={location.pathname === '/treatments' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Treatments
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/location" 
              className={location.pathname === '/location' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Location & Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;