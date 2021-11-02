import { useSelector } from 'react-redux';

const useStoriesByBoard = (id) => {
	const stories = useSelector(({ stories }) => {

		const filteredStories = stories.filter(
			({ parentId }) => parentId === id
		);

		return filteredStories;
	});

	return stories;
};

export default useStoriesByBoard;
