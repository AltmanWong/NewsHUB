import React from 'react';
import { Meteor } from 'meteor/meteor'
import { Modal, Button, Checkbox, FormGroup, form, ControlLabel, FormControl} from 'react-bootstrap'

var listofsources = [];
var listofinputs = [][];

export default class settingDialog extends React.Component{
	constructor(props){
		super();
		this.state={
			date: props.dbCache,
			loading: props.loading
		}
	}

	getSources(){
		if(this.props.dbCache !== undefined && this.props.dbCache.length !== 0 && this.props.laoding == false){
			for(var i = 0; i < this.props.dbCache.length; i++){
				for(var j = 0; j < this.props.dbCache[i].length; j++){
					listofsources.push(<Checkbox inputRef={(ref) => {this.listofinputs[i][j] = ref}}>this.props.dbCache[i][j].name</Checkbox>);
				}
			
		}
		return (
			<FormGroup>
				{this.listofsources}
			</FormGroup>
		);

	}

	submit(){
		
	}

	render(){
		return(
			<Modal show={this.props.show} onHide = {this.props.onHide}>
				<Modal.Header>
					<Modal.Title>Select Contents Here<Modal.Title>
				</Modal.Header>

				<Modal.Body>
					//Create a list of sources for the user to choose
					{this.getSources}
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={this.props.onHide}> Submit </Button>
				</Modal.Footer>
			</Modal>
		);
	}
}