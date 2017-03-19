import React from 'react';
import { Meteor } from 'meteor/meteor'
import { Modal, Button, FormGroup, form, ControlLabel, FormControl} from 'react-bootstrap'


export default class response extends React.Component{
	constructor(props){
		super();
		this.state={
			open: false,
		}
	}


	render(){
		return(
			<Modal show={this.props.show} onHide = {this.props.onHide}>
				<Modal.Header>
					<Modal.Title>Create Successful</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					Thank you for signing up in NewsHUB.! Please check your email for verification. Enjoy!
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={this.props.onHide}> Close </Button>
				</Modal.Footer>
			</Modal>
		);
	}
}