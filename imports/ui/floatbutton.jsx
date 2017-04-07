import React from 'react';
import { Menu, MainButton, ChildButton } from 'react-mfb'

import Signindialog from '../ui/accounts/signindialog.jsx';
import Settingdialog from '../ui/accounts/settingdialog.jsx';

import 'react-mfb/mfb.css'
import '../stylesheets/ionicons.css'

export default class floatbutton extends React.Component{
	constructor(props){
		super();
		this.state = {
			open_login: false,
			open_setting: false;
		}
		this.handleToggle = this.handleToggle.bind(this);
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
	}

	handleToggle(){
		this.setState({open_login: !this.state.open});
	}

	close_login(){
		this.setState({open_login: false});
	}

	open_login(){
		this.setState({open_login: true});
	}

	open_setting(){
		this.setState({open_setting: true});
	}

	close_setting(){
		this.setState({open_setting: false});
	}

	render(){
		var effect = 'zoomin',
	    pos = 'br',
	    method = 'hover';

		return(
			<Menu effect={effect} method={method} position={pos}>
		      <MainButton iconResting="ion-plus-round" iconActive="ion-close-round" />
		      //only shows when login-ed
		      <ChildButton 
		      	disable={this.props.logined}
		      	icon="ion-social-settingss"
		      	label="Set up your sources"
		      	href="#"
		      	onClick={this.open_setting}
		      />
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
		        onClick={this.open_setting}
		      />

		      <Signindialog show = {this.state.open_login} onHide = {this.close_login} />
		      <Settingdialog show ={this.state.open_setting} onHide = {this.close_setting} />
		    </Menu>
		)
	}
}