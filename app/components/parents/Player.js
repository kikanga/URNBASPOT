import React from "react";

import Navbar from "../Navbar";

// Import sub-components
import Current from "../children/Players/Current";
import General from "../children/Players/General";
import Playoffs from "../children/Players/Playoffs";
import Previous from "../children/Players/Previous";
import Shotchart from "../children/Players/Shotchart";

// Helper Function
import helpers from "../utils/helpers";

class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playerData: []
    };
  }


componentDidMount() {
    fetch("/api/players/" + this.props.params.PlayerID)
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => {
        console.log(data)
        this.setState({
          playerData: data,
        });
        console.log(this.state.playerData)
      });
 // this.setState({
 //          teamData: this.props.Data,
 //        });
 //  }

  // setTerm(term) {
  //   this.setState({
  //     BLAHHHHH: term
  //   });
  }

  render() {
        console.log(this.state.playerData)
        console.log(this.props)


//need to use react routers
return (

<div className="container">
<Navbar/>
      <div className="col-md-12"> <General Data={this.state.playerData}/></div>
      <div className="col-md-12"> <Current Data={this.state.playerData}/></div>
      <div className="col-md-12"> <Previous Data={this.state.playerData}/></div>
</div>
    );
  }
}

// Export the component back for use in other files
export default Player;
