import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  return (
    <div>
      {" "}
      <Navbar
        collapseOnSelect
        fixed="top"
        className="topNavbar"
        expand="md"
        bg="dark"
        variant="dark"
      >
        <Container>
          <div className="scmpLogoNavbar">
            <Nav.Link className="SCMP1" eventKey="0" as={Link} to="/">
              SCMP
            </Nav.Link>
          </div>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {/*    <Nav.Link
             className= {currenturl=="/Services"?"isSelected":""} href="/Services"
            >
              SERVICES
            </Nav.Link> */}
              {/* <Nav.Link href="/Work">WORK</Nav.Link> */}
              <Nav.Link className={"navlink"} eventKey="1" as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link
                className={"navlink"}
                eventKey="2"
                as={Link}
                to="/Departments"
              >
                Departments
              </Nav.Link>
              <Nav.Link
                className={"navlink"}
                eventKey="3"
                as={Link}
                to="/Events"
              >
                Events
              </Nav.Link>
              <Nav.Link className={"navlink"} eventKey="4" as={Link} to="/auth">
                LogIn
              </Nav.Link>
              {/*  <Nav.Link className={'navlink'}  to={{ pathname:"scmp-lb.com/webmail"}}>Staff Mail</Nav.Link> */}
              {/*  <Nav.Link href="/Resources">RESOURCES</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
