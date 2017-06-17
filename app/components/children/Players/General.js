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
  		<div>
	  		 <Grid>
			    <Row>
			      <Col xs={6} md={3}>
			        <Image src="/assets/thumbnail.png" rounded />
			      </Col>
            	<p> Name: LBJ </p> <p> Name: LBJ sdjfbdsjfbdsnbfsbf</p> <p> Name: LBJ </p> <p> Name: LBJ </p>
             	<p> Name: LBJ </p> <p> Name: LBJ </p> <p> Name: LBJ </p> <p> Name: LBJ </p>
			     </Row>
	     	 </Grid>
  		</div>
	</div>
    );
  }
}

export default General;
