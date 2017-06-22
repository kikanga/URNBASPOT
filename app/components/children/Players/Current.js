import React from "react";
import { Image, Tabs, Tab, TabPane, Table} from 'react-bootstrap';


// To use props in class components, reference `this.props`
class Current extends React.Component {
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
<p className="text-center"> 2016-2017 Regular Season </p>
<Table responsive striped bordered condensed hover>

     <thead>
      <tr>
    <th>Season</th>
    <th>PPG</th>
    <th>APG</th>
    <th>RPG</th>
    <th>BPG</th>
    <th>SPG</th>
    <th>+/-</th>
    <th>GP</th>
    <th>MPG</th>
    <th>DRPG</th>
    <th>ORPG</th>
    <th>fgA</th>
    <th>fgM</th>
    <th>fgP</th>
    <th>ftA</th>
    <th>ftM</th>
    <th>ftP</th>
    <th>3pA</th>
    <th>3pM</th>
    <th>3pP</th>
    <th>TO</th>
    <th>FPG</th>


      </tr>
    </thead>
      {this.props.Data.map(function(search, i) {
        return (            
      
    <tbody>
      <tr>
    <td>{search.currentSeason}</td>
    <td>{search.currentPPG}</td>
    <td>{search.currentAPG}</td>
    <td>{search.currentRPG}</td>
    <td>{search.currentBPG}</td>
    <td>{search.currentSPG}</td>
    <td>{search.currentPlusMinus}</td>
    <td>{search.currentGP}</td>
    <td>{search.currentMPG}</td>
    <td>{search.currentDRPG}</td>
    <td>{search.currentORPG}</td>
    <td>{search.currentfgA}</td>
    <td>{search.currentfgM}</td>
    <td>{search.currentfgP}</td>
    <td>{search.currentftA}</td>
    <td>{search.currentftM}</td>
    <td>{search.currentftP}</td>
    <td>{search.current3pA}</td>
    <td>{search.current3pM}</td>
    <td>{search.current3pP}</td>
    <td>{search.currentTO}</td>
    <td>{search.currentFoulsPG}</td>


      </tr>
    </tbody>
    
          );
          }.bind(this))}

      <thead>
      <tr>
    <th>Playoffs</th>
    <th>PPG</th>
    <th>APG</th>
    <th>RPG</th>
    <th>BPG</th>
    <th>SPG</th>
    <th>GP</th>
    <th>GS</th>
    <th>MPG</th>
    <th>DRPG</th>
    <th>ORPG</th>
    <th>fgA</th>
    <th>fgM</th>
    <th>fgP</th>
    <th>ftA</th>
    <th>ftM</th>
    <th>ftP</th>
    <th>3pA</th>
    <th>3pM</th>
    <th>3pP</th>
    <th>TO</th>
    <th>FPG</th>
      </tr>
    </thead>

      {this.props.Data.map(function(search, i) {
        return (            
      
    <tbody>
      <tr>
    <td>{search.currentPlayoffSeason}</td>
    <td>{search.currentPlayoffPPG}</td>
    <td>{search.currentPlayoffAPG}</td>
    <td>{search.currentPlayoffRPG}</td>
    <td>{search.currentPlayoffBPG}</td>
    <td>{search.currentPlayoffSPG}</td>
    <td>{search.currentPlayoffGP}</td>
    <td>{search.currentPlayoffgamesStarted}</td>    
    <td>{search.currentPlayoffMPG}</td>
    <td>{search.currentPlayoffDRPG}</td>
    <td>{search.currentPlayoffORPG}</td>
    <td>{search.currentPlayofffgA}</td>
    <td>{search.currentPlayofffgM}</td>
    <td>{search.currentPlayofffgP}</td>
    <td>{search.currentPlayoffftA}</td>
    <td>{search.currentPlayoffftM}</td>
    <td>{search.currentPlayoffftP}</td>
    <td>{search.currentPlayoff3pA}</td>
    <td>{search.currentPlayoff3pM}</td>
    <td>{search.currentPlayoff3pP}</td>
    <td>{search.currentPlayoffTO}</td>
    <td>{search.currentPlayoffFoulsPG}</td>

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

      <th>RPGRank</th>
      <th>APGRank</th>
      <th>PPGRank</th>
      <th>WinPercentageRank</th>
      <th>LossRank</th>
      <th>WinRank</th>
      <th>FoulsPGDrawnRank</th>
      <th>FoulsPGDrawn</th>
      <th>FoulsPGRank</th>
      <th>FoulsPG</th>
      <th>WinPercentage</th>

    </tr>
  </thead>
            {this.props.Data.map(function(search, i) {
        return (            
    <tbody>
            <tr>
        <td>{search.currentPER}</td>
        <td>{search.currentVORP}</td>
        <td>{search.currentBPM}</td>
        <td>{search.currentOBPM}</td>
        <td>{search.currentDBPM}</td>
        <td>{search.currentWS}</td>
        <td>{search.currentOWS}</td>
        <td>{search.currentDWS}</td>
        <td>{search.currentftr}</td>
        <td>{search.current3par}</td>
        <td>{search.currentUSGP}</td>
        <td>{search.currentASTP}</td>
        <td>{search.currentSTLP}</td>
        <td>{search.currentBLKP}</td>
        <td>{search.currentTOVP}</td>
        <td>{search.currentTRBP}</td>
        <td>{search.currentORBP}</td>
        <td>{search.currentDRBP}</td>
        <td>{search.currentTSP}</td>
        <td>{search.currenteffectiveFGP}</td>

        <td>{search.currentRPGRank}</td>
        <td>{search.currentAPGRank}</td>
        <td>{search.currentPPGRank}</td>
        <td>{search.currentWinPercentageRank}</td>
        <td>{search.currentLossRank}</td>
        <td>{search.currentWinRank}</td>
        <td>{search.currentFoulsPGDrawnRank}</td>
        <td>{search.currentFoulsPGDrawn}</td>
        <td>{search.currentFoulsPGRank}</td>
        <td>{search.currentFoulsPG}</td>
        <td>{search.currentWinPercentage}</td>

        </tr>
        </tbody>
                  );
          }.bind(this))}
    </Table>
    </Tab>
      </Tabs>

    <div>
      {this.props.Data.map(function(search, i) {
        return (            
      <div key={i}>
              <Image src={search.heatmaps} />
      </div>
          );
          }.bind(this))}
  </div>

    </div>
    );
  }
}
export default Current;
