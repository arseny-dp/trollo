import { createSlice } from '@reduxjs/toolkit';
import { tasksCounter } from 'utils/closureCounter';


const initialState = [
	{ id: 1, parentId: 1, name: 'Элемент списка 1', done: false },
	{ id: 2, parentId: 1, name: 'Элемент списка 2', done: false },
	{ id: 3, parentId: 2, name: 'Элемент списка 3', done: true },
	{ id: 4, parentId: 2, name: 'Элемент списка 4', done: false },
	{ id: 5, parentId: 1, name: 'Элемент списка 5', done: true }
];

const getDestinationIndex = (destInd, dest, table) => {
	let ind = destInd;
	let moveTo = table.findIndex(({ parentId }, i) => {
		const isCurrentTable = parentId === dest;
		let check = (isCurrentTable && i === ind);
		if (!isCurrentTable) ind++;
		return check;
	});
	if (moveTo < 0) moveTo = table.length;
	return moveTo;
};

const { actions, reducer: tasksReducer } = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		taskAdded: (state, action) => {
			console.log(action);
			state.push({ ...action.payload, id: tasksCounter() });
		},

		taskDeleted: (state, action) => {
			console.log(action);
			const itemIndex = state.findIndex(({ id }) => id === action.payload);
			state.splice(itemIndex, 1);
		},

		taskToggled: (state, action) => {
			console.log(action);
			const item = state.find(({ id }) => id === action.payload);
			item.done = !item.done;
		},

		tasksReordered: (state, action) => {
			console.log(action);
			const { sId, dInd, dest } = action.payload;
			const sourceIndex = state.findIndex(({ id }) => id === sId);
			const [movedItem] = state.splice(sourceIndex, 1);
			console.log(movedItem);
			const moveTo = getDestinationIndex(dInd, dest, state);
			movedItem.parentId = dest;
			state.splice(moveTo, 0, movedItem);
		},
	},
});

export const {
	taskAdded,
	taskDeleted,
	taskToggled,
	tasksReordered,
} = actions;

export default tasksReducer;