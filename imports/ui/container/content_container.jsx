import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import Contents from '../contents.jsx';
import {Cache} from '../../api/cache.js';

var categories = ["business", "entertainment", "gaming", "general", "music", "science-and-nature", "sport", "technology"];

export default createContainer(({ params }) => {
	const subscription = Meteor.subscribe('readNews');
	const loading = !subscription.ready();
	var dbCache;

	var preferredlist = [];

	if(params > 7){
		var list;
		if(Meteor.user() !== null){
			preferredlist = Meteor.user().profile.preferredfeed;
			console.log(preferredlist);
		}

		console.log(preferredlist.toString());
		dbCache = Cache.find({source: {$in: preferredlist}}).fetch();
		console.log(dbCache);
	}else{
		dbCache = Cache.find({category: categories[params]}).fetch();
	}

	return {
		loading,
		dbCache
	}
	
	//!loading && params < 8 ? Cache.find({category: categories[params]}).fetch() : []
	// (!loading ? Cache.find({source: $in{prferredlist}}).fetch(): [])

}, Contents);