import React from "react";
import { Tabs, Tab, TabPane, Table} from 'react-bootstrap';

// To use props in class components, reference `this.props`
// Copied this from my MERN. Will need to be adjusted but nice to have with the .map functionality.
class Teamstats extends React.Component {

    constructor(props) {
    super();
// Creating the states that will be passed to the children:
//Roster and teamData is for team component 
      this.state ={ key: 1, teamData: []};

    this.handleSelect = this.handleSelect.bind(this)

  }
      handleSelect(key) {
      this.setState({key});
    }

  componentDidMount() {
// team data
      fetch('/api/team')
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => {
        console.log(data)
        this.setState({
          teamData: data,
        });
        console.log(this.state.teamData)
      })
  }

  render() {
    return (
      <div>
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="Traditional">
<p className="text-center"> 2016-2017 Regular Season </p>
<Table responsive striped bordered condensed hover>

     <thead>
      <tr>
    <th>PPG</th>
    <th>FG Made</th>
    <th>FG Attempt</th>
    <th>FG %</th>
    <th>3pM</th>
    <th>3pA</th>
    <th>3pP</th>
    <th>ftM</th>
    <th>ftA</th>
    <th>ftP</th>
    <th>ORPG</th>
    <th>DRPG</th>
    <th>RPG</th>
    <th>APG</th>
    <th>TO</th>
    <th>SPG</th>
    <th>BPG</th>
    <th>BAPG</th>
    <th>FPG</th>
    <th>FDPG</th>
    <th>+/-</th>


      </tr>
    </thead>
      {this.state.teamData.map(function(search, i) {
        return (            
      
    <tbody>
      <tr>
    <td>{search.pts2017}</td>
    <td>{search.fgm2017}</td>
    <td>{search.fga2017}</td>
    <td>{search.fgPct2017}</td>
    <td>{search.fg3M2017}</td>
    <td>{search.fg3A2017}</td>
    <td>{search.fg3Pct2017}</td>
    <td>{search.ftm2017}</td>
    <td>{search.fta2017}</td>
    <td>{search.ftPct2017}</td>
    <td>{search.oreb2017}</td>
    <td>{search.dreb2017}</td>
    <td>{search.reb2017}</td>
    <td>{search.ast2017}</td>
    <td>{search.tov2017}</td>
    <td>{search.stl2017}</td>
    <td>{search.blk2017}</td>
    <td>{search.blka2017}</td>
    <td>{search.pf2017}</td>
    <td>{search.pfd2017}</td>
    <td>{search.plusMinus2017}</td>


      </tr>
    </tbody>
    
          );
          }.bind(this))}

      <thead>
      <tr>

    <th>PPG</th>
    <th>BPG</th>
    <th>SPG</th>
    <th>APG</th>
    <th>RPG</th>
    <th>DRPG</th>
    <th>ORPG</th>
    <th>FPG</th>
    <th>TO</th>
    <th>ftP</th>
    <th>ftA</th>
    <th>ftM</th>
    <th>3pP</th>
    <th>3pA</th>
    <th>3pM</th>
    <th>fgP</th>
    <th>fgA</th>
    <th>fgM</th>
    <th>GP</th>
      </tr>
    </thead>

      {this.state.teamData.map(function(search, i) {
        return (            
      
    <tbody>
      <tr>
    <td>{search.PPGPlayoffs2017}</td>
    <td>{search.BPGPlayoffs2017}</td>
    <td>{search.SPGPlayoffs2017}</td>
    <td>{search.APGPlayoffs2017}</td>
    <td>{search.RPGPlayoffs2017}</td>
    <td>{search.DRPGPlayoffs2017}</td>
    <td>{search.ORBPlayoffs2017}</td>
    <td>{search.PFPlayoffs2017}</td>
    <td>{search.TOVPlayoffs2017}</td>
    <td>{search.FTPPlayoffs2017}</td>
    <td>{search.FTAPlayoffs2017}</td>
    <td>{search.FTMPlayoffs2017}</td>
    <td>{search.fg3PctPlayoffs2017}</td>
    <td>{search.fg3aPlayoffs2017}</td>
    <td>{search.fg3mPlayoffs2017}</td>
    <td>{search.FGPctPlayoffs2017}</td>
    <td>{search.FGAPlayoffs2017}</td>
    <td>{search.FGMPlayoffs2017}</td>
    <td>{search.GPPlayoffs2017}</td>

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
      <th>PER</th>
      <th>VORP</th>
      <th>BPM</th>
      <th>OBPM</th>
      <th>DBPM</th>
      <th>WS</th>
      <th>OWS</th>
      <th>DWS</th>
      <th>ftr</th>
      <th>3par</th>
      <th>USGP</th>
      <th>ASTP</th>
      <th>STLP</th>
      <th>BLKP</th>
      <th>TOVP</th>
      <th>TRBP</th>
      <th>ORBP</th>
      <th>DRBP</th>
      <th>TSP</th>
      <th>EFGP</th>

    </tr>
  </thead>
           
    </Table>
    </Tab>
      </Tabs>

    </div>
    );
  }
}

export default Teamstats;
