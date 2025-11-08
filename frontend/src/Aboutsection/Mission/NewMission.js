
import React from 'react';
import './NewMission.css';

function NewMission() {
  return (
    <div className="mission-wrapper my-5">
      <div className="mission-card mission-left">
        <h3 className="credhead">Mission</h3>
        <p className="section-para">
          Our mission is to accelerate business growth through innovative ERP, IT services, 
          and digital marketing solutions. We deliver customized, future-ready strategies that 
          streamline operations, enhance digital presence, and drive measurable results—guided 
          by our core values of integrity, innovation, and excellence.
        </p>
      </div>

      <div className="mission-card mission-right">
        <h3 className="credhead">Vision</h3>
        <p className="section-para">
          Our vision is to be a global leader in business transformation, empowering organizations 
          with cutting-edge ERP systems, robust IT services, and impactful digital marketing strategies. 
          We aspire to help businesses worldwide achieve sustainable success by fostering innovation, 
          efficiency, and a strong digital edge.
        </p>
      </div>
    </div>
  );
}

export default NewMission;
