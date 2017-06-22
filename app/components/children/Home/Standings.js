import React from "react";
import { Tabs, Tab, TabPane, Table} from 'react-bootstrap';

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
      <div>
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="West">

<Table responsive bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Team</th>
        <th>Record</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>SAS</td>
        <td>62-20</td>
      </tr>      
      <tr>
        <td>2</td>
        <td>LAL</td>
        <td>0-82</td>   
      </tr>
      
    </tbody>
  </Table>    
   </Tab>
        <Tab eventKey={2} title="East">
<Table responsive bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Team</th>
        <th>Record</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>CLE</td>
        <td>61-21</td>
      </tr>      
      <tr>
        <td>2</td>
        <td>NYK</td>
        <td>1-81</td>   
      </tr>
      
    </tbody>
  </Table>    
   </Tab>

   <Tab eventKey={3} title="All">
<Table responsive bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Team</th>
        <th>Record</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>SAS</td>
        <td>62-20</td>
      </tr>  
       <tr>
        <td>2</td>
        <td>CLE</td>
        <td>61-21</td>
      </tr>  
      <tr>
        <td>3</td>
        <td>NYK</td>
        <td>1-81</td>   
      </tr>       
      <tr>
        <td>4</td>
        <td>LAL</td>
        <td>0-82</td>   
      </tr>
      
    </tbody>
  </Table>    
   </Tab>
      </Tabs>

    </div>
    );
  }
}

export default Standings;
