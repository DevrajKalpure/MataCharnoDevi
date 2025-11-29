

import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Tab, Tabs } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';

const About = () => {
  const heroImage = "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  const teamMembers = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Chief Prosthetist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      experience: "15+ years",
      specialization: "Advanced Prosthetic Solutions"
    },
    {
      name: "Dr. Priya Patel",
      role: "Senior Orthotist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      experience: "12+ years",
      specialization: "Custom Orthotic Devices"
    },
    {
      name: "Dr. Amit Kumar",
      role: "Head Physiotherapist",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      experience: "18+ years",
      specialization: "Rehabilitation & Pain Management"
    },
    {
      name: "Dr. Sunita Mehta",
      role: "Clinical Director",
      image: "https://images.unsplash.com/photo-1594824947933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      experience: "20+ years",
      specialization: "Patient Care Management"
    }
  ];

  const skills = [
    { name: "Prosthetic Fabrication", value: 95 },
    { name: "Orthotic Design", value: 92 },
    { name: "Physical Therapy", value: 90 },
    { name: "Patient Rehabilitation", value: 94 },
    { name: "Custom Device Fitting", value: 91 }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <HeroSection
        title="About Our Clinic"
        subtitle="Committed to Excellence in Prosthetic, Orthotic, and Physiotherapy Care Since 2010"
        backgroundImage={heroImage}
        showButtons={false}
      />

      {/* Mission & Vision */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-center mb-4">
                    <i className="fas fa-bullseye fa-3x text-primary mb-3"></i>
                    <Card.Title as="h3" className="fw-bold">Our Mission</Card.Title>
                  </div>
                  <Card.Text className="text-muted fs-6">
                    To provide comprehensive, patient-centered prosthetic, orthotic, and physiotherapy 
                    services that enhance mobility, restore function, and improve quality of life. 
                    We are committed to using advanced technology and evidence-based practices to 
                    deliver exceptional care tailored to each individual's unique needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="text-center mb-4">
                    <i className="fas fa-eye fa-3x text-primary mb-3"></i>
                    <Card.Title as="h3" className="fw-bold">Our Vision</Card.Title>
                  </div>
                  <Card.Text className="text-muted fs-6">
                    To be the leading center of excellence in rehabilitation services, recognized 
                    for innovation, compassionate care, and outstanding patient outcomes. We strive 
                    to continuously advance the field of prosthetic, orthotic, and physiotherapy 
                    care through research, education, and community engagement.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">Our Story</h2>
              <p className="text-muted mb-4">
                Founded in 2010 by a team of dedicated healthcare professionals, Mata Charno Devi 
                Clinic has grown from a small practice into a comprehensive rehabilitation center 
                serving thousands of patients annually.
              </p>
              <p className="text-muted mb-4">
                Our journey began with a simple vision: to provide accessible, high-quality 
                prosthetic, orthotic, and physiotherapy services to those in need. Over the years, 
                we've expanded our facilities, incorporated cutting-edge technology, and assembled 
                a team of experts who share our commitment to excellence.
              </p>
              <p className="text-muted">
                Today, we continue to innovate and evolve, always putting our patients' needs first 
                and striving to make a meaningful difference in their lives.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Clinic History"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills & Expertise */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold mb-3">Our Expertise</h2>
              <p className="lead">
                With years of experience and continuous training, our team excels in various 
                aspects of rehabilitation and mobility solutions.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold">{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <ProgressBar 
                    now={skill.value} 
                    variant="warning"
                    className="skill-progress"
                  />
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold mb-3">Meet Our Expert Team</h2>
              <p className="lead text-muted">
                Our dedicated professionals bring years of experience and compassion to every patient interaction.
              </p>
            </Col>
          </Row>
          <Row>
            {teamMembers.map((member, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="team-card border-0 shadow-hover h-100">
                  <Card.Img 
                    variant="top" 
                    src={member.image} 
                    alt={member.name}
                    className="team-img"
                  />
                  <Card.Body className="text-center p-4">
                    <Card.Title className="h5 fw-bold text-primary mb-2">
                      {member.name}
                    </Card.Title>
                    <Card.Subtitle className="text-muted mb-2">
                      {member.role}
                    </Card.Subtitle>
                    <div className="team-details">
                      <p className="small text-muted mb-1">
                        <strong>Experience:</strong> {member.experience}
                      </p>
                      <p className="small text-muted mb-0">
                        <strong>Specialization:</strong> {member.specialization}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Values */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold mb-3">Our Core Values</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center">
                <div className="value-icon bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                  <i className="fas fa-heart fa-2x"></i>
                </div>
                <h4 className="fw-bold mb-3">Compassion</h4>
                <p className="text-muted">
                  We treat every patient with empathy, understanding, and genuine care, 
                  recognizing the unique challenges they face.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center">
                <div className="value-icon bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                  <i className="fas fa-gem fa-2x"></i>
                </div>
                <h4 className="fw-bold mb-3">Excellence</h4>
                <p className="text-muted">
                  We maintain the highest standards of quality in all our services, 
                  continuously improving and innovating our approaches.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="text-center">
                <div className="value-icon bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3">
                  <i className="fas fa-users fa-2x"></i>
                </div>
                <h4 className="fw-bold mb-3">Collaboration</h4>
                <p className="text-muted">
                  We work together as a team and with our patients to develop 
                  comprehensive, personalized treatment plans.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;