import React from "react";
import { Panel, Image, ListGroup, ListGroupItem} from 'react-bootstrap';


// To use props in class components, reference `this.props`
class Teaminfo extends React.Component {

  constructor(props) {
    super();
    // If we are assigning an object property to an existing variable with the same name,
    // we can use this shorthand assignment syntax
    // Notice the data property here and the data const defined above the component
    this.state = {
      title: ""
    };
}

render() {
  return (
  <div>

     {this.props.Data.map(function(search, i) {
        return (           
     
    <Panel header={search.teamName2017}> 
<Image src={search.image} rounded responsive />
 <ListGroup>
    <p>Team Record: {search.w2017}-{search.l2017}</p>
    <p>Winning %: {search.wPct2017}</p>
    <p href={search.website}>Team Website: {search.website}</p>
  </ListGroup>
    </Panel>
  
  );
        }.bind(this))}
  </div>

);

  }
}

export default Teaminfo;
