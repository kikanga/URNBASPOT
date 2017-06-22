import React from "react";

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
      teamData: "X"
    };
    this.setTerm = this.setTerm.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  // }



componentDidMount() {
//     fetch('/api/players')
//       .then((resp) => resp.json()) // Transform the data into json
//       .then((data) => {
//         console.log(data)
//         this.setState({
//           playerData: data,
//         });
//         console.log(this.state.playerData)
//       });

 this.setState({
          teamData: this.props.Data,
        });
  }

  setTerm(term) {
    this.setState({
      BLAHHHHH: term
    });
  }

  render() {
        console.log(this.props.Data)


//need to use react routers
return (

<div className="container">
      <div className="col-md-12"> <General Data={this.state.playerData}/></div>
      <div className="col-md-12"> <Current Data={this.state.playerData}/></div>
      <div className="col-md-12"> <Previous Data={this.state.playerData}/></div>
      <div className="col-md-12"> <Playoffs Data={this.state.playerData}/></div>
      <div className="col-md-12"> <Shotchart Data={this.state.playerData}/></div>
</div>
    );
  }
}

// Export the component back for use in other files
export default Player;
