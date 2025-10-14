import React from 'react'
import './NewCareer.css'
import { useState } from 'react'
import NewContactpages from '../Landingpage/Contactpages/NewContactpages'
import NewMenubar from '../Landingpage/Menubar/NewMenubar'
import NewCareerContact from '../Landingpage/CareerContact/NewCareerContact'
import { Helmet } from 'react-helmet'

const NewCareer = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
    <Helmet>
        <title>Careers at KG Genius Labs | Join Our Innovative Tech Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at KG Genius Labs. Join our expert team in ERP, IT, and Digital Transformation. Apply now to grow with innovation!"
        />
        <link rel="canonical" href="https://www.kggeniuslabs.com/career" />
      </Helmet>
    <NewMenubar/>
    <main>
      <div class='card'> 
    <div className={`card-items ${expanded ? 'expanded' : ''}`}>
      <h4>Business Development Executive</h4>
      {/* <p>
        Experience: 2+Years<br></br>
        Location: Coimbatore<br></br>
        Job Type: On-site<br></br>
        Qualification: Any Degree (BBA / MBA Preferred)<br></br>
        Key Responsibilities: <br></br>
        Drive IT Sales through telesales and field visits<br></br>
        Generate and manage leads for ERP & Odoo products<br></br>
        Build strong client relationships and ensure customer satisfaction<br></br>
        Identify new business opportunities and partnerships<br></br>
        Required Skills<br></br>
        Knowledge in ERP / Odoo<br></br>
        Strong communication & presentation skills<br></br>
        Telecalling experience preferred<br></br>
        Passion for sales and technology
      </p> */}

      <ul>
  <li>Experience: 2+Years</li>
  <li>Location: Coimbatore</li>
  <li>Job Type: On-site</li>
  <li>Qualification: Any Degree (BBA / MBA Preferred)</li>
  <li>Key Responsibilities:
      <ul>
          <li>Drive IT Sales through telesales and field visits</li>
          <li>Generate and manage leads for ERP & Odoo products</li>
          <li>Build strong client relationships and ensure customer satisfaction</li>
          <li>Identify new business opportunities and partnerships</li>
      </ul>
  </li>
  <li>Required Skills:
      <ul>
          <li>Knowledge in ERP / Odoo</li>
          <li>Strong communication & presentation skills</li>
          <li>Telecalling experience preferred</li>
          <li>Passion for sales and technology</li>
      </ul>
  </li>
</ul>

      <div class='btn'>
        <button className="toggle-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show less' : 'Read more'}
      </button>
      </div>
    </div>
      </div>
    </main>
    <NewCareerContact/>
    </>
  )
}

export default NewCareer
