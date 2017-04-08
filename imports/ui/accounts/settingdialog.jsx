import React from 'react';
import { Meteor } from 'meteor/meteor'
import { Input, Modal, Button, Checkbox, FormGroup, form, ControlLabel, FormControl} from 'react-bootstrap'

var listofsources = [];
var listofinputs = [];

export default class settingDialog extends React.Component{
	constructor(props){
		super();
		this.state={
			date: props.dbCache,
			loading: props.loading
		}
		this.selectedCheckboxes = new Set();
	}

	getSources(){
		listofsources = [];
		console.log(this.props.dbCache);
		if(this.props.dbCache !== undefined && this.props.dbCache.length !== 0 && this.props.loading == false){
			for(var i = 0; i < this.props.dbCache.length; i++){
				listofsources.push(<h1>{this.props.dbCache[i][0].category}</h1>);
				for(var j = 0; j < Object.keys(this.props.dbCache[i]).length - 1; j++){
					listofsources.push(<div>
										<input 
											type='checkbox'
											name='user_selection_list' 
											value={this.props.dbCache[i][j].name} 
											ref="selections"
											onChange={this.toggleChange(this.props.dbCache[i][j].name)}
										/> 	
										{this.props.dbCache[i][j].name}
										<br />
										</div>										
						);		
				}
			}
		}
		return listofsources;
	}

	toggleChange(name){
		console.log(name);
	}

	changeList(){
	}

	render(){
		return(
			<Modal show={this.props.show} onHide = {this.props.onHide}>
				<Modal.Header>
					<Modal.Title>Select Contents Here</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<form>
						{this.getSources()}
					</form>
				</Modal.Body>

				<Modal.Footer>
						<Button bsStyle='success' type='submit' onClick={this.changeList}>Submit</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}