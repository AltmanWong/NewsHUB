import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Cache } from '../api/cache.js';
import Newscard from '../ui/newscard.jsx';

var categories = ["business", "entertainment", "gaming", "general", "music", "science-and-nature", "sport", "technology"];

var newscards = [];

export default class contents extends Component{
	constructor(props){
		super(props);
		this.state = {
			date: props.dbCache,
			loading: props.loading
		};
	}

	renderNewsCard(){
		newscards = [];

		if(this.props.dbCache !== undefined && this.props.dbCache.length !== 0 && this.props.loading == false){
			for(var i = 0; i < this.props.dbCache.length; i++){
				//console.log(this.props.dbCache[i].length);
				for(var j = 0; j < this.props.dbCache[i].articles.length; j++){
					newscards.push(
					<Newscard 
						imglink = {this.props.dbCache[i].articles[j].urlToImage} 
						link = {this.props.dbCache[i].articles[j].url} 
						title = {this.props.dbCache[i].articles[j].title}
						publishedAt = {this.props.dbCache[i].articles[j].publishedAt}
						source = {this.props.dbCache[i].source}
						author = {this.props.dbCache[i].articles[j].author}
						contents = {this.props.dbCache[i].articles[j].description}

					/>);
				}
			}

			return newscards;
		}else{
			return (
				<div className='container'>
					<center>
						<h1 id = 'waiting'> Please wait while our monkeys are gathering the news </h1>
					</center>
				</div>
			);
		}

	}

	render(){
		return (
			<div>
				{this.renderNewsCard()}
			</div>
		);	
  	}
}
