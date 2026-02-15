// Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Icdei-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Quick links matching navbar
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "The Crisis", href: "#crisis" },
    { name: "Our Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  // Contact info
  const contactInfo = [
    { icon: "📍", text: "Plateau State, Nigeria" },
    { icon: "📞", text: "+234 703 214 0646" },
    { icon: "📞", text: "+234 809 770 8575" },
    { icon: "✉️", text: "icdei.info@gmail.com" },
  ];

  // Social links
  const socialLinks = [
    { icon: "𝕏", url: "#", label: "Twitter" },
    { icon: "f", url: "#", label: "Facebook" },
    { icon: "📷", url: "#", label: "Instagram" },
    { icon: "in", url: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="footer">
      {/* Decorative top border matching navbar style */}
      <div className="footer-top-border"></div>

      <Container>
        {/* ===== MAIN FOOTER CONTENT ===== */}
        <Row className="footer-main">
          {/* Logo & About Column */}
          <Col lg={4} md={6} className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="ICDEI Logo" />
            </div>
            <p className="footer-about">
              Saving the Future Today protecting children from vulnerability and
              exploitation through education, empowerment, and purpose.
            </p>
            <p className="footer-motto">
              "No child should trade their body, labor, or future to survive."
            </p>

            {/* Social Icons - Matching navbar button style */}
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="footer-social-icon"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>

          {/* Quick Links - Matching navbar links */}
          <Col lg={2} md={6} className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6} className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <span className="contact-icon">{item.icon}</span>
                  <span className="contact-text">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Emergency Contact - Highlighted */}
            <div className="footer-emergency">
              <strong>24/7 Child Protection Hotline</strong>
              <p>+234 809 770 8575</p>
            </div>
          </Col>

          {/* Newsletter Signup - Matching Get Involved button style */}
          <Col lg={3} md={6} className="footer-col">
            <h4 className="footer-title">Stay Connected</h4>
            <p className="footer-newsletter-text">
              Join our community and receive updates on our impact.
            </p>
            <form className="footer-newsletter">
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>

            {/* SDG Icons - Small visual element */}
            <div className="footer-sdg">
              <span>SDG 3</span>
              <span>SDG 4</span>
              <span>SDG 5</span>
              <span>SDG 8</span>
              <span>SDG 16</span>
            </div>
          </Col>
        </Row>

        {/* ===== BOTTOM BAR ===== */}
        <Row className="footer-bottom">
          <Col md={6} className="footer-copyright">
            <p>&copy; {currentYear} ICDEI. All rights reserved.</p>
          </Col>
          <Col md={6} className="footer-legal">
            <a href="#privacy" className="legal-link">
              Privacy Policy
            </a>
            <span className="legal-separator">|</span>
            <a href="#terms" className="legal-link">
              Terms of Use
            </a>
            <span className="legal-separator">|</span>
            <a href="#accessibility" className="legal-link">
              Accessibility
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
