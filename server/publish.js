import {Meteor} from 'meteor/meteor';
import { Cache } from '../imports/api/cache.js'
import { Sources } from '../imports/api/sources.js'

var categories = ["business", "entertainment", "gaming", "general", "music", "science-and-nature", "sport", "technology"];

Meteor.publish('readNews', function () {
	console.log('subscribed');
  	return Cache.find(); 
});

Meteor.publish('readSource', function(){
	console.log('subscribed Sources database');
	return Sources.find();
})							