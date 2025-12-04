import React from 'react'
import './DmNewContact.css'
import { useNavigate } from "react-router-dom";

function DmNewContact() { const navigate = useNavigate();
  const handleNav11 = () => navigate("/");

  return (
    <div>
    <div className='container my-5'>
      <div className=" dmnewcontacterpcard mt-3 col-lg-12">
        <h1 className='dmnewcontacterpcardtitle mt-5'>Claim Your Free Website Audit</h1>
        <p className="dmrevolutiontxt1 mt-0">
        Discover Your Digital Footprint
        </p>
        <button type="button" onClick={handleNav11} className="dmbtnerpnewcontact t"> Request a Free Demo Today </button>
      </div >
       
    </div>
   <div className='dmtext1 container'><p>We help you grow your B2B business with expert SEO, targeted social media campaigns,  Google Ads management, and tailored digital marketing strategies.</p></div>
    </div>
  )
}

export default DmNewContact