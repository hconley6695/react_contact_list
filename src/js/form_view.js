import React, { Component, PropTypes } from 'react';
import SimpleSerialForm from 'react-simple-serial-form';

export default class FormView extends Component {
	static PropTypes = {
		onAdd: PropTypes.func.isRequired
	}

	passData(newContactData) {
		this.props.onAdd(newContactData);
	}

	render() {
		let {onAdd} = this.props;
		return (
			<div className="contact_info">
			<h2>Add a Contact</h2>
			<SimpleSerialForm onData={::this.passData}>
				<div>
					<label>Full Name:
						<input type="text" name="fullName" id="nameperson"/>
					</label>
				</div>
				<div>
					<label>Email Address: 
						<input type="email" name="email" id="emailperson"/>
					</label>
				</div>
				<div>
					<label>Telephone:
						<input type="tel" name="telephone" id="telperson"/>
					</label>
				</div>
				<div>
					<label>Location:
						<input type="text" name="location" id="locationperson"/>
					</label>
				</div>
				<div>
					<label>Link to Profile Picture:
						<input type="text" name="url" id="urlperson"/>
					</label>
				</div>
				<button>Submit</button>


			</SimpleSerialForm>
			</div>
			);
	}
}
