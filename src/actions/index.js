export const addBoard = (value) => {
	let id = Date.now();
	let name = value || 'Unnamed ' + id;

	return {
		type: 'ADD_BOARD',
		payload: { id, name }
	};
};

export const deleteBoard = (payload) => ({ type: 'DELETE_BOARD', payload })