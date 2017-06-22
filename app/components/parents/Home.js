import React from "react";

// Import sub-components
import News from "../children/Home/News";
import Standings from "../children/Home/Standings";
import Upcoming from "../children/Home/Upcoming";

// Helper Function
import helpers from "./utils/helpers";

class Home extends React.Component {

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
export default Home;
