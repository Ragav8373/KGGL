import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./IntegratedFeatures.css";
import kgislimg1 from '../Asset/kgisliim1.png';
import kgislimg from '../Asset/kgilsiim.png';
import kgislimg2 from '../Asset/kgisliim2.png';

function IntegratedFeatures() {
  return (
    <Container fluid className="integrated-section py-5">
      <Row className="justify-content-start mb-4">
        <Col lg={4}>
          <div className="gradient-bar text-center py-4">
            <h4 className="text-white m-0">Integrated Features</h4>
          </div>
        </Col>
      </Row>

      <Row className="align-items-center justify-content-center">
        {/* Left Column - Feature List */}
        <Col lg={4} md={6} className="feature-text-col ">
          <div className="feature-item ">
            <div className="vertical-line"></div>
            <h5 className="feature-text">
              Centralized Dashboard for All Modules
            </h5>
          </div>

          <div className="feature-item middle ms-5 ">
            <div className="vertical-line"></div>
            <h5 className="feature-text">Social Media Integration</h5>
          </div>

          <div className="feature-item">
            <div className="vertical-line"></div>
            <h5 className="feature-text">
              Notifications & Alerts via Email & WhatsApp
            </h5>
          </div>
        </Col>

        {/* Right Column - Image Stack */}
        <Col lg={6} md={6}  className="d-flex justify-content-center">
          <div className="image-stack">
            <img src={kgislimg1}  alt="KGISL img" className="feature-img small-img left-img"  />
            <img src={kgislimg}  alt="KGISL img" className="feature-img large-img center-img"  />
            <img src={kgislimg2}  alt="KGISL img" className="feature-img small-img right-img" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default IntegratedFeatures;
