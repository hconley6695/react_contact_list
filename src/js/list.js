import React, { Component, PropTypes } from 'react';
import {   Route, Router, hashHistory, Link } from 'react-router';
import contacts from './data';



export default class List extends Component {	


	 selectPerson(person) {	

	 	return (
	 	  <div>
	 				
	 		<li key={person.fullName}>
				<Link to={`/detailsofcontact/${person.fullName}`}>	 
	 				<img src={person.url} className="img-circle"/> {person.fullName} 
	 			</Link>	 		
	 		</li> 	 		


	 	  </div>
	 	);
			hashHistory.push('/contactlist'); 
		}


	addPerson() {
		hashHistory.push('/addnewcontact');
	}


	render() {

	  return (
	  	<div className="list_view">
	  	  		
	  		<h3> CURRENT CONTACTS </h3>

	  		<ul className="contact_list"> {contacts.map(this.selectPerson)}</ul>
	  	  	

	  	</div>
	  );
	}
}
	  	  	// <button onClick={this.addPerson} >Add a Contact </button>