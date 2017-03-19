import React from 'react';
import { Modal, Button, FormGroup, form, ControlLabel, FormControl} from 'react-bootstrap'

import User from '../api/user.js'

export default class createaccountdialog extends React.Component{
	constructor(props){
		super();
		this.state={
			name_inputed: false;
			email_inputed: false;
			password_inputed: false;
		}

		this.handleInputName = this.handleInputName.bind(this);
		this.handleInputEmail = this.handleInputEmail.bind(this);
		this.handleInputPassword = this.handleInputPassword.bind(this);
	}

	handleInputName(){
		if(this.name.value !== undefined){
			this.setState({name_inputed: true});
		}else{
			alert("Input name invalid");
		}
	}

	handleInputEmail(){
		//RegEx for checking whether the email is valid 
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    	if(re.test(this.email.value)){
    		this.setState({email_inputed: true});
    	}else{
    		alert("Input E-mail invlid");
    	}
	}

	handleInputPassword(){
		if(this.password.value.length > 8){
			this.setState({password_inputed: true});
		}else{
			alert("Input password invlid");
		}
	}

	createuser(){
		if(this.state.input_name == true 
			&& this.state.input_email == true 
			&& this.state.input_password == true){
			//Insert the user data if all data are valid 
			User.insert({
				name: this.name.value,
				email: this.email.value,
				password: this.password.value
			});

		}
	}

	popalert(description){
		alert(this.description);
	}

	render(){
		return(
			<Modal show={this.props.show} onHide = {this.props.onHide}>
				<Modal.Header>
					<Modal.Title>Create Account in NewsHUB.</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<form>
						<FormGroup controlId='signinform'>
							<ControlLabel>Name</ControlLabel>
      						<FormControl type="text" 
      									placeholder="Diamond CHAN" 
      									inputRef={(ref) => {this.name = ref}} />

							<ControlLabel>E-mail</ControlLabel>
      						<FormControl type="email" 
      									placeholder="demo@newshub.hk"
      									inputRef={(ref) => {this.email = ref}} />

      						<ControlLabel>Password (At least 8 letters)</ControlLabel>
      						<FormControl type="password"
      									inputREf={(ref) => {this.password = ref}} />
						</FormGroup>
					</form>
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={this.props.onHide}> Close </Button>
					<Button bsStyle='success' type='submit' onClick={this.createuser}>Create Account</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}