import React from 'react';
import { Container, Row, Col, Card, Accordion, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const Services = () => {
  const heroImage = "https://images.unsplash.com/photo-1516549655669-df6654e447e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  const mainServices = [
    {
      id: "prosthetic",
      title: "Prosthetic Services",
      icon: "fas fa-robot",
      image: "https://images.unsplash.com/photo-1584467735871-8db9ac8e5e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Custom artificial limbs designed for optimal comfort, functionality, and natural movement.",
      features: [
        "Upper Limb Prosthetics",
        "Lower Limb Prosthetics",
        "Microprocessor Knees",
        "Bionic Hands",
        "Custom Socket Design",
        "Gait Training"
      ],
      details: "Our prosthetic solutions incorporate the latest technology including microprocessor-controlled joints, myoelectric systems, and advanced materials for superior performance and comfort."
    },
    {
      id: "orthotic",
      title: "Orthotic Services",
      icon: "fas fa-bone",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Specialized braces and supports to improve mobility, stability, and alignment.",
      features: [
        "Spinal Orthotics",
        "Upper Extremity Orthotics",
        "Lower Extremity Orthotics",
        "Custom Foot Orthotics",
        "Cranial Helmets",
        "Sports Orthotics"
      ],
      details: "We create custom orthotic devices using 3D scanning and CAD/CAM technology to ensure perfect fit and optimal biomechanical function for various conditions."
    },
    {
      id: "physiotherapy",
      title: "Physiotherapy",
      icon: "fas fa-hand-holding-heart",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive rehabilitation programs for recovery, pain management, and functional improvement.",
      features: [
        "Post-Surgical Rehabilitation",
        "Pain Management",
        "Neurological Rehabilitation",
        "Sports Injury Recovery",
        "Geriatric Care",
        "Pediatric Therapy"
      ],
      details: "Our evidence-based physiotherapy programs include manual therapy, therapeutic exercises, electrotherapy, and functional training tailored to individual needs and goals."
    }
  ];

  const specializedServices = [
    {
      title: "Pediatric Care",
      description: "Specialized services for children with congenital or acquired disabilities.",
      icon: "fas fa-child"
    },
    {
      title: "Geriatric Rehabilitation",
      description: "Comprehensive care for age-related mobility issues and conditions.",
      icon: "fas fa-user-friends"
    },
    {
      title: "Sports Injury Management",
      description: "Advanced rehabilitation for athletes and active individuals.",
      icon: "fas fa-running"
    },
    {
      title: "Neurological Rehabilitation",
      description: "Specialized programs for stroke, spinal cord, and neurological conditions.",
      icon: "fas fa-brain"
    },
    {
      title: "Amputee Rehabilitation",
      description: "Complete care from pre-operative counseling to advanced gait training.",
      icon: "fas fa-user-injured"
    },
    {
      title: "Custom Device Fabrication",
      description: "On-site manufacturing of personalized prosthetic and orthotic devices.",
      icon: "fas fa-tools"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Comprehensive evaluation including medical history, physical examination, and functional assessment."
    },
    {
      step: "02",
      title: "Treatment Planning",
      description: "Personalized care plan development with measurable goals and timeline."
    },
    {
      step: "03",
      title: "Device Fabrication",
      description: "Custom manufacturing using advanced technology and precision techniques."
    },
    {
      step: "04",
      title: "Fitting & Training",
      description: "Professional fitting sessions and comprehensive training for optimal use."
    },
    {
      step: "05",
      title: "Follow-up Care",
      description: "Regular monitoring, adjustments, and ongoing support services."
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive Prosthetic, Orthotic, and Physiotherapy Solutions for Enhanced Mobility and Quality of Life"
        backgroundImage={heroImage}
        showButtons={false}
      />

      {/* Main Services */}
      <section className="py-5" id="main-services">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <Badge bg="primary" className="mb-3 px-3 py-2">What We Offer</Badge>
              <h2 className="display-5 fw-bold mb-3">Comprehensive Care Services</h2>
              <p className="lead text-muted">
                We provide integrated solutions that address the complete spectrum of mobility 
                and rehabilitation needs with cutting-edge technology and compassionate care.
              </p>
            </Col>
          </Row>

          {mainServices.map((service, index) => (
            <Row 
              key={service.id} 
              className={`align-items-center mb-5 py-4 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              <Col lg={6} className="mb-4 mb-lg-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="img-fluid rounded shadow service-detail-img"
                />
              </Col>
              <Col lg={6}>
                <div className="service-content">
                  <div className="d-flex align-items-center mb-3">
                    <div className="service-icon-wrapper me-3">
                      <i className={`${service.icon} fa-2x text-primary`}></i>
                    </div>
                    <h3 className="h2 fw-bold text-primary mb-0">{service.title}</h3>
                  </div>
                  <p className="lead text-muted mb-4">{service.description}</p>
                  <p className="text-muted mb-4">{service.details}</p>
                  
                  <Row className="mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <Col md={6} key={featureIndex}>
                        <div className="d-flex align-items-center mb-2">
                          <i className="fas fa-check-circle text-success me-2"></i>
                          <span className="text-muted">{feature}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>

                  <Button as={Link} to="/treatments" variant="outline-primary" size="lg">
                    Learn About Treatments
                  </Button>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      {/* Specialized Services */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <Badge bg="primary" className="mb-3 px-3 py-2">Specialized Care</Badge>
              <h2 className="display-5 fw-bold mb-3">Additional Specialized Services</h2>
              <p className="lead text-muted">
                Beyond our core services, we offer specialized programs to address unique 
                patient needs and specific conditions.
              </p>
            </Col>
          </Row>

          <Row>
            {specializedServices.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="specialized-service-card border-0 shadow-sm h-100">
                  <Card.Body className="p-4 text-center">
                    <div className="specialized-icon mb-3">
                      <i className={`${service.icon} fa-3x text-primary`}></i>
                    </div>
                    <Card.Title className="h5 fw-bold text-primary mb-3">
                      {service.title}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Service Process */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold mb-3">Our Service Process</h2>
              <p className="lead">
                We follow a systematic approach to ensure comprehensive care and optimal outcomes for every patient.
              </p>
            </Col>
          </Row>

          <Row>
            {processSteps.map((step, index) => (
              <Col lg={12} key={index} className="mb-4">
                <div className="process-step d-flex align-items-start">
                  <div className="step-number me-4">
                    <div className="step-circle bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center">
                      <span className="fw-bold fs-5">{step.step}</span>
                    </div>
                  </div>
                  <div className="step-content flex-grow-1">
                    <h4 className="fw-bold mb-2">{step.title}</h4>
                    <p className="text-light mb-0">{step.description}</p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="process-connector ms-4 ps-3">
                    <div className="connector-line"></div>
                  </div>
                )}
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
              <p className="lead text-muted">
                Get answers to common questions about our services and treatment processes.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10}>
              <Accordion defaultActiveKey="0" className="service-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How long does it take to get a custom prosthetic device?
                  </Accordion.Header>
                  <Accordion.Body>
                    The timeline for a custom prosthetic device typically ranges from 2-6 weeks, 
                    depending on the complexity of the device, your specific needs, and the 
                    healing process. This includes assessment, casting, fabrication, fitting, 
                    and training sessions.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Do you accept insurance for your services?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, we work with most major insurance providers and assist with pre-authorization 
                    and claims processing. Our administrative team will verify your benefits and 
                    guide you through the insurance process to maximize your coverage.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    What makes your orthotic devices different from off-the-shelf options?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our orthotic devices are custom-made using 3D scanning and CAD/CAM technology 
                    to ensure perfect fit and optimal biomechanical function. Unlike off-the-shelf 
                    options, they are specifically designed for your unique anatomy and condition, 
                    providing superior comfort, support, and effectiveness.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    How often will I need physiotherapy sessions?
                  </Accordion.Header>
                  <Accordion.Body>
                    The frequency of physiotherapy sessions depends on your specific condition, 
                    treatment goals, and progress. Typically, patients start with 2-3 sessions 
                    per week, which may be adjusted as you improve. Your therapist will create 
                    a personalized schedule during your initial assessment.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Do you provide emergency or same-day services?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, we offer emergency services for urgent prosthetic and orthotic needs, 
                    such as device repairs or adjustments. For acute physiotherapy needs, we 
                    strive to accommodate same-day appointments whenever possible. Contact our 
                    emergency line for immediate assistance.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h3 className="fw-bold mb-3">Ready to Start Your Journey to Better Mobility?</h3>
              <p className="text-muted mb-4">
                Contact us today to schedule a consultation and discover how our services 
                can help you achieve your mobility goals.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Button as={Link} to="/location" variant="primary" size="lg" className="px-4">
                  <i className="fas fa-calendar-check me-2"></i>
                  Schedule Consultation
                </Button>
                <Button variant="outline-primary" size="lg" className="px-4">
                  <i className="fas fa-phone me-2"></i>
                  Call: +1 (555) 123-4567
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;