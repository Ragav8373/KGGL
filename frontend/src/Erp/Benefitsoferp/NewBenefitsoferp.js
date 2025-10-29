
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './NewBenefitsoferp.css';

function NewBenefitsoferp() {
  return (
    <Container className="mt-0 mb-5 ">
      <Row>
        <Col lg={12} md={12} >
          <h1 className="text-center py-5 Benefitsoferp">
            Top Benefits of KG Genius ERP for Businesses
          </h1>
        </Col>
      </Row>

      <Row className="gy-4 justify-content-center mt-3">
        <Col lg={4} md={6} sm={12}>
          <div className="Benefitsoferpcard mt-3">
            <h4>Streamline and Automate Operations</h4>
            <p className="revolutiontxt">
             Reduce costs, minimize risks, and improve  efficiency across all departments.
            </p>
          </div>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <div className="Benefitsoferpcard mt-3">
            <h4>Boost Financial Performance</h4>
            <p className="revolutiontxt">
              Enhance cash flow, increase profit margins, and  simplify financial management.
            </p>
          </div>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <div className="Benefitsoferpcard mt-3">
            <h4>Gain Real-Time Operational Insights</h4>
            <p className="revolutiontxt">
              Monitor critical business processes with  instant, actionable data.
            </p>
          </div>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <div className="Benefitsoferpcard mt-3">
            <h4>Make Faster, Data-Driven Decisions</h4>
            <p className="revolutiontxt">
              Accelerate growth, optimize strategies, and  increase market share.
            </p>
          </div>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <div className="Benefitsoferpcard mt-3">
            <h4>Create Interactive Reports Easily</h4>
            <p className="revolutiontxt">
              Use user-friendly tools to generate compelling,  insightful reports for better business analysis.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NewBenefitsoferp;
