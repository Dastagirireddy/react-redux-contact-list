import React, {Component} from 'react';
import Contact from './Contact';

class ContactList extends Component {
	render() {
		const contactsList = this.props.contacts.map((contact, index) => 
			(<Contact key={index} contact={contact} deleteContact={this.props.deleteContact} />)
		);

		return (
			<div>
			{this.props.contacts.length > 0 &&
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Gender</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{contactsList}
					</tbody>
				</table>
			}
			{
				this.props.contacts.length === 0 &&
				<div>Your contacts are empty</div>
			}
			</div>
		);
	}
}

export default ContactList;