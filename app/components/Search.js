import React  from "react";
import { ButtonToolbar, DropdownButton, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import Autosuggest from 'react-bootstrap-autosuggest'


class Search extends React.Component {
	constructor() {
		super();

		this.state = {
			name: "",
			playerData: [],
			open: false
		};
		this.updateText = this.updateText.bind(this);
		this.focus = this.focus.bind(this);
		this.blur = this.blur.bind(this);
	}


componentDidMount() {
    fetch('/api/players')
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => {
        console.log(data)
        this.setState({
          playerData: data,
        });
      });
  }

   updateText(event) {
    this.setState({
      name: event.target.value
    });
  }


focus (){
	this.setState({
		open: true
	})
}

blur (){
	this.setState({
		open: false
	})
}

  render() {
  	var style ={
  	width: "210px",
    height: "50px",
    overflow: "auto",
    color: "white",
    zIndex: -1,
    margin: "0px 0px -34px 0px",
  	}

    var search = {
      margin: "5px 0px 0px 25px",
      }


var dropdown;

if (this.state.open === true) {
    var filtered = this.state.playerData.filter((data) => {
      if (data.name.toLowerCase().indexOf(this.state.name.toLowerCase()) != -1)
        return true;
      else
        return false;
    });
    dropdown = (<ul style={style}>
      	        {            
      	          filtered.map((data, i) => {
      	            return (
            <a href={"/players/" + data.PlayerID}> <p className="tt-dropdown-menu" eventKey={i} key={i} value={data.PlayerID} obj={data}> {data.name}</p> </a>
      	            );
      	          })
      	        }
      	        </ul>)
}

		return (
		<div style={search}>
		 <FormGroup>
          <input type="text"
          	className="form-control js-quick-search tt-input" 
           	  placeholder="Search" 
          	 value={this.state.name}
	          onChange={this.updateText}
	          onFocus= {this.focus}
	          />
        </FormGroup>
        {dropdown}
      </div>
		);
	}
}

export default Search;
	        // <p key={data.PlayerID} value={data.PlayerID} obj={data.name}> {data.name} </p>


 // <Autosuggest
 //      datalist={this.state.playerData}
 //      placeholder="Find a player here:"
 //            value={this.state.name}
 //            onChange={this.updateText}
 //            onFocus= {this.focus}
 //      />
