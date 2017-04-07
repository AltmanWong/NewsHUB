import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import Settingdialog from '../accounts/settingDialog.jsx';
import {Sources} from '../../api/sources.js';

export default createContainer(({ params }) => {
	const subscription = Meteor.subscribe('readSource');
	const loading = !subscription.ready();

	return {
		loading,
		dbCache: !loading ? Sources.find({category: categories[params]}).fetch() : []
	};

}, Settingdialog);