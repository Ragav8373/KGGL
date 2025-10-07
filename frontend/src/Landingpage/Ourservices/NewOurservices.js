import React from 'react';
import "./NewOurservices.css";
import erpImage from "../Asset/erp-service.jpg";
import itImage from "../Asset/it-img.jpg";
import dgImage from "../Asset/dg-img.jpg";
import { useNavigate } from "react-router-dom";

function NewOurservices() {
      const navigate = useNavigate();
         const handleNav = () => {
          navigate("/aboutus"); // 👈 redirects to /about route
        };
  return (
   <section className='services' id='services'>
    <div className='Rectangle5'>
        <h1>Our Services</h1> 
    </div>

    <div className='erp-section'>
          <h2>ERP Software</h2>
        <div className='erp-image'>
            <img src={erpImage} alt="ERP Service" />
        </div>
        <div className='erp-text'>
          
            <h3>Smarter Business with Genius ERP</h3>
            <p>
              Streamline operations with our customizable <strong>ERP software</strong> covering Sales, Purchase, Inventory, Accounts, HR, Payroll, CRM, and Production.
              Built for manufacturers, retailers, and service providers, Genius ERP helps you <strong>save time, reduce costs, and make data-driven decisions.</strong>
            </p>
        </div>
           <button type="button" onClick={handleNav} className="btn2">
        View More
      </button>
    </div>
     <div className='it-section'>
          <h2>IT Services</h2>
        
        <div className='it-text'>
            <h3>Complete IT Solutions for Every Business</h3>
            <p>
              We deliver end-to-end <strong>IT services,</strong> including Website Design, Mobile App Development, and  Custom Software Solutions. Our tech-driven approach ensures <strong>scalable, secure, and  user-friendly applications </strong>
              tailored to your business needs.
            </p>
        </div>
           <button type="button" onClick={handleNav} className="btn3">
        View More
      </button>
      <div className='it-image'>
            <img src={itImage} alt="it Service" />
        </div>
    </div>
    <div className='dg-section'>
          <h2>Digital Marketing</h2>
        <div className='dg-image'>
            <img src={dgImage} alt="Digital Marketing" />
        </div>
        <div className='dg-text'>
          
            <h3>360° Digital Marketing That Delivers Results</h3>
            <p>From<strong> SEO, SEM,</strong> and<strong> PPC</strong> to<strong> Social Media, Content,</strong> and<strong> Video Marketing,</strong> we create  campaigns that generate<strong> traffic, leads,</strong> and<strong> conversions.</strong> Our creative + data-driven  strategies ensure your brand stands out online.
            </p>
        </div>
           <button type="button" onClick={handleNav} className="btn2">
        View More
      </button>
    </div>
   </section>
   
  )
}

export default NewOurservices;
