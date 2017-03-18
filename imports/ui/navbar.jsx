import React from 'react';	
import {Navbar, NavItem, Nav, Button, FormGroup, FormControl} from 'react-bootstrap';

import Contentcontainer from '../ui/container/content_container.jsx';

export default class navbar extends React.Component{
	constructor(){
		super();
		this.state = {key: 0};
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(selectedKey){
		var newState = {};
		newState['key'] = selectedKey;
		this.setState(newState);

	}

	render(){
		return (
			<div>
			  <Navbar>
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
				    </Nav>
			    </Navbar.Collapse>
			  </Navbar>
				<Contentcontainer params = {this.state.key} />
			 </div>
		)
	}

}