import React from 'react';	
import {NavItem, Nav, Image, Col, Row, Grid} from 'react-bootstrap';

export default class dashnav extends React.Component{
	constructor(){
		super();
		this.state = {
			username: 'username',
			email: 'demo@newshub.com'
		};
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(selectedKey){
		var newState = {};
		newState['key'] = selectedKey;
		this.setState(newState);

	}

	render(){
		return (
			<div id = 'left-nav'>
				<img src = 'image/logo.jpg' /> <br/>

				<div id = 'user'>
					<Grid>
						<Row>
						<Col md = {4}>
							<Image scr = {this.state.userimg} />
						</Col>
						<Col md = {8}>
							<Row>
								{this.state.username}
							</Row>
							<Row>
								{this.state.email}
							</Row>
						</Col>
						</Row>
 					</Grid>
				</div>
				<hr />
				<Nav id = 'dashnav'>
					<NavItem eventKey={1}> SUBSCRIBE </NavItem>
					<NavItem eventKey={}> ACCOUNT INFO </NavItem>
				</Nav>
			 </div>
		)
	}

}