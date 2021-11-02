import { createSlice } from '@reduxjs/toolkit';
import { boardCounter } from 'utils/closureCounter';

const initialState = [
	{ id: 1, name: 'Доска 1' },
	{ id: 2, name: 'Доска 2' }
];

const { actions, reducer: boardsReducer } = createSlice({
	name: 'boards',
	initialState,
	reducers: {
		boardAdded: (state, action) => {
			console.log(action);
			state.push({ id: boardCounter(), name: action.payload });
		},

		boardDeleted: (state, action) => {
			console.log(action);
			const itemIndex = state.findIndex(({ id }) => id === action.payload);
			state.splice(itemIndex, 1);
		},

		boardRenamed: (state, action) => {
			console.log(action);
			const item = state.find(({id}) => id === action.payload.id);
			item.name = action.payload.name;
		},
	}
});

export const {
	boardAdded,
	boardDeleted,
	boardRenamed,
} = actions;

export default boardsReducer;