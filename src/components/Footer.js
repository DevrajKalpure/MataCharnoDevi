import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <h5 className="text-primary mb-3">Mata Charno Devi Clinic</h5>
            <p className="text-light">
              Providing comprehensive prosthetic, orthotic, and physiotherapy services 
              with cutting-edge technology and compassionate care since 2010.
            </p>
            <div className="social-links mt-3">
              <a href="#" className="text-light me-3">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h6 className="text-primary mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-light text-decoration-none">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/treatments" className="text-light text-decoration-none">Treatments</Link>
              </li>
              <li className="mb-2">
                <Link to="/location" className="text-light text-decoration-none">Location</Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h6 className="text-primary mb-3">Our Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2 text-light">Prosthetic Solutions</li>
              <li className="mb-2 text-light">Orthotic Devices</li>
              <li className="mb-2 text-light">Physiotherapy</li>
              <li className="mb-2 text-light">Rehabilitation</li>
              <li className="mb-2 text-light">Custom Orthotics</li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h6 className="text-primary mb-3">Contact Info</h6>
            <div className="text-light">
              <p className="mb-2">
                <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                123 Healthcare Road, Medical District
              </p>
              <p className="mb-2">
                <i className="fas fa-phone me-2 text-primary"></i>
                +1 (555) 123-4567
              </p>
              <p className="mb-2">
                <i className="fas fa-envelope me-2 text-primary"></i>
                info@matacharnodevi.com
              </p>
              <p className="mb-2">
                <i className="fas fa-clock me-2 text-primary"></i>
                Mon-Sat: 8:00 AM - 8:00 PM
              </p>
            </div>
          </Col>
        </Row>
        
        <hr className="bg-light my-4" />
        
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              &copy; {currentYear} Mata Charno Devi Clinic. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">
              Designed with ❤️ for better healthcare
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;