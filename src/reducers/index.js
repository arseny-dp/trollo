const initialState = {
	boards: [
		{ id: 1, name: 'qwerty' },
		{ id: 2, name: 'asdfgh' }
	]
}

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
			const item = state.boards.find(({id}) => id === action.payload);
            console.log("🚀 ~ file: index.js ~ line 21 ~ reducer ~ item", item);
			return state;

		default:
			return state;
	}
}

export default reducer