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
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					{this.props.description}
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={this.props.onHide}> Close </Button>
				</Modal.Footer>
			</Modal>
		);
	}
}