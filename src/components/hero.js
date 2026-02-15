import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";

export const HeroPage = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay">
        <Container className="hero-container">
          <Row className="hero-row justify-content-center align-items-center text-center">
            <Col lg={10} sm={8}>
              <span className="hero-badge mb-4 d-inline-block">
                <i className="fas fa-shield-heart me-2"></i>
                ICDEI CHILDREN DEVELOPMENT
              </span>

              <h1 className="hero-title">
                Saving the <span className="text-warning">Future</span> Today
              </h1>

              <p className="hero-text mx-auto">
                From vulnerability and exploitation to protection, education,
                and purpose. Every child deserves safety, dignity, and the
                chance to thrive.
              </p>

              <div className="hero-buttons mt-4">
                <Button
                  variant="warning"
                  size="lg"
                  className="btn-join me-3 px-4 py-2"
                >
                  Join Our Mission
                  <i className="fas fa-arrow-right ms-2"></i>
                </Button>

                <Button variant="outline-light" size="lg" className="px-4 py-2">
                  <i className="fas fa-hand-holding-heart me-2"></i>
                  Partner With Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
