import React from 'react';
import { Menu, MainButton, ChildButton } from 'react-mfb'

import Signindialog from '../ui/accounts/signindialog.jsx';

import 'react-mfb/mfb.css'
import '../stylesheets/ionicons.css'

export default class floatbutton extends React.Component{
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
		var effect = 'zoomin',
	    pos = 'br',
	    method = 'hover';

		return(
			<Menu effect={effect} method={method} position={pos}>
		      <MainButton iconResting="ion-plus-round" iconActive="ion-close-round" />
		      <ChildButton
		        icon="ion-social-github"
		        label="View on Github"
		        href="https://github.com/altmanwong/" />
		      <ChildButton
		        icon="ion-social-facebook"
		        label="Like us on Facebook"
		        href="https://github.com/nobitagit" />
		      <ChildButton
		        icon="ion-log-in"
		        label="Sign in to NewsHUB"
		        onClick={this.handleToggle}
		      />

		      <Signindialog show = {this.state.open} onHide = {this.handleToggle} />
		    </Menu>
		)
	}
}