import React from "react";
import { Image, Grid, Row, Col, Panel } from 'react-bootstrap';


// To use props in class components, reference `this.props`
class General extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      BLAHHHHH: ""
    };
    this.setTerm = this.setTerm.bind(this);
  }
  // componentDidUpdate(prevProps, prevState) {
  // }
  setTerm(term) {
    this.setState({
      BLAHHHHH: term
    });
  }
render() {
  return (
<div> 
     {this.props.Data.map(function(search, i) {
        return ( 
    <Panel className="text-center" header={search.name}>
        <div key={i}>         
              <Image style={{width: 200, height: 150}} src={search.image} rounded /> 
              <p className="text-center"> Height/Weight: {search.height} / {search.weight}  </p> 
              <p className="text-center"> Years Played: {search.seasonExp} </p> 
              <p className="text-center"> Position: {search.position}  </p> 
              <p className="text-center"> Jersey: # {search.jersey}  </p> 
              <p className="text-center">  Team: <a href={"/team/" + search.Tm}> {search.teamCity} {search.teamName} </a>  </p> 
              <p className="text-center"> Drafted: Round {search.draftRound}, Pick #{search.draftNumber}</p>
              <p className="text-center"> College: {search.school} </p>
        </div>
    </Panel>
  );
          }.bind(this))}

</div>
    );
  }
}

export default General;



      // {this.props.Data.map(function(search, i) {
      //   return (            
      // <div key={i}>
      //    <Grid>
      //     <Row>
      //       <Col>
      //       <div>
      //         <p className="text-center container-fluid">{search.name} </p> 
      //         <Image src={search.image} rounded /> 
      //       </div>
      //       </Col>
      //         <p> Height/Weight: {search.height} / {search.weight}  </p> 
      //         <p> Years Played: {search.seasonExp} </p> 
      //         <p> Position: {search.position}  </p> 
      //         <p> Jersey: # {search.jersey}  </p> 
      //         <p> Team: {search.teamCity} {search.teamName}  </p> 
      //         <p> Drafted: Round {search.draftRound}, Pick #{search.draftNumber}</p>
      //         <p> College: {search.school} </p>
      //      </Row>
      //    </Grid>
      // </div>
      //     );
      //     }.bind(this))}