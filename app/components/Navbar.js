import React from "react";
import Search from "./Search";
import { Collapse, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// To use props in class components, reference `this.props`
class Navigbar extends React.Component {
render() {

var style ={
    height: "50px",
      }

var logout ={
  margin: "5px 45px 0px 0px",
}

  return (
    <div>
    <Nav>
      <Navbar inverse collapseOnSelect style={style}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">NBA STATS</a>
          </Navbar.Brand>
        </Navbar.Header>
      <Nav>
        <Search/>
      </Nav>
      <Nav pullRight>
        <button className="btn text-center" style={logout}> <a href="/users/logout"> Logout </a> </button> 
      </Nav>
      </Navbar>
    </Nav>
     </div>
    );
  }
}

export default Navigbar;
