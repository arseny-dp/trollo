const initialState = {
	boards: [
		{name: 'qwerty', id: 1},
		{name: 'asdfgh', id: 2}
	]
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