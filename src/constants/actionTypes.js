const ACTION_TYPES = {
	board: {
		add: 'BOARD_ADD',
		delete: 'BOARD_DELETE',
	},
	story: {
		add: 'STORY_ADD',
		delete: 'STORY_DELETE',
	},
	task: {
		add: 'TASK_ADD',
		delete: 'TASK_DELETE',
		toggle: 'TASK_TOGGLE',
		reorder: 'TASK_REORDER',
	}
};

export default ACTION_TYPES;