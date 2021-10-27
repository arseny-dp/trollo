const ACTION_TYPES = {
	board: {
		add: 'BOARD_ADD',
		delete: 'BOARD_DELETE',
		rename: 'BOARD_RENAME',
	},
	story: {
		add: 'STORY_ADD',
		delete: 'STORY_DELETE',
		rename: 'STORY_RENAME',
	},
	task: {
		add: 'TASK_ADD',
		delete: 'TASK_DELETE',
		toggle: 'TASK_TOGGLE',
		reorder: 'TASK_REORDER',
	}
};

export default ACTION_TYPES;