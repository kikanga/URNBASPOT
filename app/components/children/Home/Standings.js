import React from "react";
import { Tabs, Tab, TabPane, Table, Panel} from 'react-bootstrap';

// To use props in class components, reference `this.props`
class Standings extends React.Component {
  constructor(props) {
    super(props);
	    this.state ={
	      key: 1
	  }

	  this.handleSelect = this.handleSelect.bind(this)

  }
	  handleSelect(key) {
	    this.setState({key});
	  }

  render() {
    return (
      <div className="text-center">
       <Panel> 
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="West">

<Table responsive bordered condensed hover>
    <thead>
      <tr>
        <th>Team</th>
        <th>Record</th>
        <th>Win %</th>
      </tr>
    </thead>
    <tbody>

     {this.props.West.map(function(search, i) {
        return (         
      <tr key={i}>
        <td><a href={"/team/" + search.teamInitials}>{search.teamInitials}</a></td>
        <td>{search.w2017} - {search.l2017}</td>
        <td>{search.wPct2017}</td>
      </tr>  

          );
          }.bind(this))}
     </tbody>
      
  </Table>    
   </Tab>
        <Tab eventKey={2} title="East">
<Table responsive bordered condensed hover>
    <thead>
      <tr>
        <th>Team</th>
        <th>Record</th>
        <th>Win %</th>
      </tr>
    </thead>
    <tbody>

     {this.props.East.map(function(search, i) {
        return (         
      <tr key={i}>
        <td><a href={"/team/" + search.teamInitials}>{search.teamInitials}</a></td>
        <td>{search.w2017} - {search.l2017}</td>
        <td>{search.wPct2017}</td>
      </tr>  

          );
          }.bind(this))}
           </tbody>
  </Table>    
   </Tab>

   <Tab eventKey={3} title="All">
<Table responsive bordered condensed hover>
    <thead>
      <tr>
        <th>Team</th>
        <th>Record</th>
        <th>Win %</th>
      </tr>
    </thead>
    <tbody>

     {this.props.All.map(function(search, i) {
        return (         
      <tr key={i}>
        <td><a href={"/team/" + search.teamInitials}>{search.teamInitials}</a></td>
        <td>{search.w2017} - {search.l2017}</td>
        <td>{search.wPct2017}</td>
      </tr>  

          );
          }.bind(this))}
      
    </tbody>
  </Table>    
   </Tab>
      </Tabs>
</Panel>
    </div>
    );
  }
}

export default Standings;
