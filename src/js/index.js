// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import DetailedInfo from './details';



function renderList() {

	ReactDOM.render(
		<List/> /*onSelect={renderDetailedInfo}/>*/,
		document.querySelector('.app')
	);
}

function renderDetailedInfo(person){

	ReactDOM.render(
		<DetailedInfo/> /* onSelect={renderList} single={person}/>*/,
		document.querySelector('.app')
	);

}

renderList();
