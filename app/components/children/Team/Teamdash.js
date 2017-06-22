import React from "react";
import { Panel } from 'react-bootstrap';

// To use props in class components, reference `this.props`
// this is going to be col-md-2 or 3, and xs-12
class Teamdash extends React.Component {
	
render() {
  return (
<div> 
    <Panel header="Teams">
     {this.props.Data.map(function(search, i) {
        return (           
      <a href={"/team"}>
      <Image src={search.image} rounded responsive />
      <p key={i}>{search.teamName2017}</p></a>
  );
          }.bind(this))}

    </Panel>
</div>
    );
  }
}

export default Teamdash;

