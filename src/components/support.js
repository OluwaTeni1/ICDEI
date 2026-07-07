import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

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
    setFormData({ ...formData, supportType: value, donationType: "" }); // Reset donationType when supportType changes
    if (value === "donation") {
      setShowDonationForm(true);
    } else {
      setShowDonationForm(false);
    }
  };

  // const buildMailtoLink = (subject, bodyLines) => {
  //   const body = bodyLines.join("\n");
  //   return `mailto:isolateni02@gmail.com?subject=${encodeURIComponent(
  //     subject
  //   )}&body=${encodeURIComponent(body)}`;
  // };

  // const handleCashDonation = () => {
  //   const subject = "New Cash Donation Submission";
  //   const body = [
  //     `Full Name: ${formData.fullName}`,
  //     `Email: ${formData.email}`,
  //     `Phone: ${formData.phone || "Not provided"}`,
  //     `Donation Amount (USD): ${formData.cashAmount}`,
  //     `Message: ${formData.message || "None"}`,
  //     `Newsletter Sign-up: ${formData.stayUpdated ? "Yes" : "No"}`,
  //   ];
  //   window.location.href = buildMailtoLink(subject, body);
  // };

  // const handleInKindDonation = () => {
  //   const subject = "New In-Kind Donation Submission";
  //   const body = [
  //     `Full Name: ${formData.fullName}`,
  //     `Email: ${formData.email}`,
  //     `Phone: ${formData.phone || "Not provided"}`,
  //     `Items to Donate: ${formData.itemsList}`,
  //     `Message: ${formData.message || "None"}`,
  //     `Newsletter Sign-up: ${formData.stayUpdated ? "Yes" : "No"}`,
  //   ];
  //   window.location.href = buildMailtoLink(subject, body);
  // };

  // const handleOtherSupport = () => {
  //   const subject = "New Support Inquiry";
  //   const body = [
  //     `Full Name: ${formData.fullName}`,
  //     `Email: ${formData.email}`,
  //     `Phone: ${formData.phone || "Not provided"}`,
  //     `Support Type: ${formData.supportType}`,
  //     `Message: ${formData.message || "None"}`,
  //     `Newsletter Sign-up: ${formData.stayUpdated ? "Yes" : "No"}`,
  //   ];
  //   window.location.href = buildMailtoLink(subject, body);
  // };

  const FIELD_LABELS = {
    fullName: "Full Name",
    email: "Email",
    phone: "Phone Number",
    supportType: "How They Want to Support",
    donationType: "Donation Type",
    itemsList: "Items to Donate",
    cashAmount: "Donation Amount (USD)",
    message: "Message",
    stayUpdated: "Newsletter Sign-up",
  };

  const VALUE_LABELS = {
    supportType: {
      donation: "Make a Donation",
      volunteer: "Volunteer my Time",
      partnership: "Corporate Partnership",
      sponsor: "Sponsor a Specific Project",
      media: "Media/Press Inquiry",
    },
    donationType: {
      kind: "Donate in Kind (Items)",
      cash: "Cash Transfer",
    },
  };

  const formatValue = (key, value) => {
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (!value && value !== 0) return "Not provided";
    if (VALUE_LABELS[key] && VALUE_LABELS[key][value]) {
      return VALUE_LABELS[key][value];
    }
    return value;
  };

  const getRelevantFieldKeys = () => {
    const keys = ["fullName", "email", "phone", "supportType"];

    if (formData.supportType === "donation") {
      keys.push("donationType");
      if (formData.donationType === "kind") keys.push("itemsList");
      if (formData.donationType === "cash" && formData.cashAmount) {
        keys.push("cashAmount");
      }
    }

    keys.push("message", "stayUpdated");
    return keys;
  };

  const buildMailtoLink = (subject, bodyLines) => {
    const body = bodyLines.join("\n");
    return `mailto:icdei.info@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const getSubject = () => {
    if (formData.supportType === "donation") {
      if (formData.donationType === "cash")
        return "New Cash Donation Submission";
      if (formData.donationType === "kind")
        return "New In-Kind Donation Submission";
      return "New Donation Inquiry";
    }
    return "New Support Inquiry";
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

    window.location.href = buildMailtoLink(getSubject(), bodyLines);

    setTimeout(() => setIsProcessing(false), 1500);
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

                    {/* {formData.donationType === "kind" && (
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
                    )} */}

                    {formData.donationType === "kind" && (
                      <>
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

                        {/* 👇 Contact card appears only for in-kind donations */}
                        <div className="donation-contact-card mb-4">
                          <p className="donation-contact-heading">
                            <i className="fas fa-headset me-2"></i>
                            Need to arrange item collection? Reach out to us:
                          </p>
                          <div className="donation-contact-row">
                            <a
                              href="tel:+2348012345678"
                              className="donation-contact-item"
                            >
                              <i className="fas fa-phone-alt"></i>
                              +234 801 234 5678
                            </a>
                            <a
                              href="mailto:donate@yourorg.com"
                              className="donation-contact-item"
                            >
                              <i className="fas fa-envelope"></i>
                              donate@yourorg.com
                            </a>
                          </div>
                        </div>
                      </>
                    )}

                    {/* {formData.donationType === "cash" && (
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
                    )} */}
                    {formData.donationType === "cash" && (
                      <div className="account-details-card mb-4">
                        <div className="account-details-header">
                          <i className="fas fa-university me-2"></i>
                          Bank Transfer Details
                        </div>
                        <div className="account-details-body">
                          <div className="account-detail-row">
                            <span className="account-detail-label">
                              Account Name
                            </span>
                            <span className="account-detail-value">
                              Impartville Children Dev and Empowerment
                              Initiatives
                            </span>
                          </div>
                          <div className="account-detail-row">
                            <span className="account-detail-label">
                              Account Number
                            </span>
                            <span className="account-detail-value">
                              1310224768
                            </span>
                          </div>
                          <div className="account-detail-row">
                            <span className="account-detail-label">
                              Bank Name
                            </span>
                            <span className="account-detail-value">
                              Zenith Bank
                            </span>
                          </div>
                          <div className="account-detail-row">
                            <span className="account-detail-label">
                              Account Type
                            </span>
                            <span className="account-detail-value">
                              Savings
                            </span>
                          </div>
                        </div>
                        <p className="account-details-note">
                          <i className="fas fa-info-circle me-1"></i>
                          After making your transfer, please use the message box
                          below to tell us your transfer reference or amount so
                          we can confirm your donation.
                        </p>
                      </div>
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
