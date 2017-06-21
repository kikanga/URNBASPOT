import React from "react";
import { Panel } from 'react-bootstrap';

// To use props in class components, reference `this.props`
// this is going to be col-md-2 or 3, and xs-12
class Roster extends React.Component {
render() {
  return (

<div> 
    <Panel header="Team Roster">
     {this.props.Data.map(function(search, i) {
        return (           
     	<a href={"/players/" + search.PlayerID}><p key={i}>{search.name}</p></a>
  );
          }.bind(this))}

    </Panel>
</div>
    );
  }
}

export default Roster;
