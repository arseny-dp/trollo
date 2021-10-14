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
		{ id: 1, parentId: 1, text: 'Task 1', done: 'false' },
		{ id: 2, parentId: 1, text: 'Task 2', done: 'true' }
	]
};


const reducer = (state = initialState, action) => {
	console.log(action.type)

	switch (action.type) {
		case 'BOARD_ADD':
			return {
				...state,
				boards: [
					...state.boards,
					action.payload
				]
			};

		case 'BOARD_DELETE':
			const itemIndex = state.boards.findIndex(({ id }) => id === action.payload);
			return {
				...state,
				boards: [
					...state.boards.slice(0, itemIndex),
					...state.boards.slice(itemIndex + 1)
				]
			};

		case 'LIST_ADD':
			return {
				...state,
				lists: [
					...state.lists,
					action.payload
				]
			};

		case 'TASK_ADD':
			return {
				...state,
				tasks: [
					...state.tasks,
					action.payload
				]
			};

		case 'TASK_TOGGLE':
			const taskIndex = state.tasks.findIndex(({ id }) => id === action.payload);
			return {
				...state,
				tasks: [
					...state.tasks.slice(0, taskIndex),
					{...state.tasks[taskIndex], done: !state.tasks[taskIndex].done},
					...state.tasks.slice(taskIndex + 1)
				]
			};

		default:
			return state;
	}
};

export default reducer;