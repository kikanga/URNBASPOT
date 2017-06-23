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
    <div className="container-fluid">
      <Navbar inverse collapseOnSelect style={style}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">NBA STATS</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
          </Nav>
          <Nav pullRight>
          <span>
            <Search />
            <button className="btn"> <a href="/users/logout"> Logout </a> </button> 
          </span>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     </div>
    );
  }
}

export default Navigbar;
