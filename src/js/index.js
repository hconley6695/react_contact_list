// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import List from './list';
import DetailedInfo from './details';
import contactsfromdata from './data';
import FormView from './form_view';
import Dropzone from 'react-dropzone';
import Main from './main.js';
import Home from './home.js';
import AdditionalInfo from './additional_info';





ReactDOM.render((
	<Router history={hashHistory}>
	  <Route path="/" component={Main}>
		<IndexRoute component={Home}/>
		<Route path="/contactlist" component={List}/>
		<Route path="/detailsofcontact/:each" component={DetailedInfo}/>
		<Route path="/addnewcontact" component={FormView}/>
		<Route path="/magicinformation" component={AdditionalInfo}/>
	  </Route>	
	</Router>
	), document.querySelector('.app'));

