import React from 'react';
import { Container, Row, Col, Card, Table, Badge, Button, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const Treatments = () => {
  const heroImage = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  const treatmentCategories = [
    {
      category: "Prosthetic Treatments",
      icon: "fas fa-robot",
      treatments: [
        {
          name: "Upper Limb Prosthetics",
          description: "Advanced artificial arms and hands with various control options",
          duration: "4-6 weeks",
          successRate: 96,
          image: "https://images.unsplash.com/photo-1584467735871-8db9ac8e5e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Lower Limb Prosthetics",
          description: "Custom legs and feet for different activity levels and needs",
          duration: "3-5 weeks",
          successRate: 98,
          image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Microprocessor Prosthetics",
          description: "Computer-controlled joints for natural movement and stability",
          duration: "5-7 weeks",
          successRate: 95,
          image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    {
      category: "Orthotic Treatments",
      icon: "fas fa-bone",
      treatments: [
        {
          name: "Spinal Orthotics",
          description: "Custom braces for spinal conditions and post-surgical support",
          duration: "2-3 weeks",
          successRate: 94,
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Limb Orthotics",
          description: "Braces and supports for upper and lower extremities",
          duration: "1-2 weeks",
          successRate: 97,
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Custom Foot Orthotics",
          description: "Personalized insoles for various foot conditions and activities",
          duration: "1 week",
          successRate: 99,
          image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    {
      category: "Physiotherapy Treatments",
      icon: "fas fa-hand-holding-heart",
      treatments: [
        {
          name: "Neurological Rehabilitation",
          description: "Therapy for stroke, spinal cord, and neurological conditions",
          duration: "12-24 weeks",
          successRate: 89,
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Sports Injury Rehabilitation",
          description: "Targeted therapy for athletes and active individuals",
          duration: "6-12 weeks",
          successRate: 96,
          image: "https://images.unsplash.com/photo-1571019614244-c5c476dee238?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Post-Surgical Rehabilitation",
          description: "Comprehensive recovery programs after surgical procedures",
          duration: "8-16 weeks",
          successRate: 93,
          image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
      ]
    }
  ];

  const conditionsTreated = [
    {
      category: "Amputations",
      conditions: [
        "Upper Limb Amputation", "Lower Limb Amputation", "Congenital Limb Deficiency",
        "Traumatic Amputation", "Diabetic Amputation", "Cancer-related Amputation"
      ]
    },
    {
      category: "Orthopedic Conditions",
      conditions: [
        "Scoliosis", "Cerebral Palsy", "Arthritis", "Osteoporosis", "Fractures",
        "Joint Instability", "Muscle Weakness", "Post-polio Syndrome"
      ]
    },
    {
      category: "Neurological Conditions",
      conditions: [
        "Stroke", "Spinal Cord Injury", "Multiple Sclerosis", "Parkinson's Disease",
        "Traumatic Brain Injury", "Peripheral Neuropathy", "Guillain-Barré Syndrome"
      ]
    },
    {
      category: "Sports & Trauma",
      conditions: [
        "Sports Injuries", "Work-related Injuries", "Motor Vehicle Accidents",
        "Tendonitis", "Ligament Tears", "Muscle Strains", "Post-fracture Rehabilitation"
      ]
    }
  ];

  const technologyUsed = [
    {
      name: "3D Scanning & Printing",
      description: "Digital impression technology for perfect fit and custom design",
      icon: "fas fa-print"
    },
    {
      name: "CAD/CAM Systems",
      description: "Computer-aided design and manufacturing for precision devices",
      icon: "fas fa-laptop-code"
    },
    {
      name: "Myoelectric Technology",
      description: "Advanced muscle signal detection for intuitive prosthetic control",
      icon: "fas fa-bolt"
    },
    {
      name: "Gait Analysis",
      description: "Computerized motion analysis for optimal walking patterns",
      icon: "fas fa-walking"
    },
    {
      name: "Therapeutic Modalities",
      description: "Advanced electrotherapy and ultrasound for pain management",
      icon: "fas fa-wave-square"
    },
    {
      name: "Virtual Reality",
      description: "Immersive therapy environments for enhanced rehabilitation",
      icon: "fas fa-vr-cardboard"
    }
  ];

  return (
    <div className="treatments-page">
      {/* Hero Section */}
      <HeroSection
        title="Our Treatments"
        subtitle="Evidence-Based Treatment Solutions for Comprehensive Rehabilitation and Improved Quality of Life"
        backgroundImage={heroImage}
        showButtons={false}
      />

      {/* Treatment Categories */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <Badge bg="primary" className="mb-3 px-3 py-2">Treatment Portfolio</Badge>
              <h2 className="display-5 fw-bold mb-3">Comprehensive Treatment Solutions</h2>
              <p className="lead text-muted">
                We offer a wide range of evidence-based treatments tailored to individual needs, 
                utilizing the latest technology and therapeutic approaches.
              </p>
            </Col>
          </Row>

          {treatmentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-5">
              <div className="category-header d-flex align-items-center mb-4">
                <div className="category-icon me-3">
                  <i className={`${category.icon} fa-2x text-primary`}></i>
                </div>
                <h3 className="h2 fw-bold text-primary mb-0">{category.category}</h3>
              </div>

              <Row>
                {category.treatments.map((treatment, treatmentIndex) => (
                  <Col lg={4} md={6} key={treatmentIndex} className="mb-4">
                    <Card className="treatment-card border-0 shadow-hover h-100">
                      <Card.Img 
                        variant="top" 
                        src={treatment.image} 
                        alt={treatment.name}
                        className="treatment-img"
                      />
                      <Card.Body className="p-4">
                        <Card.Title className="h5 fw-bold text-primary mb-3">
                          {treatment.name}
                        </Card.Title>
                        <Card.Text className="text-muted mb-3">
                          {treatment.description}
                        </Card.Text>
                        
                        <div className="treatment-meta mb-3">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-muted small">Duration:</span>
                            <span className="fw-semibold">{treatment.duration}</span>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="text-muted small">Success Rate:</span>
                            <div className="d-flex align-items-center">
                              <span className="fw-semibold me-2">{treatment.successRate}%</span>
                              <ProgressBar 
                                now={treatment.successRate} 
                                variant="success"
                                style={{ width: '60px', height: '6px' }}
                              />
                            </div>
                          </div>
                        </div>

                        <Button variant="outline-primary" size="sm" className="w-100">
                          View Details
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </section>

      {/* Conditions Treated */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <Badge bg="primary" className="mb-3 px-3 py-2">Conditions We Treat</Badge>
              <h2 className="display-5 fw-bold mb-3">Comprehensive Condition Management</h2>
              <p className="lead text-muted">
                Our expertise covers a wide spectrum of conditions requiring prosthetic, 
                orthotic, and physiotherapy interventions.
              </p>
            </Col>
          </Row>

          <Row>
            {conditionsTreated.map((group, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="condition-card border-0 h-100">
                  <Card.Body className="p-4">
                    <Card.Title className="h5 fw-bold text-primary mb-3">
                      {group.category}
                    </Card.Title>
                    <ul className="list-unstyled mb-0">
                      {group.conditions.map((condition, conditionIndex) => (
                        <li key={conditionIndex} className="mb-2">
                          <i className="fas fa-check-circle text-success me-2 small"></i>
                          <span className="text-muted small">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Technology & Innovation */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <Badge bg="primary" className="mb-3 px-3 py-2">Advanced Technology</Badge>
              <h2 className="display-5 fw-bold mb-3">Cutting-Edge Treatment Technology</h2>
              <p className="lead text-muted">
                We leverage the latest technological advancements to provide superior 
                treatment outcomes and enhanced patient experiences.
              </p>
            </Col>
          </Row>

          <Row>
            {technologyUsed.map((tech, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="tech-card border-0 shadow-sm h-100 text-center">
                  <Card.Body className="p-4">
                    <div className="tech-icon mb-3">
                      <i className={`${tech.icon} fa-3x text-primary`}></i>
                    </div>
                    <Card.Title className="h5 fw-bold text-primary mb-3">
                      {tech.name}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {tech.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Treatment Outcomes */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold mb-3">Treatment Outcomes & Success Metrics</h2>
              <p className="lead">
                Our commitment to excellence is reflected in our consistently high treatment 
                success rates and patient satisfaction scores.
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={10} className="mx-auto">
              <Card className="border-0 bg-dark bg-opacity-25">
                <Card.Body className="p-4">
                  <Table responsive variant="dark" className="mb-0">
                    <thead>
                      <tr>
                        <th>Treatment Type</th>
                        <th className="text-center">Success Rate</th>
                        <th className="text-center">Patient Satisfaction</th>
                        <th className="text-center">Average Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Upper Limb Prosthetics</td>
                        <td className="text-center">
                          <Badge bg="success">96%</Badge>
                        </td>
                        <td className="text-center">
                          <Badge bg="info">94%</Badge>
                        </td>
                        <td className="text-center">4-6 weeks</td>
                      </tr>
                      <tr>
                        <td>Lower Limb Prosthetics</td>
                        <td className="text-center">
                          <Badge bg="success">98%</Badge>
                        </td>
                        <td className="text-center">
                          <Badge bg="info">96%</Badge>
                        </td>
                        <td className="text-center">3-5 weeks</td>
                      </tr>
                      <tr>
                        <td>Spinal Orthotics</td>
                        <td className="text-center">
                          <Badge bg="success">94%</Badge>
                        </td>
                        <td className="text-center">
                          <Badge bg="info">92%</Badge>
                        </td>
                        <td className="text-center">2-3 weeks</td>
                      </tr>
                      <tr>
                        <td>Neurological Rehabilitation</td>
                        <td className="text-center">
                          <Badge bg="success">89%</Badge>
                        </td>
                        <td className="text-center">
                          <Badge bg="info">91%</Badge>
                        </td>
                        <td className="text-center">12-24 weeks</td>
                      </tr>
                      <tr>
                        <td>Sports Injury Rehabilitation</td>
                        <td className="text-center">
                          <Badge bg="success">96%</Badge>
                        </td>
                        <td className="text-center">
                          <Badge bg="info">95%</Badge>
                        </td>
                        <td className="text-center">6-12 weeks</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Consultation CTA */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h3 className="fw-bold mb-3">Get Personalized Treatment Recommendations</h3>
              <p className="text-muted mb-4">
                Every patient is unique. Schedule a consultation to receive a customized 
                treatment plan designed specifically for your needs and goals.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Button as={Link} to="/location" variant="primary" size="lg" className="px-4">
                  <i className="fas fa-calendar-alt me-2"></i>
                  Book Consultation
                </Button>
                <Button as={Link} to="/services" variant="outline-primary" size="lg" className="px-4">
                  <i className="fas fa-info-circle me-2"></i>
                  Learn About Services
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Treatments;