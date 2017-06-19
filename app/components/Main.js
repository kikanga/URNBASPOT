import React from "react";

// Import sub-components
import Navbar from "./Navbar";
// import Home from "./parents/Home";
// import Player from "./parents/Player";
// import Team from "./parents/Team";
// import User from "./parents/User";
import Previous from "./children/Players/Previous";
import Teaminfo from "./children/Team/Teaminfo";
import Roster from "./children/Team/Roster";
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

class Main extends  React.Component {

  constructor(props) {
    super();
    // If we are assigning an object property to an existing variable with the same name,
    // we can use this shorthand assignment syntax
    // Notice the data property here and the data const defined above the component
    this.state = { name: "", playerID: "", playerData: []};
    // this.setTerm = this.setTerm.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount(playerID) {

  // }

  componentDidUpdate() {
    helpers.getPlayer(this.state.playerID).then(function (response) {
    console.log(response);
    this.setState({name: response.data})
    }.bind(this));
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

<Navbar> </Navbar> 
<div className="col-md-12"> <button value="2544" ID="2544" onClick={this.handleClick}> LBJ </button> <Previous Name={this.state.name}/></div>
<div className="col-md-2"> <Roster /></div>
<div className="col-md-7"> <Teaminfo /></div>
<div className="col-md-3"> <Standings /></div>


</div> 
    );
  }
}

// Export the componen back for use in other files
export default Main;
