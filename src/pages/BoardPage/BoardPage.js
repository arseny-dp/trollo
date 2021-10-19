import ListCreator from "components/ListCreator";
import ListList from "components/ListList";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styles from './board-page.module.scss';

const BoardPage = () => {
	const { id: boardId } = useParams();
	const { board, filteredLists: lists, structuredTasks: tasks } = useSelector(state => {
		const { boards, lists, tasks } = state;
		const board = boards.find(
			({ id }) => id === +boardId
		);

		const filteredLists = lists.filter(
			({ parentId }) => parentId === +boardId
		);
		let structuredTasks = {};
		filteredLists.forEach(e => {
			structuredTasks[e.id] = tasks.filter(
				({ parentId }) => parentId === e.id
			)
		});
		return (
			{ board, filteredLists, structuredTasks }
		)
	})

	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(fetchBoard(params.id));
	// }, []);
	useEffect(() => {
		console.log('page rendered')
	}, [])

	return (
		<>
			{board.name}
			<ListList board={board} lists={lists} tasks={tasks} />
		</>
	)
}

export default BoardPage;
