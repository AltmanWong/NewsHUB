import React from 'react';
import { Modal, Button, FormGroup, form, ControlLabel, FormControl} from 'react-bootstrap'

import Createaccountdialog from '../accounts/createaccountdialog.jsx';

export default class signindialog extends React.Component{
	constructor(props){
		super();
		this.state = {
			open: false	
		}
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(){
		this.setState({open: !this.state.open});
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
	      						<FormControl type="text" placeholder="demo@newshub.hk" />

	      						<ControlLabel>Password</ControlLabel>
	      						<FormControl type="password"/>
							</FormGroup>
						</form>
						<hr />
						<div id='createaccount'>
							Do not have an account? <a onClick = {this.handleToggle}> Create one </a>
						</div>
					</Modal.Body>

					<Modal.Footer>
						
						<Button onClick={this.props.onHide}> Close </Button>
						<Button bsStyle='success' type='submit'>Sign in</Button>
					</Modal.Footer>
				</Modal>

				<Createaccountdialog show = {this.state.open} onHide = {this.handleToggle} />
			</div>
		);
	}
}