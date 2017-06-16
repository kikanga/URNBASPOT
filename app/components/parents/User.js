import React from "react";

// Import sub-components
import Navbar from "./Navbar";
import Following from "../children/User/Following";
import Userinfo from "../children/User/Userinfo";
// import TBD from "../children/User/TBD";
// Helper Function

import helpers from "./utils/helpers";

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      BLAHHHHH: ""
    };
    this.setTerm = this.setTerm.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  // }

  setTerm(term) {
    this.setState({
      BLAHHHHH: term
    });
  }

  render() {

//need to use react routers
return (

<div className="container">



</div>
    );
  }
}

// Export the component back for use in other files
export default xxxx;
