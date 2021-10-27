import ACTION_TYPES from "constants/actionTypes";
import { DEFAULT_BOARD_NAME, DEFAULT_STORY_NAME, DEFAULT_TASK_NAME } from "constants/defaultNames";
import { boardCounter, storiesCounter, tasksCounter } from "utils/closureCounter";

export const addBoard = (value) => {
	const id = boardCounter();
	const name = value || `${DEFAULT_BOARD_NAME} ${id}`;

	return {
		type: ACTION_TYPES.board.add,
		payload: { id, name }
	};
};

export const addStory = (value) => {
	const id = storiesCounter();
	const name = value.name || `${DEFAULT_STORY_NAME} ${id}`;
	const parentId = value.parentId;

	return {
		type: ACTION_TYPES.story.add,
		payload: { id, parentId, name }
	};
};

export const addTask = (value) => {
	const id = tasksCounter();
	const name = value.name || `${DEFAULT_TASK_NAME} ${id}`;
	const parentId = value.parentId;

	return {
		type: ACTION_TYPES.task.add,
		payload: { id, parentId, name, done: false }
	};
};

export const deleteBoard = (payload) => ({
	type: ACTION_TYPES.board.delete,
	payload
});

export const deleteStory = (payload) => ({
	type: ACTION_TYPES.story.delete,
	payload
});

export const deleteTask = (payload) => ({
	type: ACTION_TYPES.task.delete,
	payload
});

export const toggleTask = (id) => ({
	type: ACTION_TYPES.task.toggle,
	payload: id
});

export const reorderTask = (sourceId, destInd, dest) => ({
	type: ACTION_TYPES.task.reorder,
	payload: { sourceId, destInd, dest }
});