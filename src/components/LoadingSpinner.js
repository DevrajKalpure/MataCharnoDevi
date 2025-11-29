import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
  return (
    <div className="loading-screen d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={6}>
            <div className="clinic-logo-large mb-4">
              <div className="logo-icon-large">⚕️</div>
            </div>
            <h3 className="text-primary mb-3">Mata Charno Devi Clinic</h3>
            <Spinner animation="border" variant="primary" className="mb-3" />
            <p className="text-muted">Loading compassionate care...</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoadingSpinner;