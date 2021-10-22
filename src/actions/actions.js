import actionTypes from "constants/actionTypes";
import { DEFAULT_BOARD_NAME, DEFAULT_STORY_NAME, DEFAULT_TASK_NAME } from "constants/defaultNames";
import { boardCounter, storiesCounter, tasksCounter } from "utils/closureCounter";

export const addBoard = (value) => {
	const id = boardCounter();
	const name = value || `${DEFAULT_BOARD_NAME} ${id}`;

	return {
		type: actionTypes.board.add,
		payload: { id, name }
	};
};

export const addStory = (value) => {
	const id = storiesCounter();
	const name = value.name || `${DEFAULT_STORY_NAME} ${id}`;
	const parentId = value.parentId;

	return {
		type: actionTypes.story.add,
		payload: { id, parentId, name }
	};
};

export const addTask = (value) => {
	const id = tasksCounter();
	const text = value.text || `${DEFAULT_TASK_NAME} ${id}`;
	const parentId = value.parentId;

	return {
		type: actionTypes.task.add,
		payload: { id, parentId, text, done: false }
	};
};

export const deleteBoard = (payload) => ({ type: actionTypes.board.delete, payload });

export const deleteStory = (payload) => ({ type: actionTypes.story.delete, payload });

export const deleteTask = (payload) => ({ type: actionTypes.task.delete, payload });

export const toggleTask = (id) => ({ type: actionTypes.task.toggle, payload: id });

export const reorderTask = (sourceId, destId, dest) => {
	return {
		type: actionTypes.task.reorder,
		payload: { sourceId, destId, dest }
	}
};