import React, { Component, PropTypes } from 'react';
import { Route, Router, hashHistory, Link } from 'react-router';
import contacts from './data';
import SimpleSerialForm from 'react-simple-serial-form';


export default class List extends Component {	

	// static propTypes = {
	// 	contacts: PropTypes.array.isRequired,
	// //	onSelectPerson: PropTypes.func.isRequired,
	// //	onNew: PropTypes.func.isRequired
	// }

// onClick={onSelectPerson.bind(null, person)}
	 selectPerson(person) {	
	// 	let {onSelectPerson, onEdit} = this.props;
	 	return (
	 	  <div>
	 		<li key={person.fullName}>
	 		<Link to="/detailsofcontact">
	 			<img src={person.url} className="img-circle"/> {person.fullName} 
	 		</Link>
	 		</li> 
	 	  </div>
	 	);
			hashHistory.push('/'); 
		}

	// onSelectPerson(data) {
	// 	contacts.push(data);
	// 	hashHistory.push('/detailsofcontact');
	// }

	addPerson() {
		hashHistory.push('/addnewcontact');
	}


	render() {
		// let {contacts} = this.props;

	  return (
	  	<div className="list_view">

	  			  	  		
	  		<h2> My Contacts<button onClick={this.addPerson} >Add a Contact </button> </h2>

	  		<ul className="contact_list"> {contacts.map(this.selectPerson)}</ul>
	  	  	
	  	</div>
	  );
	}
}
