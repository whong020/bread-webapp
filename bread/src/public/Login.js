import React, { Component } from 'react';
import '../resources/css/Login.css';

class Login extends Component {
  render() {
    return (
      <div className="LoginContainer">
		<div class="UserNameContainer">
	    	<label><b>Username</b></label>
	    	<input type="text" placeholder="Enter Username" name="uname" required></input>
	    </div>
	    <div>
	    	<label><b>Password</b></label>
	    	<input type="password" placeholder="Password" name="psw" required></input>
	    </div>
      </div>
    );
  }
}

export default Login;