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
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
	}

	handleToggle(){
		this.setState({open: !this.state.open});
	}

	close(){
		this.setState({open: false});
	}

	open(){
		this.setState({open: true});
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
		        href="https://github.com/altmanwong/project_meteor" />
		      <ChildButton
		        icon="ion-social-facebook"
		        label="Like us on Facebook"
		        href="#" />
		      <ChildButton
		        icon="ion-log-in"
		        label="Sign in to NewsHUB"
		        onClick={this.open}
		      />

		      <Signindialog show = {this.state.open} onHide = {this.close} />
		    </Menu>
		)
	}
}