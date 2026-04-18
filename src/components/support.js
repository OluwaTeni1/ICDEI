import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";

// Hardcoded Stripe Publishable Key
const stripePromise = loadStripe(
  "pk_test_51TNTKnJRamyD9SfpJnHxF9J2d5abRaGMhZmmf1V4unSjKVkrvtCIyWa9qnncrQ0b3FkwbM6cxpNU5WnOgsTnw6P500Qo6f4PQL"
);

export const Support = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    supportType: "",
    donationType: "",
    itemsList: "",
    cashAmount: "",
    message: "",
    stayUpdated: false,
  });

  const [showDonationForm, setShowDonationForm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSupportTypeChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, supportType: value });
    if (value === "donation") {
      setShowDonationForm(true);
    } else {
      setShowDonationForm(false);
    }
  };

  const handleCashDonation = async () => {
    setIsProcessing(true);

    try {
      const response = await fetch(
        "http://localhost:4242/api/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: parseFloat(formData.cashAmount),
            email: formData.email,
            name: formData.fullName,
            phone: formData.phone,
          }),
        }
      );

      const session = await response.json();

      if (session.url) {
        window.location.href = session.url;
      } else {
        alert("Failed to create payment session. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Unable to connect to payment server. Please try again later.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInKindDonation = () => {
    console.log("In-kind donation submitted:", {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      itemsList: formData.itemsList,
      message: formData.message,
      stayUpdated: formData.stayUpdated,
    });

    alert(
      "Thank you for your in-kind donation! Our team will contact you within 48 hours to arrange collection."
    );

    if (onNavigate) {
      setTimeout(() => onNavigate("home"), 3000);
    }
  };

  const handleOtherSupport = () => {
    console.log("Support form submitted:", {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      supportType: formData.supportType,
      message: formData.message,
      stayUpdated: formData.stayUpdated,
    });

    alert("Thank you for your interest! We will get back to you soon.");

    if (onNavigate) {
      setTimeout(() => onNavigate("home"), 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.supportType === "donation") {
      if (formData.donationType === "cash") {
        handleCashDonation();
      } else if (formData.donationType === "kind") {
        handleInKindDonation();
      }
    } else {
      handleOtherSupport();
    }
  };

  const handleNavigateBack = () => {
    if (onNavigate) {
      onNavigate("home");
    }
  };

  return (
    <section id="support" className="support">
      <div className="support-banner">
        <div className="support-overlay">
          <div className="banner-content">
            <button className="back-home-btn" onClick={handleNavigateBack}>
              ← Back to Home
            </button>
            <h1 className="support-banner-title">
              Your <span className="highlight">Support</span> Matters
            </h1>
            <p className="support-banner-subtitle">
              Together we can transform lives and build a brighter future for
              children in need.
            </p>
          </div>
        </div>
      </div>

      <Container className="form-container">
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <div className="glass-card">
              <div className="form-header">
                <h2 className="form-title">How Would You Like to Support?</h2>
                <p className="form-subtitle">
                  Your generosity, whether big or small, creates lasting change.
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
                      <Form.Label>Phone Number (Optional)</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+123 456 7890"
                        className="glass-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>
                        How would you like to support us? *
                      </Form.Label>
                      <Form.Select
                        name="supportType"
                        value={formData.supportType}
                        onChange={handleSupportTypeChange}
                        required
                        className="glass-input"
                      >
                        <option value="">Select an option</option>
                        <option value="donation">Make a Donation</option>
                        <option value="volunteer">Volunteer my Time</option>
                        <option value="partnership">
                          Corporate Partnership
                        </option>
                        <option value="sponsor">
                          Sponsor a Specific Project
                        </option>
                        <option value="media">Media/Press Inquiry</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                {showDonationForm && (
                  <>
                    <Form.Group className="mb-4">
                      <Form.Label>Select Donation Type *</Form.Label>
                      <div className="donation-type-group">
                        <button
                          type="button"
                          className={`donation-type-btn ${
                            formData.donationType === "kind" ? "active" : ""
                          }`}
                          onClick={() =>
                            setFormData({ ...formData, donationType: "kind" })
                          }
                        >
                          <i className="fas fa-box-open"></i>
                          Donate in Kind (Items)
                        </button>
                        <button
                          type="button"
                          className={`donation-type-btn ${
                            formData.donationType === "cash" ? "active" : ""
                          }`}
                          onClick={() =>
                            setFormData({ ...formData, donationType: "cash" })
                          }
                        >
                          <i className="fas fa-money-bill-wave"></i>
                          Cash Transfer
                        </button>
                      </div>
                    </Form.Group>

                    {formData.donationType === "kind" && (
                      <Form.Group className="mb-4">
                        <Form.Label>Items You Want to Donate *</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="itemsList"
                          value={formData.itemsList}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Please list the items you wish to donate"
                          className="glass-input"
                          style={{ resize: "none" }}
                        />
                      </Form.Group>
                    )}

                    {formData.donationType === "cash" && (
                      <Form.Group className="mb-4">
                        <Form.Label>Donation Amount (USD) *</Form.Label>
                        <Form.Control
                          type="number"
                          name="cashAmount"
                          value={formData.cashAmount}
                          onChange={handleChange}
                          required
                          placeholder="Enter amount"
                          className="glass-input"
                          min="1"
                          step="1"
                        />
                      </Form.Group>
                    )}
                  </>
                )}

                <Form.Group className="mb-4">
                  <Form.Label>Message / Comments</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more..."
                    className="glass-input"
                    style={{ resize: "none" }}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <div className="glass-checkbox">
                    <input
                      type="checkbox"
                      name="stayUpdated"
                      checked={formData.stayUpdated}
                      onChange={handleChange}
                      id="stayUpdated"
                    />
                    <label htmlFor="stayUpdated">
                      Sign me up for the monthly newsletter
                    </label>
                  </div>
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
                        Submit <i className="fas fa-paper-plane ms-2"></i>
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
