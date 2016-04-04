// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import DetailedInfo from './details';
import contacts from './data';
import FormView from './form_view';



let renderDetailedInfo = (person) => {

	ReactDOM.render(
		<DetailedInfo  user={person} onReturn={renderList}/>, /* onSelect={renderList} single={person}/>*/
		document.querySelector('.app')
	);

}


let renderList = () => {

	ReactDOM.render(
		<List contacts={contacts} onSelectPerson={renderDetailedInfo} onNew={renderForm}/>, /*onSelect={renderDetailedInfo}/>*/
		document.querySelector('.app')
	);
}

function addNewContactAndRenderList (newContact) {
	contacts.push(newContact);
	renderList();
}


function renderForm() {

	ReactDOM.render (
	<FormView onAdd={addNewContactAndRenderList}/>,
	document.querySelector('.app')

	);
}


renderList();
