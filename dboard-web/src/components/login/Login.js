import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.scss";

/**
 * Login component
 * The main login screen
 */
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
				<div className='input-wrapper'>
					<i className='fa fa-user' />
					<input ref={(input) => this.username = input}
						type="text" name="username" placeholder="username"
					/>
				</div>
				<div className='input-wrapper'>
					<i className='fa fa-lock' />
					<input ref={(input) => this.password = input}
						type="password" name="password" placeholder="password"
					/>
				</div>
			<button>LOGIN</button>
			</form>
	    </div>
        )
    }
}

export default Login;
