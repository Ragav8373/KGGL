import React from "react";
import "./NewAbout.css";
import aboutImage from "../Asset/NewAbout.jpg";
import { useNavigate } from "react-router-dom";

function NewAbout() {
  const navigate = useNavigate();
  const handleNav = () => navigate("/aboutus");

  return (
    <section className="about py-5" id="about">
      <div className="container">

        {/* === First Row: Text === */}
        <div className="row mb-4">
          <div className="col-12 about-text text-center text-md-start">
            <h2>About Us</h2>
            <p>
              The KG Group, with its decades-long legacy, is an established name in fields across the board,
              but we are best known for our innovative technologies. 25 years ago, the Group's KG Information
              System Private Limited (KGiSL) pioneered cutting-edge technological solutions in South India.
              Today, it is one of the fastest-growing IT companies in the Indo-Pacific with an active presence
              in over 7 countries. KG Genius Labs, the newest venture from KG, delivers tailored solutions to
              global businesses, including ERP, LMS, CRM, IT Infrastructure Management, Bespoke Application
              Development, and Digital Marketing Services.
            </p>
          </div>
        </div>

        {/* === Second Row: Image + Button === */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center about-image mb-3 mb-md-0">
            <img
              src={aboutImage}
              alt="About"
              className="img-fluid rounded-3 shadow-sm abtimg"
            />
          </div>
          <div className="col-md-6 text-center text-md-start">
            <button
              type="button"
              onClick={handleNav}
              className="rectangle4"
            >
              Know More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default NewAbout;
