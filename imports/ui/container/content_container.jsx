import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import Contents from '../contents.jsx';
import {Cache} from '../../api/cache.js';

var categories = ["business", "entertainment", "gaming", "general", "music", "science-and-nature", "sport", "technology"];

export default createContainer(({ params }) => {
	const subscription = Meteor.subscribe('readNews');
	const loading = !subscription.ready();

	return {
		loading,
		dbCache: !loading ? Cache.find({category: categories[params]}).fetch() : []
	};

}, Contents);