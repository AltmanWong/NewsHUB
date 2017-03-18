import React from 'react';
import { Modal, Button, FormGroup, form, ControlLabel, FormControl} from 'react-bootstrap'

export default class createaccountdialog extends React.Component{
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
      						<FormControl type="text" placeholder="Diamond CHAN" />

							<ControlLabel>E-mail</ControlLabel>
      						<FormControl type="text" placeholder="demo@newshub.hk" />

      						<ControlLabel>Password</ControlLabel>
      						<FormControl type="password"/>
						</FormGroup>
					</form>
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={this.props.onHide}> Close </Button>
					<Button bsStyle='success' type='submit'>Create Account</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}