import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.scss";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        };
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.username.value);
		console.log(this.password.value);
	}

    render() {
        return (
	    <div className="Login">
			<form className="Login-form" onSubmit={this.handleSubmit} >	    
				<input ref={(input) => this.username = input} type="text" name="username" placeholder="username" />
				<input ref={(input) =>this.password = input} type="password" name="password" placeholder="password" />
				<button>LOGIN</button>
			</form>
	    </div>
        )
    }
}

export default Login;
