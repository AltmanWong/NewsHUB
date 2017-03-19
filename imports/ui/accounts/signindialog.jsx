import React from 'react';
import { Modal, Button, FormGroup, form, ControlLabel, FormControl} from 'react-bootstrap'

import Createaccountdialog from '../accounts/createaccountdialog.jsx';
import Response from '../accounts/response.jsx';

export default class signindialog extends React.Component{
	constructor(props){
		super();
		this.state = {
			open: false,
			email_inputted: false,
			password_inputted: false,
		}
		this.loginToNewsHUB = this.loginToNewsHUB.bind(this);
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}

	close(){
		this.setState({open: false});
	}

	open(){
		this.props.onHide(this);
		this.setState({open: true});
	}

	loginToNewsHUB(){
		//RegEx for checking whether the email is valid 
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    	if(re.test(this.email.value)){
    		this.setState({email_inputted: true});
    	}else{
    		this.setState({email_inputted: false});
    		alert("Input E-mail invlid");
    	}

		if(this.password.value !== ""){
			this.setState({password_inputted: true});
		}else{
			this.setState({password_inputted: false});
    		alert("Password field must not be null");

		}


		if(this.state.email_inputted == true 
			&& this.state.password_inputted == true){

			Meteor.loginWithPassword(this.email.value, this.password.value, function(error){
				console.log(error);
 			});

			this.props.onHide(this);

			console.log("logged-in");
		}


	}

	render(){
		return(
			<div>
				<Modal show={this.props.show} onHide = {this.props.onHide}>
					<Modal.Header>
						<Modal.Title>Sign in to NewsHUB</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<form>
							<FormGroup controlId='signinform'>
								<ControlLabel>E-mail</ControlLabel>
	      						<FormControl type="email" 
	      									placeholder="demo@newshub.hk"
	      									inputRef={(ref) => {this.email = ref}} />

	      						<ControlLabel>Password</ControlLabel>
	      						<FormControl type="password"
	      									inputRef={(ref) => {this.password = ref}}/>
							</FormGroup>
						</form>
						<hr />
						<div id='createaccount'>
							Do not have an account? <a onClick = {this.open}> Create one </a>
						</div>
					</Modal.Body>

					<Modal.Footer>
						
						<Button onClick={this.props.onHide}> Close </Button>
						<Button bsStyle='success' type='submit' onClick={this.loginToNewsHUB}>Sign in</Button>
					</Modal.Footer>
				</Modal>

				<Createaccountdialog show = {this.state.open} onHide = {this.close} />
			</div>
		); 
	}
}