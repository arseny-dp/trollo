const addBoard = (name) => {
	return {
		type: 'ADD_BOARD',
		payload: name
	};
};

export {
	addBoard
};