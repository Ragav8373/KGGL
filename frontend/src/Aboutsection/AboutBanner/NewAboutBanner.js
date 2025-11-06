
import React from 'react';
import './NewAboutBanner.css';
import bannerlogo from '../Asset/KGGL Logob.png';
function NewAboutBanner() {
  return (
    <div className='container-fluid lapbanner1 py-4' id='Geniuserpbanner'>
      <div className='container-fluid lapborder1'>
        <div className='content-wrapper'>
          <div className='text-content col-lg-6'>
            <h1 className='businessheading1'>About Us</h1>
            <p>
              KG Genius Labs, the newest venture from the renowned KG Groups, is committed to delivering tailored technology solutions that help businesses innovate, scale, and thrive in the digital era. With a strong foundation of 25+ years of legacy, a presence in 7+ countries, and the support of 1,700+ skilled professionals, we empower organizations with transformative IT and digital strategies.
            </p>
          </div>
          <div className='logo-container col-lg-6'>
            <img src={bannerlogo} alt='Streamline Your Business with our customized ERP Solutions!' title='KG Genius ERP' className='imglogob'/>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAboutBanner;