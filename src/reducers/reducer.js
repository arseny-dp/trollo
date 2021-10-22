import actionTypes from "constants/actionTypes";

const initialState = {
	boards: [
		{ id: 1, name: 'Доска 1' },
		{ id: 2, name: 'Доска 2' }
	],
	stories: [
		{ id: 1, parentId: 1, name: 'Список 1' },
		{ id: 2, parentId: 2, name: 'Список 2' },
		{ id: 3, parentId: 1, name: 'Список 3' }
	],
	tasks: [
		{ id: 1, parentId: 1, text: 'Элемент списка 1', done: false },
		{ id: 2, parentId: 1, text: 'Элемент списка 2', done: false },
		{ id: 3, parentId: 2, text: 'Элемент списка 3', done: true },
		{ id: 4, parentId: 2, text: 'Элемент списка 4', done: false },
		{ id: 5, parentId: 1, text: 'Элемент списка 5', done: true }
	]
};

const getUpdatedState = (state, tableName, newTableState) => ({ ...state, [tableName]: newTableState });

const getIndexFromId = (table, id) => table.findIndex(({ id: itemId }) => itemId === id);

const getDestinationIndex = (sourceIndex, destId, dest, table) => {
	if(destId === undefined) return table.length - 1;
	let result = getIndexFromId(table, destId);
	if (table[sourceIndex].parentId !== dest && sourceIndex < result) {
		result--;
	}
	return result
}

const reorderItems = (state, tableName, sourceId, destId, dest) => {
	if (sourceId === destId) return state;
	const table = state[tableName];
	const sourceIndex = getIndexFromId(table, sourceId);
	const destIndex = getDestinationIndex(sourceIndex, destId, dest, table);
	const tableClone = Array.from(table);
	const [movedItem] = tableClone.splice(sourceIndex, 1);
	movedItem.parentId = dest;
	tableClone.splice(destIndex, 0, movedItem);
	return getUpdatedState(state, tableName, tableClone);
}

const modifyElement = (state, tableName, id, changes) => {
	const table = state[tableName];
	const itemIndex = getIndexFromId(table, id);
	let newItem = table[itemIndex];

	Object.entries(changes).forEach(([key, value]) => {
		let newValue = value ? value : !newItem[key];
		newItem = { ...newItem, [key]: newValue };
	})

	return getUpdatedState(
		state,
		tableName,
		[...table.slice(0, itemIndex), newItem, ...table.slice(itemIndex + 1)]
	)
}

const addElement = (state, tableName, item) => {
	const table = state[tableName];
	return getUpdatedState(
		state,
		tableName,
		[...table, item]
	);
};

const deleteElement = (state, tableName, id, index) => {
	if (tableName === 'boards')
		state.stories.forEach((e, i) => {
			if (e.parentId === id) {
				state = deleteElement(state, 'lisstoriests', e.id, i)
			}
		});

	if (tableName === 'stories')
		state.tasks.forEach((e, i) => {
			if (e.parentId === id) {
				state = deleteElement(state, 'tasks', e.id, i)
			}
		});

	const table = state[tableName];
	const itemIndex = index ? index : getIndexFromId(table, id);
	return getUpdatedState(
		state,
		tableName,
		[...table.slice(0, itemIndex), ...table.slice(itemIndex + 1)]
	);
}

const reducer = (state = initialState, action) => {
	console.log(action.type)

	switch (action.type) {
		case actionTypes.board.add:
			return addElement(state, 'boards', action.payload);

		case actionTypes.story.add:
			return addElement(state, 'stories', action.payload);

		case actionTypes.task.add:
			return addElement(state, 'tasks', action.payload);

		case actionTypes.board.delete:
			return deleteElement(state, 'boards', action.payload);

		case actionTypes.story.delete:
			return deleteElement(state, 'stories', action.payload);

		case actionTypes.task.delete:
			return deleteElement(state, 'tasks', action.payload);

		case actionTypes.task.toggle:
			return modifyElement(state, 'tasks', action.payload, { done: undefined });

		case actionTypes.task.reorder:
			return reorderItems(state, 'tasks', action.payload.sourceId, action.payload.destId, action.payload.dest);

		default:
			return state;
	}
};

export default reducer;