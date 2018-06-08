const ContactReducer = (state, action) => {
	switch(action.type) {
		case 'ADD_CONTACT': {
			var contact = action.payload;
			contact.id = new Date().getTime();

			return [
				...state,
				contact
			];
			break;
		}

		case 'DELETE_CONTACT': {
			const index = state.findIndex(contact => contact.id === action.payload);
			var contacts = [...state];

			contacts.splice(index,1);

			return contacts;
			break;
		}
	}

	return state || [];
};

export default ContactReducer;