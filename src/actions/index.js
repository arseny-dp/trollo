import { DEFAULT_BOARD_NAME, DEFAULT_LIST_NAME, DEFAULT_TASK_NAME } from "constants/default";
import { boardCounter, listsCounter, tasksCounter } from "utils/closureCounter";

export const addBoard = (value) => {
	const id = boardCounter();
	const name = value || `${DEFAULT_BOARD_NAME} ${id}`;

	return {
		type: 'BOARD_ADD',
		payload: { id, name }
	};
};

export const addList = (value) => {
	const id = listsCounter();
	const name = value.name || `${DEFAULT_LIST_NAME} ${id}`;
	const parentId = value.parentId;

	return {
		type: 'LIST_ADD',
		payload: { id, parentId, name }
	};
};

export const addTask = (value) => {
	const id = tasksCounter();
	const text = value.text || `${DEFAULT_TASK_NAME} ${id}`;
	const parentId = value.parentId;

	return {
		type: 'TASK_ADD',
		payload: { id, parentId, text, done: false }
	};
};

export const deleteBoard = (payload) => ({ type: 'BOARD_DELETE', payload });

export const deleteList = (payload) => ({ type: 'LIST_DELETE', payload });

export const deleteTask = (payload) => ({ type: 'TASK_DELETE', payload });

export const toggleTask = (id) => ({ type: 'TASK_TOGGLE', payload: id });

export const reorderTask = (sourceId, destId, dest) => {
	return {
		type: 'TASK_REORDER',
		payload: { sourceId, destId, dest }
	}
};