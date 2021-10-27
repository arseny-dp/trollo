import StoryList from "components/StoryList";
import useBoardById from "hooks/useBoardById";
import { useParams } from "react-router";
import styles from './board-page.module.scss';

const BoardPage = () => {
	const { id: boardId } = useParams();
	const board = useBoardById(+boardId);

	return (
		<div className={styles.body}>
			<h1 className={styles.caption}>
				{board.name}
			</h1>
			<StoryList parentId={board.id} />
		</div>
	)
}

export default BoardPage;
