import React from "react";

import Navbar from "../Navbar";

// Import sub-components
import Gameinfo from "../children/Team/Gameinfo";
import Teamstats from "../children/Team/Teamstats";
import Roster from "../children/Team/Roster";
import Teaminfo from "../children/Team/Teaminfo";

// Helper Function
import helpers from "../utils/helpers";

class Team extends React.Component {

  constructor(props) {
    super();
// Creating the states that will be passed to the children:
//Roster and teamData is for team component 
    this.state = {
      roster: [],
     teamData: []
     };
  }

componentDidMount() {
// team data
    fetch("/api/team/" + this.props.params.teamInitials)
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => {
        console.log(data)
        this.setState({
          teamData: data,
        });
        console.log(this.state.teamData)
      });

    fetch('/api/roster/'  + this.props.params.teamInitials)
      .then((resp) => resp.json()) // Transform the data into json
      .then((data2) => {
        console.log(data2)
        this.setState({
          roster: data2,
        });
        console.log(this.state.roster)
      })
  }


  render() {
    console.log(this.props.params.teamInitials)
console.log(this.state.teamData)

//need to use react routers
return (

<div className="container"> 
      <Navbar/>
      <div className="col-md-3"> <Roster Roster={this.state.roster}/></div>
      <div className="col-md-5"> <Teaminfo Data={this.state.teamData}/></div>
      <div className="col-md-11"> <Teamstats Data={this.state.teamData}/></div>
</div>
    );
  }
}

// Export the component back for use in other files
export default Team;
