import React from 'react';
import { Menu, MainButton, ChildButton } from 'react-mfb'

import Signindialog from '../ui/accounts/signindialog.jsx';
import Settingdialogcontainer from '../ui/container/source_container.jsx';

import 'react-mfb/mfb.css'
import '../stylesheets/ionicons.css'

export default class floatbutton extends React.Component{
	constructor(props){
		super();
		this.state = {
			open_login: false,
			open_setting: false
		}
		this.handleToggle = this.handleToggle.bind(this);
		//Bind for the control of opening and closing for the login modal
		this.close_login = this.close_login.bind(this);
		this.open_login = this.open_login.bind(this);
		//Bind for the contorl of opening and closing for the setting modal
		this.open_setting = this.open_setting.bind(this);
		this.close_setting = this.close_setting.bind(this);

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
		      <ChildButton 
		      	disable={this.props.logined}
		      	icon="ion-android-settings"
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
		        onClick={this.open_login}
		      />

		      <Signindialog show = {this.state.open_login} onHide = {this.close_login} />
		      <Settingdialogcontainer show ={this.state.open_setting} onHide = {this.close_setting} />
		    </Menu>
		)
	}
}