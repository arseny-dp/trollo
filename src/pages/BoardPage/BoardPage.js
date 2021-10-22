import StoryList from "components/StoryList";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styles from './board-page.module.scss';

const BoardPage = () => {
	const { id: boardId } = useParams();
	const { board, filteredStories: stories, structuredTasks: tasks } = useSelector(state => {
		const { boards, stories, tasks } = state;
		const board = boards.find(
			({ id }) => id === +boardId
		);

		const filteredStories = stories.filter(
			({ parentId }) => parentId === +boardId
		);
		let structuredTasks = {};
		filteredStories.forEach(e => {
			structuredTasks[e.id] = tasks.filter(
				({ parentId }) => parentId === e.id
			)
		});
		return {
			board,
			filteredStories,
			structuredTasks
		}
	})

	return (
		<div className={styles.body}>
			<h1 className={styles.caption}>
				{board.name}
			</h1>
			<StoryList
				board={board}
				stories={stories}
				tasks={tasks} />
		</div>
	)
}

export default BoardPage;
