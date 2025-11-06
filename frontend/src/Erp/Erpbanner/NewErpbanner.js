
import React from 'react';
import './NewErpbanner.css';
import bannerlogo from '../Asset/geniuserplogo.png';
import smlogoerp from "../Asset/bluelogo.png";
import { Link as ScrollLink } from 'react-scroll'; 
import { Helmet } from 'react-helmet';

function Erpbanner() {
  return (
    <div className='container-fluid lapbanner py-4' id='Geniuserpbanner'>
      <div className='lapborder'>
        <div className='d-flex flex-column justify-content-center align-items-start ps-sm-0 ps-md-3 pe-0 pe-md-5'>
          <div className='d-flex flex-column justify-content-start align-items-start pt-0 pb-5'>
            <h1 className='text-start businessheading text-light py-5 px-3'>
              <br/>
              Genius ERP for Every <br />
              Industry – Fully <br />
              Customizable, Fully<br />
              Scalable <br/>
              <ScrollLink 
                to="ERPcontact" 
                smooth={true} 
                duration={500} 
                className="bookbtn mt-2"
              >
                Request a Demo
              </ScrollLink>
            </h1>       
          </div>
        </div>
      </div>
    </div>
  );
}

export default Erpbanner;