import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const heroImage = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
  
  const services = [
    {
      title: "Prosthetic Solutions",
      description: "Custom artificial limbs designed for optimal comfort and functionality.",
      image: "https://images.unsplash.com/photo-1584467735871-8db9ac8e5e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services#prosthetic"
    },
    {
      title: "Orthotic Devices",
      description: "Specialized braces and supports to improve mobility and stability.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services#orthotic"
    },
    {
      title: "Physiotherapy",
      description: "Comprehensive rehabilitation programs for recovery and pain management.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services#physiotherapy"
    }
  ];

  const stats = [
    { number: "5000+", label: "Patients Treated" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Specialized Staff" },
    { number: "98%", label: "Success Rate" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection
        title="Mata Charno Devi Clinic"
        subtitle="Advanced Prosthetic, Orthotic & Physiotherapy Solutions for Enhanced Mobility and Quality of Life"
        backgroundImage={heroImage}
      />

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center">
            {stats.map((stat, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <div className="stat-item">
                  <h2 className="text-primary fw-bold">{stat.number}</h2>
                  <p className="text-muted fw-semibold">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <Badge bg="primary" className="mb-3 px-3 py-2">Our Services</Badge>
              <h2 className="display-5 fw-bold mb-3">Comprehensive Care Solutions</h2>
              <p className="lead text-muted">
                We provide integrated prosthetic, orthotic, and physiotherapy services 
                tailored to meet individual needs and restore mobility.
              </p>
            </Col>
          </Row>

          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="service-card h-100 border-0 shadow-hover">
                  <Card.Img 
                    variant="top" 
                    src={service.image} 
                    alt={service.title}
                    className="card-img-service"
                  />
                  <Card.Body className="p-4">
                    <Card.Title className="h5 fw-bold text-primary">
                      {service.title}
                    </Card.Title>
                    <Card.Text className="text-muted mb-4">
                      {service.description}
                    </Card.Text>
                    <Button 
                      as={Link} 
                      to={service.link} 
                      variant="outline-primary"
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">
                Why Choose Mata Charno Devi Clinic?
              </h2>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-check-circle me-3 mt-1 text-warning"></i>
                  <span>State-of-the-art technology and modern equipment</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-check-circle me-3 mt-1 text-warning"></i>
                  <span>Experienced and certified professionals</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-check-circle me-3 mt-1 text-warning"></i>
                  <span>Personalized treatment plans for each patient</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-check-circle me-3 mt-1 text-warning"></i>
                  <span>Comprehensive aftercare and support services</span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="fas fa-check-circle me-3 mt-1 text-warning"></i>
                  <span>Proven track record of successful outcomes</span>
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Clinic Facilities"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Emergency Contact */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h3 className="fw-bold mb-3">Need Immediate Assistance?</h3>
              <p className="text-muted mb-4">
                Our emergency care team is available to provide immediate support and guidance.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Button variant="primary" size="lg" className="px-4">
                  <i className="fas fa-phone me-2"></i>
                  Emergency: +1 (555) 123-HELP
                </Button>
                <Button as={Link} to="/location" variant="outline-primary" size="lg" className="px-4">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  Find Our Location
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;