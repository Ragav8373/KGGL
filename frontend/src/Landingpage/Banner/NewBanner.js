import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../Asset/hero.jpg";
import "./NewBanner.css";

function NewBanner() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/aboutus");
  };

  return (
    <section className="hero0" id="home">
      {/* Your inner gradient hero section */}
      <div className="hero">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
              <h1 className="fw-bold display-5 mb-3">
                Empowering Businesses with ERP, IT & Digital Marketing Solutions
              </h1>
              <p className="lead mb-4">
                From Genius ERP to Custom IT Solutions & 360° Digital Marketing, we
                help you grow smarter, faster, and stronger.
              </p>
             <button
                    type="button"
                    onClick={handleNavigate}
                    className="rectangle3"
                  >
                    Explore Our Services
                  </button>


            </div>

            {/* Right Image */}
            <div className="col-lg-6 col-md-12 text-center">
              <img
                src={heroImage}
                alt="Business Solutions"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewBanner;
