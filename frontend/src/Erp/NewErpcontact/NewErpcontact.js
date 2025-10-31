import React from 'react';
import './NewErpcontact.css';
import { useNavigate } from "react-router-dom";

function NewErpcontact() { const navigate = useNavigate();
  const handleNav11 = () => navigate("/");

  return (
    <div className='container' >
      <div className=" newcontacterpcard mt-3 col-lg-12">
        <h1 className='newcontacterpcardtitle'>Let’s Connect</h1>
        <p className="revolutiontxt">
        Explore how our customized IT solutions can elevate your business. 
Get in touch with our experts today!
        </p>
        <button type="button" onClick={handleNav11} className="btnerpnewcontact"> Request a Free Demo Today </button>
      </div >
       
    </div>
  );
}

export default NewErpcontact;
