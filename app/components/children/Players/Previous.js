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
		<td>{search.lastSeason}</td>
		<td>{search.lastPPG}</td>
		<td>{search.lastAPG}</td>
		<td>{search.lastRPG}</td>
		<td>{search.lastBPG}</td>
		<td>{search.lastSPG}</td>
		<td>{search.lastGP}</td>
		<td>{search.lastgamesStarted}</td>		
		<td>{search.lastMPG}</td>
		<td>{search.lastDRPG}</td>
		<td>{search.lastORPG}</td>
		<td>{search.lastfgA}</td>
		<td>{search.lastfgM}</td>
		<td>{search.lastfgP}</td>
		<td>{search.lastftA}</td>
		<td>{search.lastftM}</td>
		<td>{search.lastftP}</td>
		<td>{search.last3pA}</td>
		<td>{search.last3pM}</td>
		<td>{search.last3pP}</td>
		<td>{search.lastTO}</td>
		<td>{search.lastFoulsPG}</td>



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
		<td>{search.lastPlayoffSeason}</td>
		<td>{search.lastPlayoffPPG}</td>
		<td>{search.lastPlayoffAPG}</td>
		<td>{search.lastPlayoffRPG}</td>
		<td>{search.lastPlayoffBPG}</td>
		<td>{search.lastPlayoffSPG}</td>
		<td>{search.lastPlayoffGP}</td>
		<td>{search.lastPlayoffgamesStarted}</td>		
		<td>{search.lastPlayoffMPG}</td>
		<td>{search.lastPlayoffDRPG}</td>
		<td>{search.lastPlayoffORPG}</td>
		<td>{search.lastPlayofffgA}</td>
		<td>{search.lastPlayofffgM}</td>
		<td>{search.lastPlayofffgP}</td>
		<td>{search.lastPlayoffftA}</td>
		<td>{search.lastPlayoffftM}</td>
		<td>{search.lastPlayoffftP}</td>
		<td>{search.lastPlayoff3pA}</td>
		<td>{search.lastPlayoff3pM}</td>
		<td>{search.lastPlayoff3pP}</td>
		<td>{search.lastPlayoffTO}</td>
		<td>{search.lastPlayoffFoulsPG}</td>


      </tr>
    </tbody>
    
          );
          }.bind(this))}


          <thead>
      <tr>
		<th>Season</th>
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
		<td>{search.twenty15Season}</td>
		<td>{search.twenty15PPG}</td>
		<td>{search.twenty15APG}</td>
		<td>{search.twenty15RPG}</td>
		<td>{search.twenty15BPG}</td>
		<td>{search.twenty15SPG}</td>
		<td>{search.twenty15GP}</td>
		<td>{search.twenty15gamesStarted}</td>		
		<td>{search.twenty15MPG}</td>
		<td>{search.twenty15DRPG}</td>
		<td>{search.twenty15ORPG}</td>
		<td>{search.twenty15fgA}</td>
		<td>{search.twenty15fgM}</td>
		<td>{search.twenty15fgP}</td>
		<td>{search.twenty15ftA}</td>
		<td>{search.twenty15ftM}</td>
		<td>{search.twenty15ftP}</td>
		<td>{search.twenty153pA}</td>
		<td>{search.twenty153pM}</td>
		<td>{search.twenty153pP}</td>
		<td>{search.twenty15TO}</td>
		<td>{search.twenty15FoulsPG}</td>


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
		<td>{search.twenty15PlayoffSeason}</td>
		<td>{search.twenty15PlayoffPPG}</td>
		<td>{search.twenty15PlayoffAPG}</td>
		<td>{search.twenty15PlayoffRPG}</td>
		<td>{search.twenty15PlayoffBPG}</td>
		<td>{search.twenty15PlayoffSPG}</td>
		<td>{search.twenty15PlayoffGP}</td>
		<td>{search.twenty15PlayoffgamesStarted}</td>		
		<td>{search.twenty15PlayoffMPG}</td>
		<td>{search.twenty15PlayoffDRPG}</td>
		<td>{search.twenty15PlayoffORPG}</td>
		<td>{search.twenty15PlayofffgA}</td>
		<td>{search.twenty15PlayofffgM}</td>
		<td>{search.twenty15PlayofffgP}</td>
		<td>{search.twenty15PlayoffftA}</td>
		<td>{search.twenty15PlayoffftM}</td>
		<td>{search.twenty15PlayoffftP}</td>
		<td>{search.twenty15Playoff3pA}</td>
		<td>{search.twenty15Playoff3pM}</td>
		<td>{search.twenty15Playoff3pP}</td>
		<td>{search.twenty15PlayoffTO}</td>
		<td>{search.twenty15PlayoffFoulsPG}</td>

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
				<td>{search.lastPER}</td>
				<td>{search.lastVORP}</td>
				<td>{search.lastBPM}</td>
				<td>{search.lastOBPM}</td>
				<td>{search.lastDBPM}</td>
				<td>{search.lastWS}</td>
				<td>{search.lastOWS}</td>
				<td>{search.lastDWS}</td>
				<td>{search.lastftr}</td>
				<td>{search.last3par}</td>
				<td>{search.lastUSGP}</td>
				<td>{search.lastASTP}</td>
				<td>{search.lastSTLP}</td>
				<td>{search.lastBLKP}</td>
				<td>{search.lastTOVP}</td>
				<td>{search.lastTRBP}</td>
				<td>{search.lastORBP}</td>
				<td>{search.lastDRBP}</td>
				<td>{search.lastTSP}</td>
				<td>{search.lasteffectiveFGP}</td>


		    </tr>
		    </tbody>
		              );
          }.bind(this))}
		</Table>
		</Tab>
      </Tabs>

    </div>
    );
  }
}

export default Previous;
