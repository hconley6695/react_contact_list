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
		onSelectPerson: PropTypes.func.isRequired,
		onNew: PropTypes.func.isRequired,
		onEdit: PropTypes.func.isRequired
	}


	selectPerson(person) {	
		let {onSelectPerson, onEdit} = this.props;
		return (
		  <div>
			<li key={person.fullName} onClick={onSelectPerson.bind(null, person)}>
				<img src={person.url} className="img-circle"/> {person.fullName} 
			</li> 
			<button onClick={onEdit}>Edit </button>
		  </div>
		);
	}



	render() {
		let {contacts, onSelectPerson, onNew} = this.props;

	  return (
	  	<div className="list_view">
	  			  	  		
	  		<h2> My Contacts<button onClick={onNew}>Add a Contact </button> </h2>

	  		<ul className="contact_list"> {contacts.map(::this.selectPerson)}</ul>
	
	  	</div>
	  );

	}

	  		/*<img src="http://static2.hypable.com/wp-content/uploads/2014/09/Hogwarts-lake.png"/>*/
}
