import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import whoWeAreImg from "../assets/img/who-we-are.jpg";
import ourStoryImg from "../assets/img/our-story.jpg";

export const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <Container className="about-container">
        {/* ===== OUR STORY ===== */}
        <Row className="story-row align-items-center g-3 mb-5 py-3">
          <Col lg={6}>
            <div className="section-tag">OUR STORY</div>
            <h2 className="story-title">A Journey from Struggle to Purpose</h2>
            <div className="divider"></div>
            <p className="story-text">
              ICDEI was born from lived experience. The organization's
              foundation is rooted in firsthand exposure to domestic violence,
              harmful cultural practices, ethno-religious conflict, and the
              denial of childhood safety and dignity.
            </p>
            <p className="story-text">
              These experiences revealed how unaddressed trauma, abuse, and
              neglect shape adulthood eroding self-worth, limiting opportunity,
              and perpetuating cycles of harm.
            </p>
            <div className="story-quote">
              "No child should grow up believing abuse, exploitation, or silence
              is normal."
            </div>
            <p className="story-text mt-3">
              <strong>From pain came purpose.</strong> ICDEI exists to interrupt
              trauma early, restore dignity, and build strong protective systems
              around children and families.
            </p>
          </Col>
          <Col lg={6}>
            <div className="story-image-wrapper">
              <img
                src={ourStoryImg}
                alt="African child with purpose and hope"
                className="story-image"
              />
              <div className="image-accent"></div>
            </div>
          </Col>
        </Row>

        {/* ===== WHO WE ARE  ===== */}
        <Row className="who-row align-items-center g-4 mt-3 mb-5 px-2 py-4">
          <Col lg={4}>
            <div className="who-content-left">
              <div className="section-tag light">WHO WE ARE</div>
              <h3 className="who-title">
                Impartville Children Development and Empowerment Initiative
              </h3>
              <p className="who-text">
                ICDEI is a child-focused nonprofit organization advancing
                holistic child and youth development, protection, and
                empowerment in Nigeria and across Africa.
              </p>
              <p className="who-text">
                We address education exclusion, child labor, sexual
                exploitation, trauma, and family vulnerability through
                integrated, community-driven, and evidence-informed
                interventions.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="who-image-wrapper">
              <img
                src={whoWeAreImg}
                alt="Children learning together"
                className="who-image"
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="who-content-right">
              <div className="who-stat">
                <span className="who-stat-number">1,200+</span>
                <span className="who-stat-label">
                  Children supported with trauma healing
                </span>
              </div>
              <div className="who-stat">
                <span className="who-stat-number">300+</span>
                <span className="who-stat-label">
                  Educators trained in child-centered approaches
                </span>
              </div>
              <div className="who-stat">
                <span className="who-stat-number">4</span>
                <span className="who-stat-label">
                  Countries: Nigeria, Liberia, Kenya, Cameroon
                </span>
              </div>
              <div className="who-regions mt-3">
                <strong>Serving high-risk communities:</strong>
                <p className="mt-2">
                  Plateau State • Mining corridors • IDP camps • Urban slums
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* ===== MISSION, VISION, MOTTO ===== */}
        <Row className="mission-row g-4 mt-3 mb-5">
          <Col md={4}>
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className="mission-card-title">Mission</h3>
              <div className="mission-divider"></div>
              <p className="mission-card-text">
                To nurture the holistic well-being of every child through
                preventive, protective, and restorative approaches that
                safeguard dignity, secure futures, and inspire positive change.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="mission-card vision-card">
              <div className="mission-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3 className="mission-card-title">Vision</h3>
              <div className="mission-divider"></div>
              <p className="mission-card-text vision-text">
                Transformed Children. <br /> Transforming Their World.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="mission-card motto-card">
              <div className="mission-icon">
                <i className="fas fa-ribbon"></i>
              </div>
              <h3 className="mission-card-title">Motto</h3>
              <div className="mission-divider"></div>
              <p className="mission-card-text motto-text">
                Saving the Future Today
              </p>
            </div>
          </Col>
        </Row>

        {/* ===== CORE VALUES ===== */}
        <Row className="values-row mb-5 mt-3 py-1">
          <Col xs={12} className="text-center mb-2">
            <div className="section-tag">OUR CORE VALUES</div>
            <h2 className="values-main-title">What Guides Us</h2>
            <div className="divider centered"></div>
          </Col>
          {[
            {
              icon: "fa-heart",
              title: "Compassion",
              desc: "Meeting children and families with empathy, dignity, and respect.",
            },
            {
              icon: "fa-shield",
              title: "Integrity",
              desc: "Ethical, transparent, and accountable in all we do.",
            },
            {
              icon: "fa-star",
              title: "Excellence",
              desc: "Evidence-informed, quality-driven, and results-oriented.",
            },
            {
              icon: "fa-handshake",
              title: "Collaboration",
              desc: "Community-led, partnership-powered, together we go further.",
            },
            {
              icon: "fa-lightbulb",
              title: "Innovation",
              desc: "Creative solutions for complex challenges.",
            },
          ].map((value, index) => (
            <Col
              lg={2}
              md={4}
              sm={6}
              className={index === 0 ? "offset-lg-1" : ""}
              key={index}
            >
              <div className="value-card">
                <div className="value-icon">
                  <i className={`fas ${value.icon}`}></i>
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-desc">{value.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* ===== OUR APPROACH ===== */}
        <Row className="approach-row">
          <Col xs={12} className="text-center mb-4 mt-3">
            <div className="section-tag">OUR HOLISTIC APPROACH</div>
            <h2 className="approach-main-title">
              How We Protect and Empower Children
            </h2>
            <div className="divider centered"></div>
          </Col>

          <Col lg={3} md={6}>
            <div className="approach-card">
              <div className="approach-icon physical">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h4>Physical Well-being</h4>
              <p>
                Health, nutrition, safety, and sport. Building strong bodies and
                safe environments.
              </p>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="approach-card">
              <div className="approach-icon cognitive">
                <i className="fas fa-book-open"></i>
              </div>
              <h4>Cognitive Development</h4>
              <p>
                Education, literacy, and digital skills. Unlocking potential
                through learning.
              </p>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="approach-card">
              <div className="approach-icon social">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h4>Social & Emotional</h4>
              <p>
                Trauma healing, psychosocial support, and resilience. Restoring
                hearts and minds.
              </p>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="approach-card">
              <div className="approach-icon spiritual">
                <i className="fas fa-dove"></i>
              </div>
              <h4>Spiritual & Moral</h4>
              <p>
                Values, dignity, purpose, and ethical grounding. Nurturing the
                whole child.
              </p>
            </div>
          </Col>

          <Col xs={12} className="text-center mt-4">
            <p className="approach-footer">
              Integrated. Trauma-informed. Community-led. Child-centered.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
