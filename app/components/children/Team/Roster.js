import React from "react";
import { Panel } from 'react-bootstrap';

// To use props in class components, reference `this.props`
// this is going to be col-md-2 or 3, and xs-12
class Roster extends React.Component {

	constructor(props) {
    super();
// Creating the states that will be passed to the children:
//Roster and teamData is for team component 
    this.state = {roster: []};
  }
	  componentDidMount() {
// team roster from players db
      // fetch('/api/roster'  + this.props.params.teamInitials)
      // .then((resp) => resp.json()) // Transform the data into json
      // .then((data) => {
      //   console.log(data)
      //   this.setState({
      //     roster: data,
      //   });
      //   console.log(this.state.roster)
      // })
  }

render() {
      console.log(this.props.RosterData)

  return (
<div> 
    <Panel header="Team Roster">
     {this.props.Roster.map(function(search, i) {
        return (           
      <a href={"/players/" + search.PlayerID}>
      <p key={i}>{search.name}</p></a>
  );
          }.bind(this))}

    </Panel>
</div>
    );
  }
}

export default Roster;

