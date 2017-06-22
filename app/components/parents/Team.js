import React from "react";

// Import sub-components
import Gameinfo from "../children/Team/Gameinfo";
import Teamstats from "../children/Team/Teamstats";
import Roster from "../children/Team/Roster";
import Teaminfo from "../children/Team/Teaminfo";

// Helper Function
import helpers from "../utils/helpers";
import { Image, Panel } from 'react-bootstrap';

class Team extends React.Component {

  constructor(props) {
    super();
// Creating the states that will be passed to the children:
//Roster and teamData is for team component 
    this.state = {roster: []};
  }

componentDidMount() {
// team data
      fetch('/api/team')
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => {
        console.log(data)
        this.setState({
          teamData: data,
        });
        console.log(this.state.teamData)
      })
  }

  render() {

//need to use react routers
return (

<div> 
      <div className="col-md-2"> <Roster/></div>
      <div className="col-md-10"> <Teamstats/></div>
</div>
    );
  }
}

// Export the component back for use in other files
export default Team;
