import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroSection = ({ title, subtitle, backgroundImage, showButtons = true }) => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return (
    <section 
      className="hero-section text-white d-flex align-items-center min-vh-100"
      style={heroStyle}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h1 className="display-3 fw-bold mb-4 animate-fade-in">
              {title}
            </h1>
            <p className="lead mb-5 fs-4 animate-fade-in-delay">
              {subtitle}
            </p>
            {showButtons && (
              <div className="animate-fade-in-delay-2">
                <Button 
                  as={Link} 
                  to="/services" 
                  variant="primary" 
                  size="lg" 
                  className="me-3 px-4 py-2"
                >
                  Our Services
                </Button>
                <Button 
                  as={Link} 
                  to="/location" 
                  variant="outline-light" 
                  size="lg" 
                  className="px-4 py-2"
                >
                  Visit Us
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;