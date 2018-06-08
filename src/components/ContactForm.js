import React, {Component} from 'react';

class ContactForm extends Component {
	componentWillMount() {
		this.setState(this.getInitialValue());
	}

	getInitialValue() {
		return {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			gender: 'male'
		};
	}

	handleChange(inputType, e) {
		this.setState({
			[inputType]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addContact(this.state);
		this.setState(this.getInitialValue());
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group">
				  <label htmlFor="Firstname">Firstname</label>
				  <input required="true" onChange={this.handleChange.bind(this,'firstname')} value={this.state.firstname} type="text" className="form-control" id="Firstname" placeholder="Enter firstname" />
				</div>
				<div className="form-group">
				  <label htmlFor="Lastname">Lastname</label>
				  <input required="true" onChange={this.handleChange.bind(this,'lastname')} value={this.state.lastname} type="text" className="form-control" id="Lastname" placeholder="Enter lastname" />
				</div>
			  <div className="form-group">
			    <label htmlFor="email">Email address</label>
			    <input required="true" onChange={this.handleChange.bind(this,'email')} value={this.state.email} type="email" className="form-control" id="email" placeholder="Enter email" />
			  </div>
			  <div className="form-group">
			    <label htmlFor="phone">Phone</label>
			    <input required="true" onChange={this.handleChange.bind(this,'phone')} value={this.state.phone} type="tel" className="form-control" id="phone" placeholder="Enter phone number" />
			  </div>
			  <div className="form-group">
			  Gender
				<div className="form-check">
				  <input onChange={this.handleChange.bind(this,'gender')} checked={this.state.gender === 'male'} className="form-check-input" type="radio" name="gender" id="male" value="male" />
				  <label className="form-check-label" htmlFor="male">
				    Male
				  </label>
				</div>
				<div className="form-check">
				  <input onChange={this.handleChange.bind(this,'gender')} checked={this.state.gender === 'female'} className="form-check-input" type="radio" name="gender" id="female" value="female" />
				  <label className="form-check-label" htmlFor="female">
				    Female
				  </label>
				</div>
			  </div>
			  <button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

export default ContactForm;