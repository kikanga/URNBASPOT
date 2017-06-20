
import React from 'react';
import Router from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
import $ from "jQuery";

var LoginPage = React.createClass({

  getInitialState: function(){
    return {
      loginID: '',
      password: '',
      isSubmitted: false
    };
  },

  render: function(){
  
    return(
        <div className="login-page ng-scope ui-view"> 
          <div className="row"> 
            <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
              <img src={require("../public/img/bbavatar.jpg")} className="bbavatar" /> 
              <h1> Please Login if you are already a user. <small>If you are not a user yet please sign up here!</small></h1> 
              <form role="form" onSubmit={this.handleLogin} className="ng-pristine ng-valid"> 
                <div className="form-content"> 
                  <div className="form-group"> 
                    <input type="text" className="form-control input-underline input-lg" placeholder="Email" /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="password" className="form-control input-underline input-lg" placeholder="Password" /> 
                  </div> 
                </div> 
                <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Login</button> 
              </form> 
            </div> 
          </div> 
        </div>
      
    );
      

  },

  setLoginID: function(e) {

    this.setState({
      loginID: e.target.value,
      loginError: ''
    });

  },

  setPassword: function(e) {

    this.setState({
      password: e.target.value,
      loginError: ''
    });

  },

  handleLogin: function(e){

    e.preventDefault();
    this.props.history.pushState();
    
    // this.transitionTo('dashboard');

    return false;

  }

});

export default LoginPage;