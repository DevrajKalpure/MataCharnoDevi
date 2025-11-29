
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge, Table } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';

const Location = () => {
  const heroImage = "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your appointment request! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    });
  };

  const clinicInfo = {
    address: "123 Healthcare Road, Medical District, City 12345",
    phone: "+1 (555) 123-4567",
    emergencyPhone: "+1 (555) 123-HELP",
    email: "info@matacharnodevi.com",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
      { day: "Saturday", time: "9:00 AM - 5:00 PM" },
      { day: "Sunday", time: "Emergency Services Only" }
    ]
  };

  const facilities = [
    {
      name: "State-of-the-Art Prosthetic Lab",
      description: "Advanced fabrication facility with 3D printing and CAD/CAM technology",
      icon: "fas fa-robot"
    },
    {
      name: "Modern Physiotherapy Gym",
      description: "Fully equipped rehabilitation gym with latest therapeutic equipment",
      icon: "fas fa-dumbbell"
    },
    {
      name: "Orthotic Manufacturing Center",
      description: "On-site orthotic device fabrication and customization",
      icon: "fas fa-tools"
    },
    {
      name: "Comfortable Waiting Areas",
      description: "Spacious and accessible waiting areas with amenities",
      icon: "fas fa-couch"
    },
    {
      name: "Private Consultation Rooms",
      description: "Confidential spaces for patient assessments and consultations",
      icon: "fas fa-user-md"
    },
    {
      name: "Ample Parking",
      description: "Convenient parking with accessible spaces near entrance",
      icon: "fas fa-parking"
    }
  ];

  const emergencyServices = [
    {
      service: "Prosthetic Emergency Repair",
      availability: "24/7",
      contact: "Emergency Phone Line"
    },
    {
      service: "Orthotic Device Adjustment",
      availability: "Mon-Sat: 8AM-8PM",
      contact: "Main Clinic Line"
    },
    {
      service: "Acute Pain Management",
      availability: "24/7",
      contact: "Emergency Phone Line"
    },
    {
      service: "Device Malfunction",
      availability: "24/7",
      contact: "Emergency Phone Line"
    }
  ];

  return (
    <div className="location-page">
      {/* Hero Section */}
      <HeroSection
        title="Visit Our Clinic"
        subtitle="State-of-the-Art Facility for Comprehensive Prosthetic, Orthotic, and Physiotherapy Care"
        backgroundImage={heroImage}
        showButtons={false}
      />

      {/* Clinic Information */}
      <section className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <Badge bg="primary" className="mb-3 px-3 py-2">Our Location</Badge>
              <h2 className="display-5 fw-bold mb-3">Mata Charno Devi Clinic</h2>
              <p className="lead text-muted">
                Located in the heart of the medical district, our facility is designed 
                to provide comprehensive care in a comfortable and accessible environment.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={8}>
              {/* Map Placeholder */}
              <Card className="border-0 shadow h-100">
                <Card.Body className="p-0">
                  <div className="map-placeholder bg-light d-flex align-items-center justify-content-center" style={{ height: '400px' }}>
                    <div className="text-center">
                      <i className="fas fa-map-marker-alt fa-3x text-primary mb-3"></i>
                      <h5 className="text-primary">Interactive Map</h5>
                      <p className="text-muted mb-0">123 Healthcare Road, Medical District</p>
                      <p className="text-muted">City 12345</p>
                      <Button variant="primary" size="sm">
                        <i className="fas fa-directions me-2"></i>
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="border-0 shadow h-100">
                <Card.Body className="p-4">
                  <h4 className="fw-bold text-primary mb-4">Clinic Information</h4>
                  
                  <div className="contact-info mb-4">
                    <div className="d-flex align-items-start mb-3">
                      <i className="fas fa-map-marker-alt text-primary me-3 mt-1"></i>
                      <div>
                        <strong>Address</strong>
                        <p className="text-muted mb-0 small">{clinicInfo.address}</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-3">
                      <i className="fas fa-phone text-primary me-3 mt-1"></i>
                      <div>
                        <strong>Phone</strong>
                        <p className="text-muted mb-0 small">{clinicInfo.phone}</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-3">
                      <i className="fas fa-envelope text-primary me-3 mt-1"></i>
                      <div>
                        <strong>Email</strong>
                        <p className="text-muted mb-0 small">{clinicInfo.email}</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-start mb-3">
                      <i className="fas fa-exclamation-triangle text-warning me-3 mt-1"></i>
                      <div>
                        <strong>Emergency</strong>
                        <p className="text-muted mb-0 small">{clinicInfo.emergencyPhone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="operating-hours">
                    <h6 className="fw-bold text-primary mb-3">Operating Hours</h6>
                    {clinicInfo.hours.map((schedule, index) => (
                      <div key={index} className="d-flex justify-content-between mb-2">
                        <span className="text-muted small">{schedule.day}</span>
                        <span className="fw-semibold small">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Facilities */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <Badge bg="primary" className="mb-3 px-3 py-2">Our Facilities</Badge>
              <h2 className="display-5 fw-bold mb-3">State-of-the-Art Clinic Facilities</h2>
              <p className="lead text-muted">
                Our clinic is equipped with modern technology and comfortable amenities 
                to ensure the best possible care experience.
              </p>
            </Col>
          </Row>

          <Row>
            {facilities.map((facility, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="facility-card border-0 shadow-sm h-100">
                  <Card.Body className="p-4 text-center">
                    <div className="facility-icon mb-3">
                      <i className={`${facility.icon} fa-3x text-primary`}></i>
                    </div>
                    <Card.Title className="h5 fw-bold text-primary mb-3">
                      {facility.name}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {facility.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Appointment Booking */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col lg={8}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <h3 className="fw-bold text-primary mb-4">Schedule an Appointment</h3>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number *</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your phone number"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Service Interested In</Form.Label>
                          <Form.Select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                          >
                            <option value="">Select a service</option>
                            <option value="prosthetic">Prosthetic Services</option>
                            <option value="orthotic">Orthotic Services</option>
                            <option value="physiotherapy">Physiotherapy</option>
                            <option value="consultation">General Consultation</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Preferred Date</Form.Label>
                          <Form.Control
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label>Additional Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your specific needs or concerns..."
                      />
                    </Form.Group>

                    <Button type="submit" variant="primary" size="lg" className="w-100">
                      <i className="fas fa-calendar-check me-2"></i>
                      Request Appointment
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <h4 className="fw-bold text-primary mb-4">Emergency Services</h4>
                  <p className="text-muted mb-4">
                    For urgent prosthetic, orthotic, or physiotherapy needs, 
                    we provide emergency services to address your immediate concerns.
                  </p>

                  <Table responsive className="mb-4">
                    <tbody>
                      {emergencyServices.map((service, index) => (
                        <tr key={index}>
                          <td className="border-0 p-1">
                            <small className="fw-semibold">{service.service}</small>
                          </td>
                          <td className="border-0 p-1">
                            <Badge bg="warning" text="dark" className="small">
                              {service.availability}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>

                  <div className="emergency-contact text-center p-3 bg-light rounded">
                    <i className="fas fa-phone-alt fa-2x text-danger mb-2"></i>
                    <h5 className="text-danger mb-2">Emergency Line</h5>
                    <p className="fw-bold text-dark mb-2">{clinicInfo.emergencyPhone}</p>
                    <p className="small text-muted mb-0">Available 24/7 for urgent needs</p>
                  </div>
                </Card.Body>
              </Card>

              {/* Transportation Info */}
              <Card className="border-0 shadow mt-4">
                <Card.Body className="p-4">
                  <h5 className="fw-bold text-primary mb-3">Getting Here</h5>
                  
                  <div className="transport-option mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-bus text-primary me-2"></i>
                      <strong>Public Transport</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Bus routes 12, 45, and 78 stop within 2 blocks of the clinic.
                    </p>
                  </div>

                  <div className="transport-option mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-subway text-primary me-2"></i>
                      <strong>Metro</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Medical District Station (Blue Line) is 0.5 miles away.
                    </p>
                  </div>

                  <div className="transport-option">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-car text-primary me-2"></i>
                      <strong>Parking</strong>
                    </div>
                    <p className="small text-muted mb-0">
                      Free patient parking available with accessible spaces near entrance.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Accessibility Features */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="text-center mb-4">
            <Col lg={8} className="mx-auto">
              <h3 className="fw-bold mb-3">Accessibility Features</h3>
              <p className="lead">
                Our facility is designed to be fully accessible for patients with 
                mobility challenges and special needs.
              </p>
            </Col>
          </Row>

          <Row className="text-center">
            <Col lg={3} md={6} className="mb-3">
              <i className="fas fa-wheelchair fa-2x text-warning mb-2"></i>
              <p>Wheelchair Accessible</p>
            </Col>
            <Col lg={3} md={6} className="mb-3">
              <i className="fas fa-elevator fa-2x text-warning mb-2"></i>
              <p>Elevator Access</p>
            </Col>
            <Col lg={3} md={6} className="mb-3">
              <i className="fas fa-restroom fa-2x text-warning mb-2"></i>
              <p>Accessible Restrooms</p>
            </Col>
            <Col lg={3} md={6} className="mb-3">
              <i className="fas fa-assistive-listening-systems fa-2x text-warning mb-2"></i>
              <p>Hearing Assistance</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Location;