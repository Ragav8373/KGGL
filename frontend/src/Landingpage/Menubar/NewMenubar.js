import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from "../../Asset/Logo Tagline-02 (1).png";
import "./NewMenubar.css";
import NewCareer from '../../Career/NewCareer';

function NewMenubar() {
  const [expanded, setExpanded] = useState(false); 
  const [erpDropdownOpen, setErpDropdownOpen] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleSelect = () => setExpanded(false);
  const toggleErpDropdown = () => setErpDropdownOpen(!erpDropdownOpen);

  return (
    <Navbar expand="lg" expanded={expanded} className="navbox">
      <Container >
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="logsiz" alt="KG Genius Labs" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="navtext" onClick={handleSelect}>Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className="navtext" onClick={handleSelect}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/career" className="navtext" onClick={handleSelect}>Career</Nav.Link>
            {/* Our Services Dropdown */}
            <NavDropdown title={<span className="navtext1">Our Services</span>} id="services-dropdown">
              {/* ERP Services with nested dropdown */}
            
{/* 
              <div
                className="dropdown-item navtext1"

                onClick={toggleErpDropdown}
                style={{ cursor: "pointer" }}
              >
                ERP Services
              </div>
              {erpDropdownOpen && (
                <div className="dropdown-submenu">
                  <NavDropdown.Item as={Link} to="/sap-services" className="navtext1" onClick={handleSelect}>
                    SAP Services
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/custom-erp-software-solution" className="navtext1" onClick={handleSelect}>
                    KG Genius ERP
                  </NavDropdown.Item>
                </div>
              )} */}
              <NavDropdown.Item as={Link} to="/custom-erp-software-solution" className="navtext1" onClick={handleSelect}>
                ERP Services
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/it-services" className="navtext1" onClick={handleSelect}>
                IT Services
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/digital-marketing-services-coimbatore" className="navtext1" onClick={handleSelect}>
                Digital Marketing Services
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hr-consultancy" className="navtext1" onClick={handleSelect}>
                HR Consultancy
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/blog" className="navtext" onClick={handleSelect}>Blog</Nav.Link>
          </Nav>

        <Nav className="ms"> <Nav.Link as={Link} to="/contact"className="contactbutton"onClick={handleSelect}>
    Contact Us
  </Nav.Link>
</Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NewMenubar;
