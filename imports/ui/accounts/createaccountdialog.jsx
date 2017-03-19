import React from 'react';
import { Meteor } from 'meteor/meteor'
import { Modal, Button, FormGroup, form, ControlLabel, FormControl} from 'react-bootstrap'

import Response from '../accounts/response.jsx';


export default class createaccountdialog extends React.Component{
	constructor(props){
		super();
		this.state={
			open: false,
			name_inputted: false,
			email_inputted: false,
			password_inputted: false
		}

		this.createuser = this.createuser.bind(this);
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}

	createuser(){
		//Test whether there are input in the name field
		if(this.name.value !== ""){
			this.setState({name_inputted: true});
		}else{
			alert("Input name invalid");
		}

		//RegEx for checking whether the email is valid 
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    	if(re.test(this.email.value)){
    		this.setState({email_inputted: true});
    	}else{
    		alert("Input E-mail invlid");
    	}

    	//Check whether the password exceed 8 letters or not
		if(this.password.value.length >= 8){
			this.setState({password_inputted: true});
		}else{
			alert("Input password invlid");
		}


		if(this.state.name_inputted == true 
			&& this.state.email_inputted == true 
			&& this.state.password_inputted == true){
			//Insert the user data if all data are valid 
			Accounts.createUser({
				name: this.name.value,
				email: this.email.value,
				password: this.password.value
			});

			//open the response modal
			this.setState({open: !this.state.open});
			this.props.onHide(this);

			console.log(Meteor.users.find().fetch());
		}
	}

	close(){
		this.setState({open: false});
	}

	open(){
		this.props.onHide(this);
		this.setState({open: true});
	}

	render(){
		return(
			<div>
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
	      									inputRef={(ref) => {this.name = ref}}
	      									/>

								<ControlLabel>E-mail</ControlLabel>
	      						<FormControl type="email" 
	      									placeholder="demo@newshub.hk"
	      									inputRef={(ref) => {this.email = ref}} 
	      									/>

	      						<ControlLabel>Password (At least 8 letters)</ControlLabel>
	      						<FormControl type="password"
	      									inputRef={(ref) => {this.password = ref}} />
							</FormGroup>
						</form>
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={this.props.onHide}> Close </Button>
						<Button bsStyle='success' onClick={this.createuser}>Create Account</Button>
					</Modal.Footer>
				</Modal>

				<Response show={this.state.open} onHide={this.close} />
			</div>
		);
	}
}