import ListList from "components/ListList";
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

	return (
		<>
			<h1 className={styles.caption}>
				{board.name}
			</h1>
			<ListList
				board={board}
				lists={lists}
				tasks={tasks} />
		</>
	)
}

export default BoardPage;
