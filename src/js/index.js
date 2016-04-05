// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import DetailedInfo from './details';
import contacts from './data';
import FormView from './form_view';
import Dropzone from 'react-dropzone';


let renderDetailedInfo = (person) => {

	ReactDOM.render(
		<DetailedInfo  user={person} onReturn={renderList}/>, 
		document.querySelector('.app')
	);

}


let renderList = () => {

	ReactDOM.render(
		<List contacts={contacts} onSelectPerson={renderDetailedInfo} onNew={renderForm}/>, 
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
