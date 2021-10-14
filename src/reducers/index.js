const initialState = {
	boards: [
		{ id: 1, name: 'Board 1' },
		{ id: 2, name: 'Board 2' }
	]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_BOARD':
			return {
				...state,
				boards: [
					...state.boards,
					action.payload
				]
			};

		case 'DELETE_BOARD':
			const item = state.boards.find(({ id }) => id === action.payload);
			console.log("🚀 ~ file: index.js ~ line 21 ~ reducer ~ item", item);
			return state;

		default:
			return state;
	}
};

export default reducer;