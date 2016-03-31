
import React, { Component } from 'react';
import contacts from './data';

export default class DetailedInfo extends Component {
	render() {
	// {
	//   var details = contacts.map((item) => {
	//   	return 


	//   })

	  return (
		<div className="single_view">
			<img src="https://upload.wikimedia.org/wikipedia/en/4/44/HarryPotter5poster.jpg"></img>
  			<span className="full_name">  </span>
  			<span className="email">  </span>
  			<span className="telephone">  </span>
  			<span className="location">  </span>
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