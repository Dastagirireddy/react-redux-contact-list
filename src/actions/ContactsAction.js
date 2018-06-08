export const addContact = (payload) => ({
	type: 'ADD_CONTACT',
	payload: payload
});

export const deleteContact = (id) => ({
	type: 'DELETE_CONTACT',
	payload: id
});