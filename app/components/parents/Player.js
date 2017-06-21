import React from "react";

// Import sub-components
// import Current from "../children/Players/Current";
// import General from "../children/Players/General";
// import Playoffs from "../children/Players/Playoffs";
// import Previous from "../children/Players/Previous";
import Shotchart from "../children/Players/Shotchart";

// Helper Function
import helpers from "../utils/helpers";

class Player extends React.Component {

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
     
      <div className="col-md-4"> <Shotchart />
      

</div>
</div>
    );
  }
}

// Export the component back for use in other files
export default Player;
