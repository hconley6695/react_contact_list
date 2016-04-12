// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import List from './list';
import DetailedInfo from './details';
import contactsfromdata from './data';
import FormView from './form_view';
import Dropzone from 'react-dropzone';


// let renderDetailedInfo = (person) => {

// 	ReactDOM.render(
// 		<DetailedInfo  user={person} onReturn={renderList}/>, 
// 		document.querySelector('.app')
// 	);

// }


// let renderList = () => {

// 	ReactDOM.render((
// 		 <List contacts={contactsfromdata} onSelectPerson={renderDetailedInfo} onNew={renderForm} />, 
// 		  document.querySelector('.app')

// 		)

// 	);
// }



// function renderForm() {

// 	ReactDOM.render (
// 	<FormView onAdd={addNewContactAndRenderList}/>,
// 	document.querySelector('.app')

// 	);
// }


// function addNewContactAndRenderList (newContact) {
// 	contacts.push(newContact);
// 	renderList();
// }




//renderList();

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={List}/>
		<Route path="/detailsofcontact" component={DetailedInfo}/>
		<Route path="/addnewcontact" component={FormView}/>
	</Router>
	), document.querySelector('.app'));

