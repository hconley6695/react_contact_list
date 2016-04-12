import React, {Component} from 'react';
import {Route, Router, hashHistory, Link } from 'react-router';


export default class Main extends Component {
	render() {
		return (
			<div className="main">
				<header>
					<img src="./images/hogwarts.jpg" alt="hogwarts" width="800" height="350"/>
					<span className="magic_contacts">Magical Contacts</span>
				</header>
				<aside className="sidebar">
				  <ul>

					<li><Link to="/">HOME</Link></li>
					<li><Link to="/contactlist">CONTACT LIST</Link></li>
					<li><Link to="/addnewcontact">ADD NEW CONTACT</Link></li>
					<li><Link to="/magicinformation">ADDITIONAL INFORMATION</Link></li>
				  </ul>

				</aside>
				<div className="main_section">
					{this.props.children}
				</div>	
				<footer>FOOTER TEXT HERE</footer>

			</div>

		);
	}


}