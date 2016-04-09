import React, { Component, PropTypes } from 'react';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';
import contacts from './data';


export default class FormView extends Component {
	

	static PropTypes = {
		onAdd: PropTypes.func.isRequired,
	//	newNameUser: PropTypes.string.isRequired
	}

	constructor (props) {
		super(props);
		this.state = {
			preview: 'http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png',
			newName: '{user.fullName}'
		}
	}

	passData(newContactData) {
		this.props.onAdd(newContactData);
	}

	changeHandler(event) {
		let {value} = event.target;
		let {newNameUser} = this.props;
//		let newName = newNameUser
//		this.setState({newName: newContactData.newName});
	}

	dropHandler([file]) {
		console.log(file);
		this.setState({preview: file.preview});
	}



	render() {
		let {onAdd} = this.props;
		return (
			<div className="contact_info">
			<h2>Add a Contact</h2>
			<SimpleSerialForm onData={::this.passData}>
				<div className="adj_img">
					<Dropzone onDrop={::this.dropHandler}>
						<img src={this.state.preview} width="200" height="200"/>
						<input type="hidden" name="url" value={this.state.preview} id="urlperson"/>
					</Dropzone>
				</div>
				<div>
					<label className="label">Full Name:
						<input type="text" name="fullName" id="nameperson" onChange={::this.changeHandler}/>
					</label>
				</div>
				<div>
					<label className="label">Email Address: 
						<input type="email" name="email" id="emailperson"/>
					</label>
				</div>
				<div>
					<label className="label">Telephone:
						<input type="tel" name="telephone" id="telperson"/>
					</label>
				</div>
				<div>
					<label className="label">Location:
						<input type="text" name="location" id="locationperson"/>
					</label>
				</div>
				<button>Submit</button>


			</SimpleSerialForm>
			</div>
			);
	}
}
