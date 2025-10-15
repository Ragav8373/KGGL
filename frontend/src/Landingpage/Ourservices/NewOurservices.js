import React from 'react';
import "./NewOurservices.css";
import erpImage from "../Asset/erp-service.jpg";
import itImage from "../Asset/it-img.jpg";
import dgImage from "../Asset/dg-img.jpg";
import { useNavigate } from "react-router-dom";

function NewOurservices() {
  const navigate = useNavigate();
  const handleNav = () => navigate("/aboutus");

  return (
    <section className="services" id="services">
      <div className="Rectangle5">
        <h1>Our Services</h1>
      </div>

      <div className="container py-5">
        {/* ERP Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <div className="image-wrapper">
              {/* <div className="section-border"></div> */}
              <img src={erpImage} alt="ERP Service" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-7">
            <h2 className="section-title">ERP Software</h2>
            <h3 className="sub-title">Smarter Business with Genius ERP</h3>
            <p className='pra'>
              Streamline operations with our customizable <strong>ERP software</strong> covering Sales, Purchase, Inventory, Accounts, HR, Payroll, CRM, and Production.
              Built for manufacturers, retailers, and service providers, Genius ERP helps you <strong>save time, reduce costs, and make data-driven decisions.</strong>
            </p>
            <button type="button" onClick={handleNav} className="btn2">
              View More
            </button>
          </div>
        </div>

        {/* IT Section */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <div className="image-wrapper">
              {/* <div className="section-border-1"></div> */}
              <img src={itImage} alt="IT Service" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-7 text-md-end">
            <h2 className="section-title">IT Services</h2>
            <h3 className="sub-title">Complete IT Solutions for Every Business</h3>
            <p className='pra'>
              We deliver end-to-end <strong>IT services,</strong> including Website Design, Mobile App Development, and Custom Software Solutions. 
              Our tech-driven approach ensures <strong>scalable, secure, and user-friendly applications</strong> tailored to your business needs.
            </p>
            <button type="button" onClick={handleNav} className="btn3">
              View More
            </button>
          </div>
        </div>

        {/* Digital Marketing Section */}
        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <div className="image-wrapper">
              {/* <div className="section-border"></div> */}
              <img src={dgImage} alt="Digital Marketing" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-7">
            <h2 className="section-title">Digital Marketing</h2>
            <h3 className="sub-title">360° Digital Marketing That Delivers Results</h3>
            <p className='pra'>
              From <strong>SEO, SEM,</strong> and <strong>PPC</strong> to <strong>Social Media, Content,</strong> and <strong>Video Marketing,</strong> we create campaigns that generate 
              <strong> traffic, leads,</strong> and <strong>conversions.</strong> Our creative + data-driven strategies ensure your brand stands out online.
            </p>
            <button type="button" onClick={handleNav} className="btn4">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewOurservices;
