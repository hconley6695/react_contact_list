import React, { Component, PropTypes } from 'react';
import contacts from './data';


// function makeList(nameOfPerson) {
// 	return `<div className="person">
//	  		<img src="https://upload.wikimedia.org/wikipedia/en/4/44/HarryPotter5poster.jpg"/>
//				Harry Potter
//	  		</div>`
// }

//	  		contacts.fullName.map(makeList);
export default class List extends Component {	


	static propTypes = {
		contacts: PropTypes.array.isRequired,
		onSelectPerson: PropTypes.func.isRequired
	}


	selectPerson(person) {	
		let {onSelectPerson} = this.props;
		return (
			<li key={person.fullName} onClick={onSelectPerson.bind(null, person)}> {person.fullName} </li>
		);
	}



	render() {
		let {contacts, onSelectPerson} = this.props;

	  return (
	  	<div className="list_view">
	  		<h1> My Contacts </h1>
	  		<ul className="contact_list"> {contacts.map(::this.selectPerson)}</ul>
	  	</div>
	  );

	}


}
