import { useSelector } from 'react-redux';

const useBoardById = (boardId) => {

	const board = useSelector(({ boards }) => {

		const board = boards.find(
			({ id }) => id === boardId
		);

		return board;
	});

	return board;
};

export default useBoardById;
