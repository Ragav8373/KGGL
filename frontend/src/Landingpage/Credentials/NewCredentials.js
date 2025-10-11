import React from 'react';
import './NewCredentials.css';
import managerImage from "../Asset/cripumps.png"; 
import mlogoImage from "../Asset/mlogo.png"; 
import qt1Image from "../Asset/qt-com 1.png"; 
import qt2Image from "../Asset/qt-com 2.png"; 
import logoitemImage1 from "../Asset/l1.png"; 
import logoitemImage2 from "../Asset/l2.png";
import logoitemImage3 from "../Asset/l3.png"; 
import logoitemImage4 from "../Asset/l4.png"; 
import logoitemImage5 from "../Asset/l5.png"; 
import logoitemImage6 from "../Asset/l6.png"; 
import logoitemImage7 from "../Asset/l7.png"; 
import logoitemImage8 from "../Asset/l8.png"; 
import logoitemImage9 from "../Asset/l9.png"; 
import logoitemImage10 from "../Asset/l10.png"; 
import logoitemImage11 from "../Asset/l11.jpg"; 
import logoitemImage12 from "../Asset/l12.png"; 


function NewCredentials() {
  return (
    <section className="credential" id="credential">

    
      <div className="banner"></div>

      
      <div className="legacy-box">
        <h2>25+</h2>
        <p>Legacy Years</p>
      </div>

    
      <div className="stats">
        <div className="stat-box">1700+ <br /> <span>Professionals</span></div>
        <div className="stat-box">500+ <br /> <span>Projects</span></div>
      </div>

      
      <h3 className="headline">
        Global <span>Experience,</span><br />Proven <span>Results</span>
      </h3>

       <div className="bottom-stats">
        <div className="stat-box">7+ <br /> <span>Countries</span></div>
        <div className="stat-box">270+ <br /> <span>Clients</span></div>
      </div>

      {/* { feedback} */}
      <div>
        <h1 className='headline2'>Real Stories. Real Success.</h1>
        <div class="border-wrapper">
                  <div className='bgimg'><img src={managerImage} alt="img" /></div>
        <span className='headline3'>Deepak KV-Manager IT</span>
        <img src={mlogoImage} alt="img"  className='mlogoimg'/>
        </div>
        <div className="quote-wrapper">
          <img src={qt1Image} alt="quote start" className="qt-icon qt-left" />
          <p className="mtext">
            Recently we have taken SAP Functional modules training program from KG Genius Labs. The KG Genius Labs training has significantly enhanced our team's skills, and the course was expertly designed and delivered, providing a comprehensive understanding of SAP functionalities that are crucial for our operations. I highly recommend this program to any organization looking to empower their workforce with essential SAP knowledge.
          </p>
          <img src={qt2Image} alt="quote end" className="qt-icon qt-right" />
        </div>

      </div>


      {/* {client section} */}
      <div>
        <div className='clientheadline-wrapper'>
       <span className='clientheadline'>Our Clients</span>
        </div> 
  <div class="gradient-line"></div>
     <div className="logo-wrapper">
  {/* First Row - Scrolls Left */}
  <div className="logo-co">
    <div className="logo-track">
      <img src={logoitemImage1} alt="logo" className="logo-item" />
      <img src={logoitemImage2} alt="logo" className="logo-item" />
      <img src={logoitemImage3} alt="logo" className="logo-item" />
      <img src={logoitemImage4} alt="logo" className="logo-item" />
      <img src={logoitemImage5} alt="logo" className="logo-item" />
      <img src={logoitemImage6} alt="logo" className="logo-item" />
      {/* Duplicate for seamless loop */}
      <img src={logoitemImage1} alt="logo" className="logo-item" />
      <img src={logoitemImage2} alt="logo" className="logo-item" />
      <img src={logoitemImage3} alt="logo" className="logo-item" />
      <img src={logoitemImage4} alt="logo" className="logo-item" />
      <img src={logoitemImage5} alt="logo" className="logo-item" />
      <img src={logoitemImage6} alt="logo" className="logo-item" />
    </div>
  </div>

  {/* Second Row - Scrolls Right */}
  <div className="logo-co">
    <div className="logo-track">
      <img src={logoitemImage7} alt="logo" className="logo-item" />
      <img src={logoitemImage8} alt="logo" className="logo-item" />
      <img src={logoitemImage9} alt="logo" className="logo-item" />
      <img src={logoitemImage10} alt="logo" className="logo-item" />
      <img src={logoitemImage11} alt="logo" className="logo-item" />
      <img src={logoitemImage12} alt="logo" className="logo-item" />
      {/* Duplicate for seamless loop */}
      <img src={logoitemImage7} alt="logo" className="logo-item" />
      <img src={logoitemImage8} alt="logo" className="logo-item" />
      <img src={logoitemImage9} alt="logo" className="logo-item" />
      <img src={logoitemImage10} alt="logo" className="logo-item" />
      <img src={logoitemImage11} alt="logo" className="logo-item" />
      <img src={logoitemImage12} alt="logo" className="logo-item" />
    </div>
  </div>
</div>


    
      
      <div class="gradient-line"></div>
      </div>
    </section>
  );
}

export default NewCredentials;
