import React from "react";
import { Panel } from 'react-bootstrap';

// To use props in class components, reference `this.props`
// On a win, use the success one, on a loss, use the warning, and on the upcoming use either primary or the regular. 
class Gameinfo extends React.Component {
render() {
  return (

    <Panel header="Games">


    <Panel header={lastGameWin} bsStyle="success">
      Panel content
    </Panel>

    <Panel header={lastGameLoss} bsStyle="danger">
      Panel content
    </Panel>

    <Panel header={tonightsGame} bsStyle="primary">
      Panel content
    </Panel>

    <Panel header={nextGame} bsStyle="success">
      Panel content
    </Panel>

    </Panel>


   );
  }
}

export default Gameinfo;
