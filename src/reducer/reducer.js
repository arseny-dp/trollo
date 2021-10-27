import ACTION_TYPES from "constants/actionTypes";

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
		{ id: 1, parentId: 1, name: 'Элемент списка 1', done: false },
		{ id: 2, parentId: 1, name: 'Элемент списка 2', done: false },
		{ id: 3, parentId: 2, name: 'Элемент списка 3', done: true },
		{ id: 4, parentId: 2, name: 'Элемент списка 4', done: false },
		{ id: 5, parentId: 1, name: 'Элемент списка 5', done: true }
	],
	tableChild: {
		boards: 'stories',
		stories: 'tasks'
	}
};

const getUpdatedState = (state, tableName, newTableState) => ({ ...state, [tableName]: newTableState });

const getIndexFromId = (table, id) => table.findIndex(({ id: itemId }) => itemId === id);

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
}

const reorderItems = (state, tableName, sourceId, destInd, dest) => {
	const table = state[tableName];
	const sourceIndex = getIndexFromId(table, sourceId);
	const tableClone = Array.from(table);
	const [movedItem] = tableClone.splice(sourceIndex, 1);
	const moveTo = getDestinationIndex(destInd, dest, tableClone);
	movedItem.parentId = dest;
	tableClone.splice(moveTo, 0, movedItem);
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
	const childTable = state.tableChild[tableName];
	if (childTable) {
		state[childTable].forEach((e, i) => {
			if (e.parentId === id) {
				state = deleteElement(state, childTable, e.id, i)
			}
		})
	}

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
		case ACTION_TYPES.board.add:
			return addElement(state, 'boards', action.payload);

		case ACTION_TYPES.story.add:
			return addElement(state, 'stories', action.payload);

		case ACTION_TYPES.task.add:
			return addElement(state, 'tasks', action.payload);

		case ACTION_TYPES.board.delete:
			return deleteElement(state, 'boards', action.payload);

		case ACTION_TYPES.story.delete:
			return deleteElement(state, 'stories', action.payload);

		case ACTION_TYPES.task.delete:
			return deleteElement(state, 'tasks', action.payload);

		case ACTION_TYPES.task.toggle:
			return modifyElement(state, 'tasks', action.payload, { done: undefined });

		case ACTION_TYPES.task.reorder:
			return reorderItems(state, 'tasks', action.payload.sourceId, action.payload.destInd, action.payload.dest);

		case ACTION_TYPES.story.rename:
			return modifyElement(state, 'stories', action.payload.id, { name: action.payload.name });

		case ACTION_TYPES.board.rename:
			return modifyElement(state, 'boards', action.payload.id, { name: action.payload.name });

		default:
			return state;
	}
};

export default reducer;