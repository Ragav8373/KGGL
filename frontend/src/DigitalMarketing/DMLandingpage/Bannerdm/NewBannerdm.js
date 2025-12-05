
import React from 'react';

// import bannerlogo from '../Asset/geniuserplogo.png';
// import smlogoerp from "../Asset/bluelogo.png";
import { Link as ScrollLink } from 'react-scroll'; 
import { Helmet } from 'react-helmet';
import './NewBanner.css';

function NewBannerdm() {
  return (
    <div className='container-fluid lapbannerdm py-4' id='Geniuserpbannerdm'>
      <div className='lapborder'>
        <div className='d-flex flex-column justify-content-center align-items-start ps-sm-0 ps-md-3 pe-0 pe-md-5'>
          <div className='d-flex flex-column justify-content-start align-items-start pt-0 pb-5'>
            <h1 className='text-start businessheadingdm text-light py-5 px-3'>
              <br/>
              Drive Traffic, Boost Sales, &<br />
              Build Your Brand with Expert  <br />
              Customizable, Fully<br />
              Digital Marketing<br/>
              <ScrollLink 
                to="ERPcontact" 
                smooth={true} 
                duration={500} 
                className="bookbtn mt-3"
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

export default NewBannerdm;