import React from "react";
import { Switch, BrowserRouter } from 'react-router-dom'

var router = require("react-router");
var Link = require("react-router").Link;

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Import sub-components
import Navbar from "./Navbar";
// import Home from "./parents/Home";
// import User from "./parents/User";

import Player from "./parents/Player";
import Team from "./parents/Team";

import Previous from "./children/Players/Previous";
import General from "./children/Players/General";
import Current from "./children/Players/Current";

import Roster from "./children/Team/Roster";
import Teamdash from "./children/Team/Teamdash";
import Teamstats from "./children/Team/Teamstats";


import Standings from "./children/Home/Standings";

import helpers from "./utils/helpers.js";

class Main extends  React.Component {

  constructor(props) {
    super();
// Creating the states that will be passed to the children:
//Roster and teamData is for team component 
    this.state = { name: "", playerID: "", playerData: [], roster: [], teamData: [], standings:[], east: [], west: [] };
    // this.setTerm = this.setTerm.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

componentDidMount() {

  // team data
        fetch('/api/team/wPct2017')
        .then((resp) => resp.json()) // Transform the data into json
        .then((data) => {
          console.log(data)
          this.setState({
            standings: data,
          });
          console.log(this.state.standings)
        })

        fetch('/api/team/east')
        .then((resp) => resp.json()) // Transform the data into json
        .then((data) => {
          console.log(data)
          this.setState({
            east: data,
          });
          console.log(this.state.east)
        })

       fetch('/api/team/west')
        .then((resp) => resp.json()) // Transform the data into json
        .then((data) => {
          console.log(data)
          this.setState({
            west: data,
          });
          console.log(this.state.west)
        })
  }

  handleClick (event) {
    event.preventDefault()
    // Set the parent to have the search term
    this.setState({
      playerID: event.target.value 
    });
  }

  setTerm(term) {
    this.setState({
      playerID: ID 
    });
  }


  render() {

//need to use react routers
return (
 

<div className="container">
<Navbar/>
<br></br>
<br></br>
<div>
<span className="col-md-7"> <a className="twitter-timeline" data-height="600" data-theme="dark" href="https://twitter.com/NBA">Tweets by NBA</a> </span>
<span className="col-md-4"> <Standings All={this.state.standings} East={this.state.east} West={this.state.west}/> </span>
  
  </div>
</div>

    );
  } 
}

// Export the componen back for use in other files
export default Main;