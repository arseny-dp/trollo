const initialState = {
	boards: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_BOARD':
			return state;
		default:
			return state;
	}
}

export default reducer