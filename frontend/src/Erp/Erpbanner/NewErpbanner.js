import React from 'react';
import './NewErpbanner.css';
import bannerlogo from '../Asset/geniuserplogo.png';
import smlogoerp from "../Asset/bluelogo.png";
import { Link as ScrollLink } from 'react-scroll'; 
import { Helmet } from 'react-helmet';
function Erpbanner() {
  return (
    <>
     <Helmet>
        <title>Grow Your Business with Our ERP Experts</title>
        <meta name="description" content="Experience Business Management Simplification with KG Genius Labs’ ERP solutions, which feature mobile-friendly design, role-based access, and seamless integration." />
        <meta name="keywords" content="Customized Software Development, CRM Solutions, IT Consulting, IT Services , Future-ready IT solutions for businesses in Coimbatore, Customized CRM, Best IT Services Provider, Custom IT Solutions for Businesses, IT Support and Maintenance Services, CRM Company in Coimbatore, Custom CRM Solutions Provider, Cloud-Based CRM Services, B2B LMS Platforms for Educational Institutions, LMS for Skill Development and Training" />
        <link rel="canonical" href=" https://www.kggeniuslabs.com/custom-erp-software-solution" />
      </Helmet>
       
      <div className='container-fluid d-none d-md-block lapbackround h-100 py-1'>
      <div className='container-fluid d-none d-md-block lapbanner h-100 py-4' id='Geniuserpbanner'>

        <div className='container-fluid lapborder' >
    
        <div className='d-flex flex-column justify-content-center align-items-start ps-sm-0 ps-md-3 pe-0 pe-md-5'>

          <div className='d-flex flex-column justify-content-start align-items-start pt-0 pb-5'>
            
            <h1 className='text-start businessheading text-light py-5 px-3'>
            {/* <img src={bannerlogo} alt='Streamline Your Business with our customized ERP Solutions!' title='KG Genius ERP' className='imglogo'/> */}
            <br/>
               Genius ERP for Every <br />
             Industry – Fully <br />
             Customizable, Fully<br />
            Scalable <br/>
             <ScrollLink 
              to="ERPcontact"  smooth={true} duration={500} className="bookbtn mt-2">
              Request a Demo
            </ScrollLink>

            </h1>       
          </div>
        </div>
        </div>
      </div>
      </div>

      <div className='container-fluid d-block d-md-none p-0 m-0'>
        <div className='bgmb m-0 p-0 pt-5'>
          <h1 className='text-start px-3 streamtxt text-light'>
            {/* <img src={bannerlogo} alt='Streamline Your Business with our customized ERP Solutions!' title='KG Genius ERP'  className='py-0 bluelogo'/> */}
            <br/>
            Genius ERP for Every <br />
             Industry – Fully <br />
             Customizable, Fully<br />
            Scalable 
          </h1>
          <div className='d-flex justify-content-center'>
            <ScrollLink 
              to="ERPcontact"  smooth={true} duration={500} className="bookbtn  px-3 mb-3">
              Request a Demo
            </ScrollLink>
            {/* <ScrollLink to="Webinarcontact" smooth={true} duration={500} className='bookbtn text-light border-0 py-1 px-3 mb-5 text-decoration-none'>
              Book a Free Demo
            </ScrollLink> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Erpbanner;
