import React from 'react';
import './NewAboutKggl.css';
import img1 from '../Asset/businessman-interacting-with-futuristic-graphics 2.png';
import img2 from '../Asset/employee-working-marketing-setting 1.png';
import img3 from '../Asset/businessman-pointing-chart-digital-monitor-generated-by-ai 3.png';

function NewAboutKggl() {
  return (
    <>
        <div className=" container-fluid border-wrapperabout mt-5">
                    <h2 className="newabout-title">Who We Are</h2>
      <div className="newabout-content mt-5">
       
        <p className="newabout-text">
          We are a team of innovators, consultants, and technology experts passionate about solving 
          real-world business challenges. At KG Genius Labs, we believe that every organization is 
          unique — which is why we design customized solutions that align with your industry, 
          business goals, and long-term vision.
        </p>
        <div className="newabout-images">
          <img src={img1} alt="Innovation" />
          <img src={img2} alt="Team Collaboration" className='centerimage' />
          <img src={img3} alt="Data Analytics" />
        </div>
      </div>
    </div>

    <div className='container py-3'>
      <h1 className=' newstengthtitle py-3' >Our Strength</h1>
      <p className='newstengthtext'>
        We make business operations transparent, automated, and efficient through our customizable  software. With real-time analytics, clear insights, and streamlined workflows. Businesses  gain complete visibility into their processes—eliminating hidden inefficiencies and enabling  smarter decision-making.
      </p>
       <div className="vertical-lineabout-container mt-5">
  <div className="vertical-lineabout"></div>
  <h2 className="newstengthsubtitle">Simplify Operations. Amplify Success.</h2>
</div>
<div className='newstengthsubtext mt-5'><p>We nurture and transform young talent into future-ready techpreneurs</p></div>
  
    </div>
   
    </>
 
  );
}

export default NewAboutKggl;
