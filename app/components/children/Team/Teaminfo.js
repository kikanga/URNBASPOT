import React from "react";
import { Panel, Image, ListGroup, ListGroupItem} from 'react-bootstrap';


// To use props in class components, reference `this.props`
class Teaminfo extends React.Component {

 constructor(props) {
    super();
// Creating the states that will be passed to the children:
//Roster and teamData is for team component 
    this.state = { teamData: []};

  }

componentDidMount() {
// team data
      //  fetch('/api/team/' + this.props.params.teamInitials)
      // .then((resp) => resp.json()) // Transform the data into json
      // .then((data) => {
      //   console.log(data)
      //   this.setState({
      //     teamData: data,
      //   });
      //   console.log(this.state.teamData)
      // })
  }
render() {
  return (
  <div className="text-center">
     {this.props.Data.map(function(search, i) {
        return (           
     
    <Panel header={search.teamName2017}> 
<Image style={{width: 300, height: 300, margin: "auto"}} src={search.image} rounded responsive />
 <ListGroup>
 <br></br>
    <p>Team Record: {search.w2017}-{search.l2017}</p>
    <p>Winning %: {search.wPct2017}</p>
    <p>Team Website: <a href={search.website}>{search.website}</a> </p>
  </ListGroup>
    </Panel>
  
  );
        }.bind(this))}
  </div>

);

  }
}

export default Teaminfo;


