import { DEFAULT_BOARD_NAME } from "constants/default";

export const addBoard = (value) => {
	const id = Date.now();
	const name = value || DEFAULT_BOARD_NAME;

	return {
		type: 'ADD_BOARD',
		payload: { id, name }
	};
};

export const deleteBoard = (payload) => ({ type: 'DELETE_BOARD', payload });