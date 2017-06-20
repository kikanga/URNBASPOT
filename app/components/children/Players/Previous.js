import React from "react";
import { Tabs, Tab, TabPane, Table} from 'react-bootstrap';


// To use props in class components, reference `this.props`
class Previous extends React.Component {
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
        <Tab eventKey={1} title="Traditional">
<button value="2544" ID="2544"> LBJ </button> 
<Table responsive striped bordered condensed hover>

     <thead>
      <tr>
		<th>PPG</th>
		<th>APG</th>
		<th>RPG</th>
		<th>+/-</th>
		<th>GP</th>
		<th>Season</th>
		<th>MPG</th>
		<th>DRPG</th>
		<th>ORPG</th>
		<th>fgA</th>
		<th>fgM</th>
		<th>fgP</th>
		<th>3pA</th>
		<th>3pM</th>
		<th>3pP</th>
		<th>BPG</th>
		<th>SPG</th>
		<th>TORank</th>
		<th>TO</th>
      </tr>
    </thead>
      {this.props.Data.map(function(search, i) {
        return (            
      
    <tbody>
      <tr>
		<td>{search.currentPPG}</td>
		<td>{search.currentAPG}</td>
		<td>{search.currentRPG}</td>
		<td>{search.currentPlusMinus}</td>
		<td>{search.currentGP}</td>
		<td>{search.currentSeason}</td>
		<td>{search.currentMPG}</td>
		<td>{search.currentDRPG}</td>
		<td>{search.currentORPG}</td>
		<td>{search.currentfgA}</td>
		<td>{search.currentfgM}</td>
		<td>{search.currentfgP}</td>
		<td>{search.current3pA}</td>
		<td>{search.current3pM}</td>
		<td>{search.current3pP}</td>
		<td>{search.currentBPG}</td>
		<td>{search.currentSPG}</td>
		<td>{search.currentTORank}</td>
		<td>{search.currentTO}</td>
      </tr>
    </tbody>
    
          );
          }.bind(this))}
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


// currentGamesPlayedRank
// currentGamesPlayed
// currentPlusMinusRank
// currentftARank
// currentftMRank
// currentftPRank
// currentftA
// currentftM
// currentftP
// currentMPGRank
// currentDRPGRank
// currentORPGRank
// currentfgARank
// currentfgMRank
// currentfgPRank
// current3pARank
// current3pMRank
// current3pPRank
// currentBPGRank
// currentSPGRank
// currentRPGRank
// currentAPGRank
// currentPPGRank
// currentWinPercentageRank
// currentLossRank
// currentWinRank
// currentFoulsPGDrawnRank
// currentFoulsPGDrawn
// currentFoulsPGRank
// currentFoulsPG
// currentWinPercentage
// currentLosses
// currentWins






// currentPPG
// currentAPG
// currentRPG
// currentPlusMinus
// currentGP
// currentSeason
// currentMPG
// currentDRPG
// currentORPG
// currentfgA
// currentfgM
// currentfgP
// current3pA
// current3pM
// current3pP
// currentBPG
// currentSPG
// currentTORank
// currentTO

