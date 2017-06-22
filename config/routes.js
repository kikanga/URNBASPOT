// Include the React library
import React from "react";
import router from "react-router"
// Include the react-router module
import { Router, Route, history, browserHistory } from 'react-router';

// Reference the high-level components
import Main from "../app/components/Main";
// import Home from "../components/parents/Home";
import Player from "../app/components/parents/Player";
import Team from "../app/components/parents/Team";
import User from "../app/components/parents/User";

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {/* If user selects Info or Chat show the appropriate component */}
    </Route>  
    <Route path="team" component={Team}> 
          <Route path="/team/:teamInitials" component={Team}> </Route>
      </Route>
      <Route path="players" component={Player}> 
        <Route path="/players/:PlayerID" component={Player}> </Route>
      </Route>
     <Route path="/users/logout"></Route>
  </Router>

);

