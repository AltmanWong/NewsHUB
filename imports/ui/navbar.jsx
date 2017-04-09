import React from 'react';	
import {Navbar, NavItem, Nav, Button, FormGroup, FormControl} from 'react-bootstrap';

import Contentcontainer from '../ui/container/content_container.jsx';
import Response from '../ui/accounts/response.jsx';

export default class navbar extends React.Component{
	constructor(){
		super();
		this.state = {
			key: 0,
			username: "User",
			open_response: false,
		};
		this.handleSelect = this.handleSelect.bind(this);
		this.checkLogin = this.checkLogin.bind(this);
		this.close_response = this.close_response(this);
	}

	handleSelect(selectedKey){
		if(selectedKey === 8){
			if(Meteor.user() === undefined){
				this.setState({open_response: true});
			}else{
				var newState = {};
				newState['key'] = selectedKey;
				this.setState(newState);
			}
		}else{
			var newState = {};
			newState['key'] = selectedKey;
			this.setState(newState);
		}


	}

	checkLogin(){
		if(Meteor.user() !== undefined){
			console.log(Meteor.user());
			this.setState({username: Meteor.user().emails[0].address});
		}
	}

	close_response(){
		this.setState({open_response: false});
	}
	
	render(){
		return (
			<div>
			  <Navbar className="bs-docs-nav">
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">NewsHUB </a>
			      </Navbar.Brand>
      			<Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
				    <Nav activeKey={this.state.key} onSelect = {this.handleSelect}>
				      <NavItem eventKey={0} href="#" >BUSINESS</NavItem>
				      <NavItem eventKey={1} href="#" >ENTERTAINMENT</NavItem>
				      <NavItem eventKey={2} href="#" >GAMING</NavItem>
				      <NavItem eventKey={3} href="#" >GENERAL</NavItem>
				      <NavItem eventKey={4} href="#" >MUSIC</NavItem>
				      <NavItem eventKey={5} href="#" >SCIENCE AND NATURE</NavItem>
				      <NavItem eventKey={6} href="#" >SPORTS</NavItem>
				      <NavItem eventKey={7} href="#" >TECHNOLOGY</NavItem>
				  	  <NavItem eventKey={8} href="#" >CUSTOM FEED</NavItem>
				    </Nav>
				    <Nav pullRight>
				      <NavItem eventKey={9} href="#" onSelect={this.checkLogin} >{this.state.username}</NavItem>
			     	</Nav>
			    </Navbar.Collapse>

			  </Navbar>
				<Contentcontainer params = {this.state.key} />
				<Response show={this.state.open} onHide={this.close} title="Please Sign-in" description="Please Sign-in to use this function" />
			 </div>
		)
	}

}