import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor'
import { Input, Modal, Button, Checkbox, FormGroup, form, ControlLabel, FormControl} from 'react-bootstrap'

import Response from '../accounts/response.jsx';


var listofsources = [];
var listofinputs = [];

export default class settingDialog extends React.Component{
	constructor(props){
		super();
		this.state={
			date: props.dbCache,
			loading: props.loading,
			open_response: false,
		}

		this.changeList = this.changeList.bind(this);
		this.close_response = this.close_response.bind(this);
	}

	getSources(){
		listofsources = [];
		if(Meteor.user() !== undefined){
			listofinputs = Meteor.user().profile.preferredfeed;
		}else{
			listofinputs = [];
		}
		console.log(this.props.dbCache);
		if(this.props.dbCache !== undefined && this.props.dbCache.length !== 0 && this.props.loading == false){
			for(var i = 0; i < this.props.dbCache.length; i++){
				listofsources.push(<h1>{this.props.dbCache[i][0].category}</h1>);
				for(var j = 0; j < Object.keys(this.props.dbCache[i]).length - 1; j++){

					//Check whether the user has preferred that sources already
					var checked = false;
					if(Meteor.user() !== null){
						var plist = Meteor.user().profile.preferredfeed;
						for(var k = 0; k < plist.length; k++){
							if(plist[k] === this.props.dbCache[i][j].id){
								checked = true;
							}
						}
					}

					if(checked === false){
						//Generate the checkbox here 
						listofsources.push(<Checkbox
													name='user_selection_list' 
													value={this.props.dbCache[i][j].id} 
													onClick={(e) =>{this.toggleChange(e)}}
												>
													{this.props.dbCache[i][j].name}
											</Checkbox>										
							);		
					}else{
						//Generate the checkbox here 
						listofsources.push(<Checkbox
													name='user_selection_list' 
													value={this.props.dbCache[i][j].id} 
													onClick={(e) =>{this.toggleChange(e)}}
													checked
												>
													{this.props.dbCache[i][j].name}
											</Checkbox>										
						);	
					}


				}
			}
		}
		return listofsources;
	}

	toggleChange(e) {
		if(e.target.checked == true){
			listofinputs.push(e.target.value);
		}else{
			for(var i = 0; i < listofinputs.length; i++){
				if(listofinputs[i] === e.target.value){
					listofinputs.splice(i, 1);
				}
			}
		}
		console.log(listofinputs);
	}

	changeList(){
		if(Meteor.user() !== null){
			Meteor.users.update(Meteor.userId(), 
				{
					$set: {
						"profile.preferredfeed": listofinputs,
					}
				}
			);
		}
		console.log(Meteor.user());
		this.setState({open_response: true});
		this.props.onHide(this);
	}

	close_response(){
		this.setState({open_response: false});
	}

	render(){
		return(
			<div>
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
							<Button bsStyle='success' onClick={this.changeList}>Submit</Button>
					</Modal.Footer>
				</Modal>
				<Response 
					show={this.state.open_response} 
					onHide={this.close_response} 
					title="Your feed has been updated" 
					description="Your feed has been updated"
				 />
			</div>
		);
	}
}