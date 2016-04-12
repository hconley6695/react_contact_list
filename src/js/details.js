
import React, { Component } from 'react';
import contacts from './data';
import { Route, Router, hashHistory } from 'react-router';


export default class DetailedInfo extends Component {

	backButton () {
		hashHistory.push('/');
	}

	render() {
		let { each } = this.props.params;

		let user = contacts.find(hpcharacter => hpcharacter.fullName === each);
		
		console.log(user);


	  return (
		<div className="single_view">
			<div className="top_box">

				<button onClick={this.backButton}><i className="fa fa-arrow-left"></i></button>
				<img src={user.url} alt={user.fullName}/>
			</div>
			<ul className="details_list">

				<li><i className="fa fa-user"></i> {user.fullName} </li>
				<li><i className="fa fa-envelope"></i> {user.email}  </li>
				<li><i className="fa fa-mobile"></i> {user.telephone} </li>
				<li><i className="fa fa-globe"></i> {user.location} </li>
			</ul>
  		</div>
	  );
	}
}






