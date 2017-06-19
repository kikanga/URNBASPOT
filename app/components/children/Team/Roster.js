import React from "react";
import { Panel } from 'react-bootstrap';

// To use props in class components, reference `this.props`
// this is going to be col-md-2 or 3, and xs-12
class Roster extends React.Component {
render() {
  return (

<div> 
    <Panel header="Team Roster">
     	<p>Player1</p>
     	<p>Player2</p>
     	<p>Player3</p>
     	<p>Player4</p>
     	<p>Player5</p>
     	<p>Player6</p>
     	<p>Player7</p>
     	<p>Player8</p>
     	<p>Player9</p>
     	<p>Player10</p>
    </Panel>
</div>
    );
  }
}

export default Roster;
