import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Crisis = () => {
  return (
    <section className="crisis-section" id="crisis">
      {/* Decorative Background Elements */}
      <div className="deco-circle"></div>
      <div className="deco-dots">⚠ ⚠ ⚠ ⚠ ⚠</div>
      <div className="deco-line"></div>

      <Container>
        {/* ===== THE CRISIS ===== */}
        <Row className="crisis-header mb-5">
          <Col lg={12}>
            <div className="section-tag">URGENT</div>
            <h1 className="crisis-title">The Crisis We Cannot Ignore</h1>
            <div className="title-divider"></div>
            <p className="crisis-intro">
              Nigeria is facing a profound child protection and education
              crisis. Poverty, insecurity, displacement, and fragile social
              systems are converging to push millions of children into child
              labor, sexual exploitation, and cycles of lifelong vulnerability.
            </p>
          </Col>
        </Row>

        {/* ===== SECTION 2: KEY STATISTICS ===== */}
        <Row className="stats-row mb-5 g-3">
          <Col lg={12}>
            <h2 className="section-subtitle">Evidence-Based Data</h2>
            <p className="citation mb-4">UNESCO | Malala Fund | ICIR</p>
          </Col>

          <Col lg={4} md={6}>
            <div className="stat-card">
              <div className="stat-number">
                20<span className="stat-unit">M+</span>
              </div>
              <p className="stat-label">Out-of-school children in Nigeria</p>
              <div className="stat-bar"></div>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="stat-card">
              <div className="stat-number">
                60<span className="stat-unit">%</span>
              </div>
              <p className="stat-label">Are girls</p>
              <div className="stat-bar"></div>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="stat-card">
              <div className="stat-number">
                20<span className="stat-unit">%</span>
              </div>
              <p className="stat-label">
                Of Sub-Saharan Africa's out-of-school children
              </p>
              <div className="stat-bar"></div>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="stat-card">
              <div className="stat-number">
                45<span className="stat-unit">%</span>
              </div>
              <p className="stat-label">
                Of West Africa's out-of-school children
              </p>
              <div className="stat-bar"></div>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="stat-card">
              <div className="stat-number">
                98<span className="stat-unit">M</span>
              </div>
              <p className="stat-label">
                Out-of-school across Sub-Saharan Africa
              </p>
              <div className="stat-bar"></div>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="stat-card">
              <div className="stat-number">
                118.5<span className="stat-unit">M</span>
              </div>
              <p className="stat-label">Girls out of school globally</p>
              <div className="stat-bar"></div>
            </div>
          </Col>

          <Col lg={12}>
            <div className="stat-insight mt-4">
              <i className="fas fa-exclamation-triangle"></i>
              <p>
                Education exclusion is not neutral. When children are denied
                access to safe and quality learning, their exposure to child
                labor, trafficking, and sexual exploitation increases
                dramatically.
              </p>
            </div>
          </Col>
        </Row>

        {/* ===== SECTION 3: POVERTY & MULTIPLIER EFFECTS ===== */}
        <Row className="poverty-row mb-5 align-items-center">
          <Col lg={6}>
            <div className="poverty-content">
              <div className="section-tag">ROOT CAUSE</div>
              <h2 className="poverty-title">
                Poverty and Its Multiplier Effects
              </h2>
              <div className="divider"></div>
              <p className="poverty-text">
                Across many Nigerian communities, poverty forces families into
                impossible choices. When livelihoods are lost through conflict,
                displacement, environmental degradation, mining dependency, or
                unemployment, children often become a household's last survival
                strategy.
              </p>
            </div>
          </Col>

          <Col lg={6}>
            <div className="exploitation-list">
              <h3 className="list-title">Children are pushed into:</h3>
              <ul className="risk-list">
                <li>
                  <span className="list-icon">⛏️</span>
                  <span>Artisanal and informal mining</span>
                </li>
                <li>
                  <span className="list-icon">🛒</span>
                  <span>Street vending and exploitative domestic labor</span>
                </li>
                <li>
                  <span className="list-icon">⚠️</span>
                  <span>
                    Transactional sex and commercial sexual exploitation,
                    particularly among girls
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* ===== SECTION 4: SYSTEMIC FAILURE (HIGHLIGHT BOX) ===== */}
        <Row className="systemic-row mb-5">
          <Col lg={12}>
            <div className="systemic-box">
              <div className="quote-mark">"</div>
              <p className="systemic-quote">
                Child sexual exploitation is{" "}
                <span className="emphasis">not a moral failure</span> it is a{" "}
                <span className="emphasis-bold">systemic failure</span> driven
                by poverty, inequality, and weak protection systems.
              </p>
            </div>
          </Col>
        </Row>

        {/* ===== SECTION 5: HIDDEN EMERGENCY ===== */}
        <Row className="emergency-row mb-5">
          <Col lg={12}>
            <div className="section-tag">HIDDEN AND GROWING</div>
            <h2 className="emergency-title">
              Child Sexual Exploitation: A Hidden and Growing Emergency
            </h2>
            <div className="divider"></div>
          </Col>

          <Col lg={6}>
            <div className="emergency-context">
              <p className="emergency-text">
                In urban slums, mining corridors, transport hubs, and
                displacement settings, children especially girls under 18 are
                coerced or compelled into sexual exploitation to:
              </p>
              <ul className="emergency-causes">
                <li>
                  <i className="fas fa-arrow-right"></i> Contribute to household
                  income
                </li>
                <li>
                  <i className="fas fa-arrow-right"></i> Pay school-related
                  costs
                </li>
                <li>
                  <i className="fas fa-arrow-right"></i> Secure food, shelter,
                  or basic protection
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={6}>
            <div className="emergency-consequences">
              <h4 className="consequences-title">
                The consequences are devastating and long-lasting:
              </h4>
              <div className="consequences-grid">
                <div className="consequence-item">
                  <i className="fas fa-heart-broken"></i>
                  <span>Sexual and gender-based violence</span>
                </div>
                <div className="consequence-item">
                  <i className="fas fa-baby"></i>
                  <span>Early pregnancy and unsafe abortions</span>
                </div>
                <div className="consequence-item">
                  <i className="fas fa-virus"></i>
                  <span>HIV/AIDS and other STIs</span>
                </div>
                <div className="consequence-item">
                  <i className="fas fa-brain"></i>
                  <span>
                    Severe psychological trauma, shame, and social exclusion
                  </span>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={12}>
            <div className="stat-highlight mt-4">
              <p className="highlight-text">
                <span className="highlight-number">3x</span>
                Girls who are out of school are{" "}
                <strong>up to three times more likely</strong> to experience
                sexual exploitation.
              </p>
            </div>
          </Col>
        </Row>

        {/* ===== SECTION 6: MINING, DISPLACEMENT & EXPLOITATION ===== */}
        <Row className="mining-row mb-5">
          <Col lg={12}>
            <div className="section-tag">INTERSECTING RISKS</div>
            <h2 className="mining-title">
              Mining, Displacement, and Exploitation
            </h2>
            <div className="divider"></div>
          </Col>

          <Col lg={4}>
            <div className="risk-card">
              <div className="risk-icon mining-icon">⛏️</div>
              <h4>Mining Activities</h4>
              <p>
                Attract transient and unregulated populations, creating
                unmonitored environments where exploitation thrives.
              </p>
            </div>
          </Col>

          <Col lg={4}>
            <div className="risk-card">
              <div className="risk-icon displacement-icon">🏚️</div>
              <h4>Displacement</h4>
              <p>
                Weakens family and community protection structures, leaving
                children without safety nets.
              </p>
            </div>
          </Col>

          <Col lg={4}>
            <div className="risk-card">
              <div className="risk-icon poverty-icon">📉</div>
              <h4>Poverty</h4>
              <p>
                Creates exploitative dependency relationships that trap children
                in cycles of abuse.
              </p>
            </div>
          </Col>

          <Col lg={12}>
            <div className="communities-box mt-4">
              <h4 className="communities-title">High-Risk Communities:</h4>
              <p className="communities-list">
                <span>Dwei</span> • <span>Bassa</span> • <span>Fwapwa</span> •{" "}
                <span>Jos South LGA</span> • <span>Plateau State</span>
              </p>

              <Row className="mt-4">
                <Col md={6}>
                  <div className="gender-risk boys">
                    <div className="gender-icon">👦</div>
                    <div className="gender-content">
                      <h5>Boys</h5>
                      <p>
                        Pushed into hazardous mining labor, exposed to physical
                        harm and education exclusion.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="gender-risk girls">
                    <div className="gender-icon">👧</div>
                    <div className="gender-content">
                      <h5>Girls</h5>
                      <p>
                        Exposed to transactional sex and sexual exploitation,
                        facing trauma and lifelong consequences.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="systemic-conclusion mt-4">
                <i className="fas fa-link"></i>
                <p>
                  These challenges are not isolated incidents
                  <strong>
                    they are systemic and demand integrated solutions.
                  </strong>
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* ===== SECTION 7: CALL TO ACTION ===== */}
        <Row className="crisis-cta">
          <Col lg={12}>
            <div className="cta-box">
              <h3>These challenges demand integrated solutions.</h3>
              <p>
                ICDEI addresses the root causes through education reintegration,
                child protection, psychosocial support, family strengthening,
                and advocacy.
              </p>
              <div className="cta-buttons">
                <a href="#our-work" className="btn btn-primary-crisis">
                  See Our Solutions
                  <i className="fas fa-arrow-right ms-2"></i>
                </a>
                <a href="#partner" className="btn btn-outline-crisis">
                  Partner With Us
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Citation Footer */}
        <Row className="crisis-footer mt-4">
          <Col lg={12}>
            <p className="crisis-citation">
              Source: UNESCO, Malala Fund, ICIR (International Centre for
              Investigative Reporting)
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
