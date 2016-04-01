
import React, { Component, PropTypes } from 'react';
import contacts from './data';

export default class DetailedInfo extends Component {
	static propTypes = {
		user: PropTypes.shape ({
			fullName: PropTypes.string.isRequired,
			email: PropTypes.string.isRequired,
			telephone: PropTypes.string.isRequired,
			location: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired
		}).isRequired,
		onReturn: PropTypes.func.isRequired
	}

	render() {
	  let { user, onReturn } =this.props;		

	  return (
		<div className="single_view">
			<div className="top_box">
				<button onClick={onReturn}><i className="fa fa-arrow-left"></i></button>
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

	// {
	// 	fullName: 'Harry Potter',
	// 	email: hpotter@hogwarts.edu,
	// 	telephone: (404) 222-2222,
	// 	location: NoWhere, Scotland,
	// 	url: "https://upload.wikimedia.org/wikipedia/en/4/44/HarryPotter5poster.jpg"
	// },