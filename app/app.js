// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
var routes = require("../config/routes.js");

// Include the Main Component
import Main from "./components/Main";

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(routes, document.getElementById("app"));
