
import React, { Component } from 'react';
import contacts from './data';
import { Route, Router, hashHistory } from 'react-router';
// import SimpleSerial from 'react-simple-serial-form';

export default class DetailedInfo extends Component {
	// static propTypes = {
	// 	user: PropTypes.shape ({
	// 		fullName: PropTypes.string.isRequired,
	// 		email: PropTypes.string.isRequired,
	// 		telephone: PropTypes.string.isRequired,
	// 		location: PropTypes.string.isRequired,
	// 		url: PropTypes.string.isRequired
	// 	}).isRequired,
	// 	onReturn: PropTypes.func.isRequired
	// }
	backButton () {
		hashHistory.push('/');
	}

	render() {
	

	  return (
		<div className="single_view">
			<div className="top_box">

				<button onClick={this.backButton}><i className="fa fa-arrow-left"></i></button>
				<img src="./images/hp.jpg" alt="Harry Potter"/>
			</div>
			<ul className="details_list">
				<li><i className="fa fa-user"></i> Harry Potter</li>
				<li><i className="fa fa-envelope"></i> hpotter@hogwarts.edu </li>
				<li><i className="fa fa-mobile"></i> 222-222-2222 </li>
				<li><i className="fa fa-globe"></i> Nowhere, Scotland</li>
			</ul>
  		</div>
	  );
	}
}

// import React, {Component, PropTypes} from 'react';
//				<img src={user.url} alt={user.fullName}/>
//				<li><i className="fa fa-user"></i> {user.fullName} </li>
//				<li><i className="fa fa-envelope"></i> {user.email}  </li>
//				<li><i className="fa fa-mobile"></i> {user.telephone} </li>
//				<li><i className="fa fa-globe"></i> {user.location} </li>
//	  let { user, onReturn } =this.props;	


