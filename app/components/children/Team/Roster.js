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
      fetch('/api/roster')
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => {
        console.log(data)
        this.setState({
          roster: data,
        });
        console.log(this.state.roster)
      })
  }

render() {
  return (
<div> 
    <Panel header="Team Roster">
     {this.state.roster.map(function(search, i) {
        return (           
      <a href={"/player"}>
      <p key={i}>{search.name}</p></a>
  );
          }.bind(this))}

    </Panel>
</div>
    );
  }
}

export default Roster;

