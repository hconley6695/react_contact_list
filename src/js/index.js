// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import DetailedInfo from './details';
import contacts from './data';




let renderDetailedInfo = (person) => {

	ReactDOM.render(
		<DetailedInfo  user={person} onReturn={renderList}/>, /* onSelect={renderList} single={person}/>*/
		document.querySelector('.app')
	);

}


let renderList = () => {

	ReactDOM.render(
		<List contacts={contacts} onSelectPerson={renderDetailedInfo}/>, /*onSelect={renderDetailedInfo}/>*/
		document.querySelector('.app')
	);
}


renderList();
