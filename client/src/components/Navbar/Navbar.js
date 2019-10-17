import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button, Image } from "react-bootstrap";
import logo_placeholder from "../../images/placeholder.com-logo1.png";

/* -------------------------------------------------------------------------- */
/*                                   Styling                                  */
const logoStyle = {
  display: "flex",
  marginRight: "10px",
  marginBottom: "10px",
  width: "20vh",
  float: "left"
};
/* 

-------------------------------------------------------------------------- */

class MainNavbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="sm">
        <Navbar.Brand href="#home">
          <Image
            src={logo_placeholder}
            className="logo"
            alt="Up To Speed Logo"
            style={logoStyle}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavbar;
