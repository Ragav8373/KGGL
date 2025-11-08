import React from 'react';
import './NewConnect.css';
import { useNavigate } from "react-router-dom";

function NewConnect() { const navigate = useNavigate();
  const handleNav11 = () => navigate("/");

  return (
    <div className='container my-5'>
      <div className=" newcontacterpcard mt-3 col-lg-12">
        <h1 className='newcontacterpcardtitle mt-5'>Let’s Connect</h1>
        <p className="revolutiontxt1 mt-0">
        Explore how our customized IT solutions can elevate your business. 
Get in touch with our experts today!
        </p>
        <button type="button" onClick={handleNav11} className="btnerpnewcontact t"> Request a Free Demo Today </button>
      </div >
       
    </div>
  );
}

export default NewConnect;
