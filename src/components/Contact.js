import React, {Component} from 'react';

class Contact extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.contact.firstname}</td>
				<td>{this.props.contact.lastname}</td>
				<td>{this.props.contact.email}</td>
				<td>{this.props.contact.phone}</td>
				<td>{this.props.contact.gender}</td>
				<td><button onClick={this.props.deleteContact.bind(this, this.props.contact.id)} className="btn btn-sm"><span className="fa-trash-o"></span></button></td>
			</tr>
		);
	}
}

export default Contact;