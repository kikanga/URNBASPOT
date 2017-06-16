import React from "react";

// Import sub-components
import Navbar from "./Navbar";
import Gameinfo from "../children/Team/Gameinfo";
import News from "../children/Team/News";
import Roster from "../children/Team/Roster";
import Teaminfo from "../children/Team/Teaminfo";

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
