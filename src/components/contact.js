// ContactPage.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for reaching out! We will get back to you soon.",
    });

    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: "" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <div className="cp-wrapper" id="contact">
      {" "}
      {/* Unique prefix: cp- = ContactPage */}
      {/* Decorative Elements */}
      <div className="cp-circle"></div>
      <div className="cp-dots"></div>
      <Container>
        {/* ===== HEADER ===== */}
        <Row className="cp-header-row">
          <Col lg={12} className="text-center">
            <div className="cp-tag">GET IN TOUCH</div>
            <h1 className="cp-main-title">Contact Us</h1>
            <div className="cp-title-line"></div>
            <p className="cp-description">
              Have questions about our work? Want to partner with us? Reach out
              we'd love to hear from you.
            </p>
          </Col>
        </Row>

        <Row className="cp-content-row">
          {/* ===== LEFT COLUMN - Contact Info ===== */}
          <Col lg={5}>
            <div className="cp-left-column">
              <h2 className="cp-info-heading">Get in Touch</h2>
              <div className="cp-info-divider"></div>

              <Row>
                <Col sm={6}>
                  <div className="cp-info-block">
                    <div className="cp-icon-large">📍</div>
                    <h4>Address</h4>
                    <p>Plateau State, Nigeria</p>
                    <p>West Africa</p>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="cp-info-block">
                    <div className="cp-icon-large">📞</div>
                    <h4>Phone</h4>
                    <p>+234 703 214 0646</p>
                    <p>+234 809 770 8575</p>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="cp-info-block">
                    <div className="cp-icon-large">✉️</div>
                    <h4>Email</h4>
                    <p>icdei.info@gmail.com</p>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="cp-info-block">
                    <div className="cp-icon-large">🌐</div>
                    <h4>Website</h4>
                    <p>https://icdei.lovable.app</p>
                  </div>
                </Col>
              </Row>

              {/* Hours Box */}
              <div className="cp-hours-box">
                <h4>
                  <span className="cp-clock-icon">⏰</span>
                  Office Hours
                </h4>
                <div className="cp-hour-item">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="cp-hour-item">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="cp-hour-item">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>

              {/* Map */}
              <div className="cp-map-frame">
                <iframe
                  title="ICDEI Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252234.45088671188!2d8.733333!3d9.933333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1053e4b9b5c7b1f9%3A0x4c9e0b5c7b1f9c8!2sJos%2C%20Plateau%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
                  loading="lazy"
                ></iframe>
              </div>

              {/* Social Links */}
              <div className="cp-social-area">
                <h5>Follow Us</h5>
                <div className="cp-social-flex">
                  <a href="#" className="cp-social-btn cp-twitter">
                    𝕏
                  </a>
                  <a href="#" className="cp-social-btn cp-facebook">
                    f
                  </a>
                  <a href="#" className="cp-social-btn cp-instagram">
                    📷
                  </a>
                  <a href="#" className="cp-social-btn cp-linkedin">
                    in
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* ===== RIGHT COLUMN - Contact Form ===== */}
          <Col lg={7}>
            <div className="cp-form-container">
              <h2 className="cp-form-heading">Send Us a Message</h2>
              <div className="cp-form-divider"></div>

              {formStatus.submitted && formStatus.success && (
                <div className="cp-success-alert">{formStatus.message}</div>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <div className="cp-field-group">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="cp-input-field"
                      />
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="cp-field-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="cp-input-field"
                      />
                    </div>
                  </Col>
                </Row>

                <div className="cp-field-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="cp-input-field"
                  />
                </div>

                <div className="cp-field-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us how we can help..."
                    required
                    className="cp-textarea-field"
                  />
                </div>

                <div className="cp-form-footer">
                  <p className="cp-required-note">* Required fields</p>
                  <button type="submit" className="cp-send-btn">
                    Send Message
                    <span className="cp-send-icon">✈️</span>
                  </button>
                </div>
              </Form>

              <div className="cp-guarantee-box">
                <div className="cp-guarantee-icon">⚡</div>
                <div className="cp-guarantee-text">
                  <strong>Quick Response Guarantee</strong>
                  <p>We typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* ===== BOTTOM CTA ===== */}
        <Row className="cp-cta-row">
          <Col lg={12}>
            <div className="cp-cta-block">
              <h3>Partner With Us</h3>
              <p>
                Join us in saving the future today one child, one family, one
                community at a time.
              </p>
              <div className="cp-cta-flex">
                <a href="#partner" className="cp-partner-btn">
                  Become a Partner
                </a>
                <a href="#donate" className="cp-support-btn">
                  Support Our Work
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
