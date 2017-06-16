import React from "react";

// Import sub-components
import Navbar from "./Navbar";
import Current from "../children/Players/Current";
import General from "../children/Players/General";
import Playoffs from "../children/Players/Playoffs";
import Previous from "../children/Players/Previous";
import Shotchart from "../children/Players/Upcoming";

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
      <div className="col-md-4"> <General />
        <div className="col-md-8"> <Previous />
        </div> 
      </div>
      <div className="col-md-4"> <Shot Chart />
        <div className="col-md-8"> <Playoffs />
        </div> 
      </div>


</div>
    );
  }
}

// Export the component back for use in other files
export default xxxx;
