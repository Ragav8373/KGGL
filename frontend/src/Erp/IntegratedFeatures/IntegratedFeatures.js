// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "./IntegratedFeatures.css";
// import kgislimg1 from '../Asset/kgisliim1.png';
// import kgislimg from '../Asset/kgilsiim.png';
// import kgislimg2 from '../Asset/kgisliim2.png';

// function IntegratedFeatures() {
//   return (
//     <Container fluid className="integrated-section py-5">
//       <Row className="justify-content-start mb-4">
//         <Col lg={4}>
//           <div className="gradient-bar text-center py-4">
//             <h4 className="text-white m-0">Integrated Features</h4>
//           </div>
//         </Col>
//       </Row>

//       <Row className="align-items-center justify-content-center">
//         {/* Left Column - Feature List */}
//         <Col lg={4} md={6} className="feature-text-col ">
//           <div className="feature-items ">
//             <div className="vertical-line"></div>
//             <h5 className="feature-text">
//               Centralized Dashboard for All Modules
//             </h5>
//           </div>

//           <div className="feature-items middle ms-5 ">
//             <div className="vertical-line"></div>
//             <h5 className="feature-text">Social Media Integration</h5>
//           </div>

//           <div className="feature-items">
//             <div className="vertical-line"></div>
//             <h5 className="feature-text">
//               Notifications & Alerts via Email & WhatsApp
//             </h5>
//           </div>
//         </Col>

//         {/* Right Column - Image Stack */}
//         <Col lg={6} md={6}  className="d-flex justify-content-center">
//           <div className="image-stack">
//             <img src={kgislimg1}  alt="KGISL img" className="feature-img small-img left-img"  />
//             <img src={kgislimg}  alt="KGISL img" className="feature-img large-img center-img"  />
//             <img src={kgislimg2}  alt="KGISL img" className="feature-img small-img right-img" />
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default IntegratedFeatures;
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./IntegratedFeatures.css";
import kgislimg1 from "../Asset/kgisliim1.png";
import kgislimg from "../Asset/kgilsiim.png";
import kgislimg2 from "../Asset/kgisliim2.png";

function IntegratedFeatures() {
  const images = [kgislimg1, kgislimg, kgislimg2];
  const features = [
    "Centralized Dashboard for All Modules",
    "Social Media Integration",
    "Notifications & Alerts via Email & WhatsApp",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

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
        {/* Left Text Section */}
        <Col lg={4} md={6} className="feature-text-col">
          {features.map((text, i) => (
            <div
              key={i}
              className={`feature-items ${
                i === activeIndex ? "active-item" : ""
              }`}
            >
              <div className="vertical-line"></div>
              <h5
                className={`feature-text ${
                  i === activeIndex ? "active-text" : ""
                }`}
              >
                {text}
              </h5>
            </div>
          ))}
        </Col>

        {/* Right Image Section */}
        <Col lg={6} md={6} className="d-flex justify-content-center">
          <div className="image-stack">
            {images.map((img, i) => {
              const position =
                (i - activeIndex + images.length) % images.length;
              return (
                <motion.img
                  key={i}
                  src={img}
                  alt={`Feature ${i}`}
                  className={`feature-img ${
                    position === 0
                      ? "center-img"
                      : position === 1
                      ? "right-img"
                      : "left-img"
                  }`}
                  initial={{ scale: 0.8, opacity: 0.7 }}
                  animate={{
                    scale: position === 0 ? 1.2 : 0.9,
                    opacity: position === 0 ? 1 : 0.6,
                    zIndex: position === 0 ? 3 : 1,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default IntegratedFeatures;
