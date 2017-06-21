import React from "react";
import { Image, Grid, Row, Col } from 'react-bootstrap';


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
      <div key={i}>
         <Grid>
          <Row>
            <Col xs={6} md={3}>
              <p className="text-center container-fluid">{search.name} </p> 
              <Image src={search.image} rounded />
            </Col>
              <p> Height/Weight: {search.height} / {search.weight}  </p> 
              <p> Years Played: {search.seasonExp} </p> 
              <p> Position: {search.position}  </p> 
              <p> Jersey: # {search.jersey}  </p> 
              <p> Team: {search.teamCity} {search.teamName}  </p> 
              <p> Drafted: Round {search.draftRound}, Pick #{search.draftNumber}</p>
              <p> College: {search.school} </p>
           </Row>
         </Grid>
      </div>
          );
          }.bind(this))}
  </div>
    );
  }
}

export default General;


 // <div>
 //  		<div>
	//   		 <Grid>
	// 		    <Row>
	// 		      <Col xs={6} md={3}>
	// 		        <Image src="/assets/thumbnail.png" rounded />
	// 		      </Col>
 //            	<p> Name: LBJ </p> <p> Name: LBJ sdjfbdsjfbdsnbfsbf</p> <p> Name: LBJ </p> <p> Name: LBJ </p>
 //             	<p> Name: LBJ </p> <p> Name: LBJ </p> <p> Name: LBJ </p> <p> Name: LBJ </p>
	// 		     </Row>
	//      	 </Grid>
 //  		</div>
	// </div>
