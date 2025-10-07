import React from "react";
import "./NewBanner.css";
import heroImage from "../Asset/hero.jpg"; 
import { useNavigate } from "react-router-dom";

function NewBanner() {
   const navigate = useNavigate();
   const handleNavigate = () => {
    navigate("/aboutus"); // 👈 redirects to /about route
  };
  return (
    <section className="hero0" id="home">
      <div className="hero">
      <div className="hero-content">
        <h1>
          Empowering Businesses with ERP, IT & Digital Marketing Solutions
        </h1>
        <p>
          From Genius ERP to Custom IT Solutions & 360° Digital Marketing, we
          help you grow smarter, faster, and stronger.
        </p>
        <button type="button" onClick={handleNavigate} className="rectangle3">
          Explore Our Services
        </button>
        {/* <p className="rectangle3">Explore Our Services</p> */}
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Business Solutions" />
      </div>
      </div>
    </section>
  );
}

export default NewBanner;
