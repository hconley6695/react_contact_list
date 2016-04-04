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
			<SimpleSerialForm onData=(this.passData)>
				<div>
					<label>Full Name:
						<input type="text" name="fullname"/>
					</label>
				</div>
				<div>
					<label>Email Address: 
						<input type="email" name="email_address"/>
					</label>
				</div>
				<div>
					<label>Telephone:
						<input type="tel" name="telephone"/>
					</label>
				</div>
				<div>
					<label>Location:
						<input type="text" name="location"/>
					</label>
				</div>
				<div>
					<label>Link to Profile Picture:
						<input type="text" name="profile_pic"/>
					</label>
				</div>
				<button>Submit</button>


			</SimpleSerialForm>





			</div>


			)


	}
}
