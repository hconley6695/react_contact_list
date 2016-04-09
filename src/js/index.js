// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import DetailedInfo from './details';
import contactsfromdata from './data';
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
		<List contacts={contactsfromdata} onSelectPerson={renderDetailedInfo} onNew={renderForm} /*onEdit={renderForm}*//>, 
		document.querySelector('.app')
	);
}

function addNewContactAndRenderList (newContact) {
	contacts.push(newContact);
	renderList();
}

function changeContactInfoAndRenderList (editContact) {
	contact.splice()
}


function renderForm() {

	ReactDOM.render (
	<FormView onAdd={addNewContactAndRenderList} /*onEdit={changeContactInfoAndRenderList}*//>,
	document.querySelector('.app')

	);
}


renderList();
