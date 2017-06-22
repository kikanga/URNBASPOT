import React from "react";
import { Switch, BrowserRouter } from 'react-router-dom'

var router = require("react-router");

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
import Teaminfo from "./children/Team/Teaminfo";
import Teamstats from "./children/Team/Teamstats";


import Standings from "./children/Home/Standings";

import helpers from "./utils/helpers.js";

 // // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
 //      <Route path="/" Component={Home}> </Route>
 //      ______________
 //      <Route path="/player/:id" Component={Player}> </Route>
 //      __________
 //      <Route path="/team" Component={Team}> </Route>
 //      __________
 //      <Route path="/user" Component={User}> </Route>
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// <div className="col-md-2"> <Roster /></div>
// <div className="col-md-7"> <Teaminfo /></div>
// <div className="col-md-3"> <Standings /></div>
// <div className="col-md-12"> <button value="2544" ID="2544" onClick={this.handleClick}> LBJ </button> <Previous Name={this.state.playerData}/></div>


class Main extends  React.Component {

  constructor(props) {
    super();
// Creating the states that will be passed to the children:
//Roster and teamData is for team component 
    this.state = { name: "", playerID: "", playerData: [], roster: [], teamData: []};
    // this.setTerm = this.setTerm.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

componentDidMount() {
//     fetch('/api/players')
//       .then((resp) => resp.json()) // Transform the data into json
//       .then((data) => {
//         console.log(data)
//         this.setState({
//           playerData: data,
//         });
//         console.log(this.state.playerData)
//       });

// // team roster from players db
//       fetch('/api/roster')
//       .then((resp) => resp.json()) // Transform the data into json
//       .then((data) => {
//         console.log(data)
//         this.setState({
//           roster: data,
//         });
//         console.log(this.state.roster)
//       })

// team data
      fetch('/api/team')
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => {
        console.log(data)
        this.setState({
          teamData: data,
        });
        console.log(this.state.teamData)
      })
  }

  componentDidUpdate() {
    // // After button is clicked (handleclick func), we run this function to go to the api and grab that player by ID
    // helpers.getPlayer(this.state.playerID).then(function (response) {
    // console.log(response);
    // // set the state to the data recieved and then it will be passed down.
    // this.setState({playerData: response.data})
    // console.log("here")
    // }.bind(this));

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
      <div> <Team /></div>
</div>

    );
  } 
}

// Export the componen back for use in other files
export default Main;

// <BrowserRouter>
// <div>

//  <Route path="/team" component={() => (<Team Data={this.state.teamData} />)}> </Route>
//   </div>
// </BrowserRouter>




 // <Route path="/player/:PlayerID" Component={Player}> </Route>
 // <Route path="/team" Component={Team}> </Route>
 // <Route path="/user" Component={User}> </Route>


  //   updateText(event) {
  //   this.setState({
  //     name: event.target.value
  //   });
  // }

  // render() {
  //   var filtered = this.state.playerData.filter((data) => {
  //     if (data.name.toLowerCase().indexOf(this.state.name.toLowerCase()) != -1)
  //       return true;
  //     else
  //       return false;
  //   });

 // <div>
 //        <input
 //          type="text"
 //          placeholder="search"
 //          value={this.state.name}
 //          onChange={this.updateText}
 //        />

 //        <ul>
 //        {
 //          filtered.map((data) => {
 //            return (
 //              <p key={data.PlayerID} value={data.PlayerID} obj={data.name}> {data.name} </p>
 //            );
 //          })
 //        }
 //        </ul>
 //      </div>