// Include the React library
import React from "react";

// Include the react-router module
import router from "react-router";

// Include the Route component for displaying individual routes
import { Route } from 'react-router';

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var browserHistory = router.browserHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
import Main from "../components/Main";
import Home from "../components/parents/Home";
import Player from "../components/parents/Player";
import Team from "../components/parents/Team";
import User from "../components/parents/User";

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Info or Chat show the appropriate component */}
      <Route path="players" component={Player}> 

      </Route> 
      <Route path="team" component={Team}>     </Route>
      <Route path="team" component={User}>     </Route>

    </Route>
  </Router>

);