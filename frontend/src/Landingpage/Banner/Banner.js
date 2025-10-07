import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import bannerimg1 from "../Asset/GLBanner.jpg";
import bannerimg2 from "../Asset/SAPBanner.jpg";
import bannerimg3 from "../Asset/ITBanner.jpg";
import bannerimg4 from "../Asset/DMBanner.jpg";
import './Banner.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Link as Sclink } from "react-scroll";
import { Helmet } from 'react-helmet';
function Banner() {
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <>
    
    <Helmet>
        <title>KG Genius Labs | ERP, IT & Digital Marketing Services</title>
        <meta name="description" content="Discover KG Genius Labs for expert SAP consultation, innovative IT solutions, CRM development, digital marketing strategies, and custom LMS development. Your trusted partner for transforming ideas into innovation and growth." />
        <meta name="keywords" content=" kggeniuslabs, KG Genius Labs, SAP Consulting in coimbatore, IT Services in coimbatore, SAP Consulting, IT Solutions, Digital Transformation, CRM Development, Digital Marketing, Custom LMS Development, Best SAP consulting services, SEO Service in coimbatore, Website Development " />
        <link rel="canonical" href="https://www.kggeniuslabs.com" />
      </Helmet>

    <Carousel id='Homepart' controls={false} interval={3000} pause={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerimg1} title='KG Genius Labs' alt=" Empowering businesses with cutting-edge web development, mobile applications, and comprehensive IT Services like CRM and LMS, coupled with strategic digital marketing solutions" width="1200" height="400"/>
        <Carousel.Caption className="carousel-caption-centered">
          <h1 className='itheading'>Harness Unmatched Business Growth with <br/><span className='bannerkg'>KG Genius Labs</span></h1>
          <p className='itpara'>Shape Your Ambitions into Tangible Results</p>
          <Sclink to="ourservices" smooth={true} duration={100} offset={-50}>
            <button className='btnshading mt-2'>
              Know More <FontAwesomeIcon icon={faAngleRight} style={{color:"BF1A36"}} />
            </button>
          </Sclink>  
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={bannerimg2} title='SAP Solution Provider' alt="Business partnership and technological connection, reflecting SAP services in a digitally transformed world" width="1200" height="400"/>
        <Carousel.Caption className="carousel-caption-centered">
          <h1 className='itheading'>Rise and Grow with<br/><span className='bannerkg1'>SAP</span></h1>
          <p className='itpara'>Achieve efficiency with streamlined operations through tailored SAP implementations and expert support.</p>
          <Link to="/sap-services" className='pt-5 mt-5'>
            <button className='btnshading1'>
              Consult with Our Experts
              <FontAwesomeIcon icon={faAngleRight} style={{ color: '#fff' }} className='mx-1' />
            </button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={bannerimg3} title='IT Services' alt=" Leading the way in digital transformation through bespoke web and mobile solutions, advanced IT Services, and powerful digital marketing strategies that deliver results" width="1200" height="400"/>
        <Carousel.Caption className="carousel-caption-centered">
          <h1 className='sapheading'>Empower Your Business with Optimized <br/><span className='bannerkg1'>IT Solutions</span></h1>
          <p className='itpara'>We provide comprehensive IT Solutions to ensure reliability and drive success.</p>
          <Link to="/it-services">
          <button className='btnshading1'>Explore More <FontAwesomeIcon icon={faAngleRight} style={{color:"fff"}} className='mx-1'/></button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={bannerimg4} title=' Digital Marketing' alt="Driving your brand's digital presence with innovative strategies, creative campaigns, and data-driven solutions that connect and engage with your audienc" width="1200" height="400" />
        <Carousel.Caption className="carousel-caption-centered">
          <h3 className='dmheading pb-2'>Revamp Your Online Presence with Our Strategic
            <span className='bannerkg1' > Digital Marketing Magic</span></h3>
          <p className='itpara'>We offer innovative digital marketing services to enhance your brand and drive results.</p>
          <Link to="/digital-marketing-services-coimbatore" className='pt-5 mt-5'>
          <button className='btnshading1 mb-5'>Explore More <FontAwesomeIcon icon={faAngleRight} style={{color:"fff"}} className='mx-1'/></button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Banner;
