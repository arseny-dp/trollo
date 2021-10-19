const initialState = {
	boards: [
		{ id: 1, name: 'Board 1' },
		{ id: 2, name: 'Board 2' }
	],
	lists: [
		{ id: 1, parentId: 1, name: 'List 1' },
		{ id: 2, parentId: 1, name: 'List 2' },
		{ id: 3, parentId: 2, name: 'List 3' }
	],
	tasks: [
		{ id: 1, parentId: 1, text: 'Task 1', done: false },
		{ id: 2, parentId: 1, text: 'Task 2', done: false },
		{ id: 3, parentId: 2, text: 'Task 3', done: true },
		{ id: 4, parentId: 2, text: 'Task 4', done: false },
		{ id: 5, parentId: 1, text: 'Task 5', done: true }
	]
};

const getUpdatedState = (state, tableName, newTableState) => ({ ...state, [tableName]: newTableState });

// const getUpdatedArray = (state, tableName, index, item) => ({});

const getIndexFromId = (table, id) => table.findIndex(({ id: itemId }) => itemId === id);

const reorderItems = (state, tableName, sourceId, destId, dest) => {
	if (sourceId === destId) return state;
	const table = state[tableName];
	const itemIndex = getIndexFromId(table, sourceId);
	let newIndex;
	const tableClone = Array.from(table);
	newIndex = destId === undefined ? tableClone.length - 1 : getIndexFromId(tableClone, destId);
	const [movedItem] = tableClone.splice(itemIndex, 1);
	if (movedItem.parentId !== dest && sourceId < destId) {
		newIndex--;
	}
	movedItem.parentId = dest;
	tableClone.splice(newIndex, 0, movedItem);
	return getUpdatedState(state, tableName, tableClone);
}

const modifyElement = (state, tableName, id, changes) => {
	const table = state[tableName];
	const itemIndex = getIndexFromId(table, id);
	let newItem = table[itemIndex];

	Object.entries(changes).map(([key, value]) => {
		let newValue = value ? value : !newItem[key];
		newItem = { ...newItem, [key]: newValue };
		return {}
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
		state.lists.forEach((e, i) => {
			if (e.parentId === id) {
				state = deleteElement(state, 'lists', e.id, i)
			}
		});

	if (tableName === 'lists')
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
		case 'BOARD_ADD':
			return addElement(state, 'boards', action.payload);

		case 'BOARD_DELETE':
			return deleteElement(state, 'boards', action.payload);

		case 'LIST_ADD':
			return addElement(state, 'lists', action.payload);

		case 'TASK_ADD':
			return addElement(state, 'tasks', action.payload);

		case 'TASK_TOGGLE':
			return modifyElement(state, 'tasks', action.payload, { done: undefined });

		case 'TASK_REORDER':
			return reorderItems(state, 'tasks', action.payload.sourceId, action.payload.destId, action.payload.dest);

		default:
			return state;
	}
};

export default reducer;