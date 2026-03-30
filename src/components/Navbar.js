import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../assets/img/Icdei-logo.png";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      // Handle navbar background on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Get current scroll position with offset for navbar height
      const scrollPosition = window.scrollY + 100;

      // Array of section IDs in order
      const sections = [
        "home",
        "about",
        "crisis",
        "work",
        "gallery",
        "contact",
      ];

      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          // Check if scroll position is within this section
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            if (activeLink !== section) {
              setActiveLink(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    // Call once to set initial active state
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [activeLink]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar flex justify-content-between w-100 items-center ${
        scrolled ? "scrolled" : ""
      }`}
      fixed="top"
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
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`navbar-link ${
                activeLink === "about" ? "active" : ""
              }`}
              onClick={() => onUpdateActiveLink("about")}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className={`navbar-link ${
                activeLink === "crisis" ? "active" : ""
              }`}
              onClick={() => onUpdateActiveLink("crisis")}
            >
              The Crisis
            </Nav.Link>
            <Nav.Link
              className={`navbar-link ${activeLink === "work" ? "active" : ""}`}
              onClick={() => onUpdateActiveLink("work")}
            >
              Our Work
            </Nav.Link>
            <Nav.Link
              className={`navbar-link ${
                activeLink === "gallery" ? "active" : ""
              }`}
              onClick={() => onUpdateActiveLink("gallery")}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              className={`navbar-link ${
                activeLink === "contact" ? "active" : ""
              }`}
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>

          <Button className="get-involved-btn" href="#contact">
            Get Involved
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
