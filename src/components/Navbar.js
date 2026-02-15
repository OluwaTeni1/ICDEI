import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../assets/img/Icdei-logo.png";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar flex justify-content-between w-100 items-center ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-1 my-lg-0 nav-menu"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              className={`navbar-link ${activeLink === "home" ? "active" : ""}`}
              href="#home"
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`navbar-link ${
                activeLink === "about" ? "active" : ""
              }`}
              href="#about"
              onClick={() => onUpdateActiveLink("about")}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className={`navbar-link ${
                activeLink === "crisis" ? "active" : ""
              }`}
              href="#crisis"
              onClick={() => onUpdateActiveLink("crisis")}
            >
              The Crisis
            </Nav.Link>
            <Nav.Link
              className={`navbar-link ${activeLink === "work" ? "active" : ""}`}
              href="#work"
              onClick={() => onUpdateActiveLink("work")}
            >
              Our Work
            </Nav.Link>
            <Nav.Link
              className={`navbar-link ${
                activeLink === "contact" ? "active" : ""
              }`}
              href="#contact"
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>

          <Button className="get-involved-btn">Get Involved</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
