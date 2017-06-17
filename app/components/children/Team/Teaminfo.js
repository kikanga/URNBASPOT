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
      title: "Team Name"
    };
}

render() {
  return (
  <div>
    <Panel header={this.state.title}>
<Image src="#" responsive />
 <ListGroup>
    <ListGroupItem header="Team Record">41-41</ListGroupItem>
    <ListGroupItem header="Team Record">41-41</ListGroupItem>
    <ListGroupItem header="Team Record">41-41</ListGroupItem>
    <ListGroupItem header="Team Website" href="#">www.team.com</ListGroupItem>
  </ListGroup>
    </Panel>
  </div>
);

  }
}

export default Teaminfo;
