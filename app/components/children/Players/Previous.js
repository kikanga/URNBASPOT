import React from "react";
import { Tabs, Tab, TabPane, Table} from 'react-bootstrap';


// To use props in class components, reference `this.props`
class Previous extends React.Component {
  constructor(props) {
    super(props);
	    this.state ={
	      key: 2
	  }

	  this.handleSelect = this.handleSelect.bind(this)

  }
	  handleSelect(key) {
	  	console.log("Clicked")
	    this.setState({key});
	  }

  render() {
    return (
      <div>
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="Traditional">

<Table responsive striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>

      </tr>      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>

      </tr>      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>

      </tr>
      
    </tbody>
  </Table>    

        </Tab>
        <Tab eventKey={2} title="Advanced">
         <Table hover responsive>
					        <thead>
					          <tr>
					            <th>#</th>
					            <th>Name</th>
					            <th>PER</th>
					            <th>Offensive Efficiency</th>
					            <th>Defensive Efficiency</th>
					            <th>Stat</th>
					            <th>Stat</th>
					            <th>Stat</th>
					            <th>Stat</th>
					            <th>Stat</th>
					            <th>Stat</th>
					            <th>Stat</th>
					            <th>Stat</th>
					            <th>Stat</th>
					            <th>Stat</th>
					            <th>Stat</th>
					          </tr>
					        </thead>
					        <tbody>
					          <tr>
					            <th scope="row">1</th>
					            <td>LBJ</td>
					            <td>LBJ</td>
					            <td>LBJ</td>
					            <td>LBJ</td>
					            <td>LBJ</td>
					            <td>LBJ</td>
					            <td>LBJ</td>
					            <td>LBJ</td>
					            <td>LBJ</td>
					            <td>LBJ</td>
					            <td>LBJ</td>
					            <td>LBJ</td>
					            <td>LBJ</td>
					            <td>LBJ</td>
					            <td>LBJ</td>
					          </tr>
					         </tbody>
					  </Table>
					  </Tab>
      </Tabs>

    </div>
    );
  }
}

export default Previous;
