import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import mediaImg from "../assets/img/media.jpg";
import mediareachImg from "../assets/img/media-reach.jpg";
import traumaImg from "../assets/img/trauma.jpg";
import teacherImg from "../assets/img/teacher-training.jpg";
import educationImg from "../assets/img/education-reintegration.jpg";
import childProtectionImg from "../assets/img/child-protection.jpg";
import psychosocialImg from "../assets/img/psychosocial.jpg";
import familyImg from "../assets/img/family.jpg";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "", delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const startAnimation = (timestamp) => {
        startTime = timestamp;
        animate(timestamp);
      };

      const animate = (timestamp) => {
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1
        );
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(startAnimation);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span className="counter" ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// Main Progress Section Component - MAKE SURE THIS IS EXPORTED
const OurProgress = ({ onNavigate }) => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  // Impact stories data with images
  const impactStories = [
    {
      id: 1,
      title: "Trauma Healing",
      description: "Children receiving psychosocial support in IDP camps",
      image: traumaImg,
      stat: "1,200+",
      icon: "❤️",
    },
    {
      id: 2,
      title: "Teacher Training",
      description: "Educators trained in child-centered approaches",
      image: teacherImg,
      stat: "300+",
      icon: "📚",
    },
    {
      id: 3,
      title: "Media Reach",
      description: "Child-friendly radio and TV programs",
      image: mediareachImg,
      stat: "Thousands",
      icon: "📻",
    },
  ];

  // Countries data with flags
  const countries = [
    {
      name: "Nigeria",
      flag: "🇳🇬",
      communities: "Dwei, Bassa, Fwapwa, Jos South LGA",
    },
    { name: "Liberia", flag: "🇱🇷", communities: "Regional presence" },
    { name: "Kenya", flag: "🇰🇪", communities: "Regional presence" },
    { name: "Cameroon", flag: "🇨🇲", communities: "Regional presence" },
  ];

  // Program areas with images
  const programs = [
    {
      title: "Education Reintegration",
      description:
        "Returning vulnerable children to school with literacy support and safe learning spaces.",
      image: educationImg,
      icon: "🎓",
    },
    {
      title: "Child Protection",
      description:
        "Community-based surveillance systems protecting children from exploitation.",
      image: childProtectionImg,
      icon: "🛡️",
    },
    {
      title: "Psychosocial Support",
      description:
        "Counseling, play therapy, and mental health services for trauma-affected children.",
      image: psychosocialImg,
      icon: "🧠",
    },
    {
      title: "Family Strengthening",
      description:
        "Parenting education and economic resilience to reduce dependence on child income.",
      image: familyImg,
      icon: "👪",
    },
    {
      title: "Media & Advocacy",
      description:
        "Child-friendly programming reaching thousands with child rights education.",
      image: mediaImg,
      icon: "📢",
    },
  ];

  // SDG data with icons
  const sdgs = [
    {
      number: 3,
      title: "Good Health & Well-being",
      icon: "❤️",
      color: "#4CAF50",
    },
    { number: 4, title: "Quality Education", icon: "📖", color: "#C5192D" },
    { number: 5, title: "Gender Equality", icon: "⚖️", color: "#FF3A21" },
    { number: 8, title: "Decent Work & Growth", icon: "💼", color: "#A21942" },
    { number: 16, title: "Peace & Justice", icon: "🕊️", color: "#00689D" },
  ];

  const handleButtonClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <section className="progress-section" id="work">
      {/* Decorative Elements */}
      <div className="deco-circle"></div>
      <div className="deco-dots">✦ ✦ ✦ ✦ ✦</div>

      <Container>
        {/* ===== SECTION 1: HEADER ===== */}
        <Row className="progress-header mb-5">
          <Col lg={12}>
            <div className="section-tag">OUR IMPACT</div>
            <h1 className="progress-title">
              Proven Results, Transformed Lives
            </h1>
            <div className="title-divider"></div>
            <p className="progress-intro">
              Every number represents a child protected, a teacher empowered, a
              community strengthened. Here's what we've achieved together.
            </p>
          </Col>
        </Row>

        {/* ===== SECTION 2: KEY STATISTICS with COUNTERS ===== */}
        <Row className="stats-row mb-5 g-4" ref={statsRef}>
          <Col lg={3} md={6}>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="stat-icon">❤️</div>
              <div className="stat-number-wrapper">
                <AnimatedCounter end={1200} suffix="+" duration={2} />
              </div>
              <p className="stat-label">
                Children supported with trauma healing
              </p>
              <div className="stat-bar"></div>
            </motion.div>
          </Col>

          <Col lg={3} md={6}>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="stat-icon">📚</div>
              <div className="stat-number-wrapper">
                <AnimatedCounter end={300} suffix="+" duration={2} />
              </div>
              <p className="stat-label">
                Educators trained in child-centered approaches
              </p>
              <div className="stat-bar"></div>
            </motion.div>
          </Col>

          <Col lg={3} md={6}>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="stat-icon">📻</div>
              <div className="stat-number-wrapper">
                <span className="stat-number">10k+</span>
              </div>
              <p className="stat-label">People reached via media programs</p>
              <div className="stat-bar"></div>
            </motion.div>
          </Col>

          <Col lg={3} md={6}>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="stat-icon">🌍</div>
              <div className="stat-number-wrapper">
                <AnimatedCounter end={4} suffix="" duration={2} />
              </div>
              <p className="stat-label">Countries of operation</p>
              <div className="stat-bar"></div>
            </motion.div>
          </Col>
        </Row>

        {/* ===== SECTION 3: IMPACT STORIES with IMAGES ===== */}
        <Row className="stories-row mb-5 g-4">
          <Col lg={12}>
            <h2 className="section-subtitle">Impact in Action</h2>
            <div className="divider"></div>
          </Col>

          {impactStories.map((story, index) => (
            <Col lg={4} key={story.id}>
              <motion.div
                className="story-card"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <div className="story-image-wrapper-impact">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="story-image"
                  />
                  <div className="story-icon">{story.icon}</div>
                </div>
                <div className="story-content">
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                  <div className="story-stat">
                    <span className="story-stat-number">{story.stat}</span>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* ===== SECTION 4: PROGRAM AREAS IMPACT with IMAGES ===== */}
        <Row className="programs-row mb-5 g-3">
          <Col lg={12}>
            <h2 className="section-subtitle">Our Programs</h2>
            <div className="divider"></div>
            <p className="programs-intro">
              Integrated solutions for lasting impact
            </p>
          </Col>

          {programs.map((program, index) => (
            <Col lg={4} md={6} key={index}>
              <motion.div
                className="program-card"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="program-image-wrapper">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="program-image"
                  />
                  <div className="program-icon">{program.icon}</div>
                </div>
                <div className="program-content">
                  <h4>{program.title}</h4>
                  <p>{program.description}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* ===== SECTION 5: GEOGRAPHIC REACH with FLAGS ===== */}
        <Row className="geographic-row mb-5 g-4">
          <Col lg={12}>
            <h2 className="section-subtitle">Where We Work</h2>
            <div className="divider"></div>
          </Col>

          {countries.map((country, index) => (
            <Col lg={3} md={6} key={index}>
              <motion.div
                className="country-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="country-flag">{country.flag}</div>
                <h4 className="country-name">{country.name}</h4>
                <p className="country-communities">
                  <em>{country.communities}</em>
                </p>
              </motion.div>
            </Col>
          ))}

          <Col lg={12}>
            <div className="communities-highlight mt-4">
              <p>
                <em>
                  <strong>High-risk communities:</strong> Dwei, Bassa, Fwapwa,
                  Jos South LGA, mining corridors, IDP camps, urban slums,
                  transport hubs across Plateau State
                </em>
              </p>
            </div>
          </Col>
        </Row>

        {/* ===== SECTION 6: SDG ALIGNMENT with ICONS ===== */}
        <Row className="flex justify-content-between sdg-row mb-5 g-4">
          <Col lg={12}>
            <h2 className="section-subtitle">Aligned with Global Goals</h2>
            <div className="divider"></div>
            <p className="sdg-intro">
              Our work contributes to the Sustainable Development Goals
            </p>
          </Col>

          {sdgs.map((sdg, index) => (
            <Col lg={2} md={4} sm={6} key={index}>
              <motion.div
                className="sdg-card"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                style={{ borderColor: sdg.color }}
              >
                <div
                  className="sdg-icon"
                  style={{ backgroundColor: sdg.color }}
                >
                  <span>{sdg.icon}</span>
                </div>
                <div className="sdg-number">SDG {sdg.number}</div>
                <p className="sdg-title">{sdg.title}</p>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* ===== SECTION 7: TESTIMONIAL / PULL QUOTE ===== */}
        <Row className="testimonial-row mb-5">
          <Col lg={12}>
            <motion.div
              className="testimonial-box"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="quote-mark">"</div>
              <p className="testimonial-quote">
                ICDEI has supported over 1,200 children with trauma healing
                services, trained more than 300 educators in child-centered
                approaches, and reached thousands through public education and
                advocacy initiatives.
              </p>
              <p className="testimonial-source">— ICDEI Impact Report</p>
            </motion.div>
          </Col>
        </Row>

        {/* ===== SECTION 8: CALL TO ACTION ===== */}
        <Row className="progress-cta">
          <Col lg={12}>
            <div className="cta-box">
              <h3>Help Us Scale Our Impact</h3>
              <p>
                Every child deserves protection, education, and purpose. Join us
                in saving the future today.
              </p>
              <div className="cta-buttons">
                <button
                  onClick={() => handleButtonClick("support")}
                  className="btn btn-primary-progress"
                >
                  Support Our Work
                  <i className="fas fa-arrow-right ms-2"></i>
                </button>
                <button
                  onClick={() => handleButtonClick("partner")}
                  className="btn btn-outline-progress"
                >
                  Partner With Us
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export { OurProgress };
