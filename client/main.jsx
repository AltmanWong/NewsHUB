import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import Navbar from '../imports/ui/navbar.jsx';
import Footer from '../imports/ui/footer.jsx';
import Floatbtn from '../imports/ui/floatbutton.jsx';


Meteor.startup(() => {
  render(
  	(<div>
  		<Navbar />
  		<Footer />
  		<Floatbtn />
  	</div>)
  	, document.getElementById('app'));
});																						