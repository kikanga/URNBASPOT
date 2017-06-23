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
      <Navbar inverse collapseOnSelect style={style}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">NBA STATS</a>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav pullRight>
            <button className="btn text-center"> <a href="/users/logout"> Logout </a> </button> 
            <Search />
          </Nav>
      </Navbar>
     </div>
    );
  }
}

export default Navigbar;
