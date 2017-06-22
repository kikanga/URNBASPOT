import React from "react";
import { Image } from 'react-bootstrap';


// To use props in class components, reference `this.props`
class Shotchart extends React.Component {
render() {
  	console.log(this.props.Data)
  return (

  <div>
      {this.props.Data.map(function(search, i) {
        return (            
      <div key={i}>
              <Image src={search.heatmaps} />
      </div>
          );
          }.bind(this))}
  </div>


    );
  }
}

export default Shotchart;
