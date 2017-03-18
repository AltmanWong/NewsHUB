import {Meteor} from 'meteor/meteor';
import { Cache } from '../imports/api/cache.js'

var categories = ["business", "entertainment", "gaming", "general", "music", "science-and-nature", "sport", "technology"];

Meteor.publish('readNews', function () {
	console.log('subscribed');
  	return Cache.find(); 
});