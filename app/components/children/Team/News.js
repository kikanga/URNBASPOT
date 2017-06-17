import React from "react";

// To use props in class components, reference `this.props`
// Copied this from my MERN. Will need to be adjusted but nice to have with the .map functionality.
class News extends React.Component {
render() {
  return (

<div>







      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Article Results</h3>
        </div>
        <div className="panel-body text-center">
           {this.props.results.map(function(search, i) {
           return (
           <div>
            
              <p key={i} className="text-left col-md-10 col-xs-8">{search.lead_paragraph} 
              </p> 
              <br></br>

                   <button onClick={()=>this.saveButton(search.lead_paragraph, search.pub_date, search.web_url)} 
                   className="btn btn-primary col-md-1 col-xs-2"> Save </button>
                      <a target="_blank" href={search.web_url}> 
                    <button className="btn btn-danger col-md-1 col-xs-2"> Read More </button> 
                  </a>
              <br></br>
              <hr></hr>
           </div>
            );
          }.bind(this))}

        </div>
      </div>






















</div>
    );
  }
}

export default News;
