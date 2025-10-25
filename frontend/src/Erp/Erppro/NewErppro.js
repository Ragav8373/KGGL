
import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import "./NewErppro.css";

function NewErppro() {
  return (
    <div>
        <Container className='my-5 '>
            <Row>
               <Col lg={3} md={3} sm={6} >

                <div className='left-title mt-5 text-start' >
                    <h3 className='side-title' >Sales Order & Invoice Management:</h3>
                    <p className='side-subtitle' > Track and process sales seamlessly.</p>

                </div>
                
                </Col>
                <Col lg={3} md={3} sm={6}>

                <div><h4 className='card-title l text-end' >Sales</h4>
                <p className='card-text' >Manage your sales effortlessly – from orders and invoices to quotations and customer data.  Track performance and stay updated with real-time notifications, all from a single dashboard.</p>
                </div>
                </Col>
               <Col lg={3} md={3} sm={6}>

                <div><h4 className='card-title r '>Purchase</h4></div>
                <p className='card-text' >Simplify procurement with streamlined purchase orders, invoices, material requests, and  returns. Automate notifications and tax management for a smooth, error-free workflow.</p>
                </Col>
                <Col lg={3} md={3} sm={6}>
                <div className='left-title mt-5 text-end' >
                <h3 className='side-title' >Purchase Orders & Invoices:</h3>
                    <p className='side-subtitle' > Smoothly manage all vendor transactions.</p>
                </div>
                </Col>

            </Row>
            <Row>
                <Col lg={6} md={6} sm={12} >
                <h3 className='card-title left mt-2 '>Production</h3>
                <Row>
                    <Col>
                      <div>
                        <h3 className='side-title' >Production Plan & Work Orders:</h3>
                      <p className='side-subtitle' >Organize and track production schedules.</p>
                      </div>    
                    </Col >
                    <Col  >
                    <div>
                        <p className='card-text' >Plan, execute, and monitor production efficiently. Manage work orders, job cards, and  resources while ensuring every task follows a seamless workflow from start to finish.</p>
                    </div>
                    </Col>

                </Row>
                
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h3 className='card-title right mt-2' >Inventory</h3>
                  <Row>
                    <Col>
                    <div>
                        <p className='card-text' >Track and maintain inventory with ease. From warehouse management to item-level tracking,  monitor stock at every stage of production and delivery.</p>
                    </div>
                    
                    </Col>
                    <Col>
                     <div className=' text-end'>
                      <h3 className='side-title ' >Item & Warehouse Maintenance:</h3>
                      <p className='side-subtitle' >Keep detailed records and update stock.</p>
                      </div>
                    </Col>

                </Row>
                </Col>
            </Row>
             <Row>
                <Col lg={6} md={6} sm={12}>
                <h3 className='card-title left1 mt-2'>Accounts</h3>
                <Row>
                    <Col>
                      <div>
                        <h3 className='side-title' >Payment & Invoice Management:</h3>
                      <p className='side-subtitle' >Record and monitor all transactions.</p>
                      </div>    
                    </Col>
                    <Col>
                    <div>
                        <p className='card-text' >Stay on top of your finances with automated payment, invoice, and tax management.  Generate daily reports, track credit, and receive notifications for complete financial control.</p>
                    </div>
                    </Col>

                </Row>
                
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h3 className='card-title right1 mt-2' >Human Resource Management</h3>
                  <Row>
                    <Col>
                    <div>
                        <p className='card-text' >Manage employees, attendance, shifts, and payroll seamlessly. Automate salary calculations,  OT tracking, and payslips while streamlining recruitment, onboarding, and training processes.</p>
                    </div>
                    
                    </Col>
                    <Col>
                     <div className=' text-end'>
                      <h3 className='side-title ' >Employee Management & Attendance:</h3>
                      <p className='side-subtitle' >Biometric integration, leave, and shift  scheduling.</p>
                      </div>
                    </Col>

                </Row>
                </Col>
            </Row>
             <Row>
                <Col lg={6} md={6} sm={12}>
                <h3 className='card-title left1 mt-2'>Sales CRM Management</h3>
                <Row>
                    <Col>
                      <div>
                        <h3 className='side-title' >Lead & Prospect Management:</h3>
                      <p className='side-subtitle' >Monitor all leads and opportunities.</p>
                      </div>    
                    </Col>
                    <Col>
                    <div>
                        <p className='card-text' >Convert leads into loyal customers with intelligent CRM. Manage prospects, quotations,  follow-ups, and analytics to boost sales and achieve targets efficiently.  Automate travel  allowance and monitor client interactions in real-time.</p>
                    </div>
                    </Col>

                </Row>
                
                </Col  >
                <Col lg={6} md={6} sm={12}>
                  <h3 className='card-title right1 mt-2' >Support CRM  Management</h3>
                  <Row>
                    <Col>
                    <div>
                        <p className='card-text' >Deliver exceptional customer support with issue tracking, maintenance, warranties, and  geo-location-based field visits.</p>
                    </div>
                    
                    </Col>
                    <Col>
                     <div className=' text-end'>
                      <h3 className='side-title ' >Item & Warehouse Maintenance:</h3>
                      <p className='side-subtitle' >Keep detailed records and update stock.</p>
                      </div>
                    </Col>

                </Row>
                </Col>
            </Row>
             <Row>
                <Col lg={6} md={6} sm={12}>
                <h3 className='card-title left mt-2'>Support CRM</h3>
                <Row>
                    <Col>
                      <div>
                        <h3 className='side-title' >24/7 Multichannel Support:</h3>
                      <p className='side-subtitle' >Manage customer support across phone from one place.</p>
                      </div>    
                    </Col>
                    <Col>
                    <div>
                        <p className='card-text' >Customer satisfaction doesn’t stop at service—it continues through dedicated support.</p>
                    </div>
                    </Col>

                </Row>
                
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h3 className='card-title right mt-2' >Service CRM</h3>
                  <Row>
                    <Col>
                    <div>
                        <p className='card-text' >Deliver exceptional customer service with a system built to handle inquiries, feedback, and service requests.</p>
                    </div>
                    
                    </Col>
                    <Col>
                     <div className=' text-end'>
                      <h3 className='side-title ' >Customer Support Tickets:</h3>
                      <p className='side-subtitle' >Efficiently track, prioritize, and resolve customer issues.</p>
                      </div>
                    </Col>

                </Row>
                </Col>
            </Row>
            
        </Container>
      
    </div>
  )
}

export default NewErppro
