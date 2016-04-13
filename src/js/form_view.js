import React, { Component, PropTypes } from 'react';
import { Route, Router, hashHistory } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';
import contacts from './data';


export default class FormView extends Component {
	

	constructor (props) {
		super(props);
		this.state = {
			preview: 'http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png',
		}
	}

	passData(newContactData) {

		contacts.push(newContactData);
		hashHistory.push('/');
	}


	dropHandler([file]) {
		console.log(file);
		this.setState({preview: file.preview});
	}



	render() {

		return (
			<div className="contact_info">
			<h2>Add a Contact</h2>
			<SimpleSerialForm onData={::this.passData}>
				<div className="adj_img">
					<Dropzone onDrop={::this.dropHandler}>
					<div className="dropimage">
						<img src={this.state.preview} width="200" height="200"/>
						<input type="hidden" name="url" value={this.state.preview} id="urlperson"/>
					</div>
					</Dropzone>
				</div>
				<br/>
				<div>
					<label className="label">Full Name:
						<input type="text" name="fullName" id="nameperson"/>
					</label>
				</div>
				<br/>
				<div>
					<label className="label">Email Address: 
						<input type="email" name="email" id="emailperson"/>
					</label>
				</div>
				<br/>
				<div>
					<label className="label">Telephone:
						<input type="tel" name="telephone" id="telperson"/>
					</label>
				</div>
				<br/>
				<div>
					<label className="label">Location:
						<input type="text" name="location" id="locationperson"/>
					</label>
				</div>
				<br/>
				<div className="addcontactbutton">
					<button>Submit</button>
				</div>


			</SimpleSerialForm>
			</div>
		);
	}
}
	// static PropTypes = {
	// 	onAdd: PropTypes.func.isRequired,

	// }		// let {onAdd} = this.props;