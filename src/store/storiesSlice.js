import { createSlice } from '@reduxjs/toolkit';
import { storiesCounter } from 'utils/closureCounter';


const initialState = [
	{ id: 1, parentId: 1, name: 'Список 1' },
	{ id: 2, parentId: 2, name: 'Список 2' },
	{ id: 3, parentId: 1, name: 'Список 3' }
];

const { actions, reducer: storiesReducer } = createSlice({
	name: 'stories',
	initialState,
	reducers: {
		storyAdded: (state, action) => {
			console.log(action);
			state.push({ ...action.payload, id: storiesCounter() });
		},

		storyDeleted: (state, action) => {
			console.log(action);
			const itemIndex = state.findIndex(({ id }) => id === action.payload);
			state.splice(itemIndex, 1);
		},

		storyRenamed: (state, action) => {
			console.log(action);
			const item = state.find(({id}) => id === action.payload.id);
			item.name = action.payload.name;
		},
	},
});

export const {
	storyAdded,
	storyDeleted,
	storyRenamed,
} = actions;

export default storiesReducer;