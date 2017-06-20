import React from "react";
import Search from "./Search";


import { Collapse, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// To use props in class components, reference `this.props`
class Navigbar extends React.Component {
render() {

var style ={
    height: "50px"
    }
  return (
    <div>
      <Navbar inverse collapseOnSelect style={style} className="container">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">NBA STATS</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Login   </NavItem>
            <Search />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     </div>
    );
  }
}

export default Navigbar;
