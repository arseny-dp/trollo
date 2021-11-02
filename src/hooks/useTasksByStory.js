import { useSelector } from 'react-redux';

const useTasksByStory = (id) => {
	const tasks = useSelector(({ tasks }) => {

		const filteredTasks = tasks.filter(
			({ parentId }) => parentId === id
		);

		return filteredTasks;
	});

	return tasks;
};

export default useTasksByStory;
