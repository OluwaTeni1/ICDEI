import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Join = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    address: "",
    expertise: [],
    availability: "",
    reason: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const expertiseOptions = [
    "Admin/Clerical",
    "Field Work/Events",
    "Marketing/Social Media",
    "IT/Web Support",
    "Fundraising",
  ];

  const FIELD_LABELS = {
    fullName: "Full Name",
    email: "Email",
    phone: "Phone Number",
    location: "Location",
    address: "Address",
    expertise: "Area of Expertise",
    availability: "Availability",
    reason: "Reason for Joining",
  };

  const formatValue = (key, value) => {
    if (Array.isArray(value)) {
      return value.length ? value.join(", ") : "None selected";
    }
    if (!value) return "Not provided";
    return value;
  };

  const getRelevantFieldKeys = () => [
    "fullName",
    "email",
    "phone",
    "location",
    "address",
    "expertise",
    "availability",
    "reason",
  ];

  const buildMailtoLink = (subject, bodyLines) => {
    const body = bodyLines.join("\n");
    return `mailto:icdei.info@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          expertise: [...formData.expertise, value],
        });
      } else {
        setFormData({
          ...formData,
          expertise: formData.expertise.filter((item) => item !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const keys = getRelevantFieldKeys();
    const bodyLines = keys.map((key) => {
      const label = FIELD_LABELS[key] || key;
      const value = formatValue(key, formData[key]);
      return `${label}: ${value}`;
    });

    window.location.href = buildMailtoLink(
      "New Volunteer Application",
      bodyLines
    );

    setTimeout(() => setIsProcessing(false), 1500);
  };

  const handleNavigateBack = () => {
    if (onNavigate) {
      onNavigate("home");
    }
  };

  return (
    <section id="join" className="join">
      {/* Banner Section */}
      <div className="join-banner">
        <div className="join-overlay">
          <div className="banner-content">
            <button className="back-home-btn" onClick={handleNavigateBack}>
              ← Back to Home
            </button>
            <h1 className="join-banner-title">
              Your <span className="highlight">Input</span> Matters
            </h1>
            <p className="join-banner-subtitle">
              Be part of the solution and help us create a better future for
              those in need.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section with Glassmorphism */}
      <Container className="form-container">
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <div className="glass-card">
              <div className="form-header">
                <h2 className="form-title">Join Our Cause</h2>
                <p className="form-subtitle">
                  Your skills and passion can make a real difference.
                </p>
              </div>

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Full Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="glass-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="glass-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Phone Number *</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+123 456 7890"
                        className="glass-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Location *</Form.Label>
                      <Form.Control
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="City, State/Province"
                        className="glass-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street address (optional)"
                    className="glass-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Area of Expertise *</Form.Label>
                  <div className="expertise-group">
                    {expertiseOptions.map((option) => (
                      <Form.Check
                        key={option}
                        type="checkbox"
                        name="expertise"
                        value={option}
                        checked={formData.expertise.includes(option)}
                        onChange={handleChange}
                        label={option}
                        className="glass-checkbox"
                      />
                    ))}
                  </div>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Availability *</Form.Label>
                  <Form.Select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    className="glass-input"
                  >
                    <option value="">Select availability</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="one-time">One-time events</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Why do you want to join us? *</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ resize: "none" }}
                    placeholder="Tell us why you're passionate about our mission..."
                    className="glass-input"
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="submit-btn"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        Processing...{" "}
                        <i className="fas fa-spinner fa-spin ms-2"></i>
                      </>
                    ) : (
                      <>
                        Join Now <i className="fas fa-heart ms-2"></i>
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
