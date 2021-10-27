import { boardRename } from "actions";
import EditableCaption from "components/EditableCaption";
import StoryList from "components/StoryList";
import { DEFAULT_BOARD_NAME } from "constants/defaultNames";
import useBoardById from "hooks/useBoardById";
import { useParams } from "react-router";
import styles from './board-page.module.scss';

const BoardPage = () => {
	const { id: boardId } = useParams();
	const board = useBoardById(+boardId);

	return (
		<div className={styles.body}>
			<h1 className={styles.caption}>
				<EditableCaption
					item={board}
					handler={boardRename}
					defaultValue={DEFAULT_BOARD_NAME} />
			</h1>
			<StoryList parentId={board.id} />
		</div>
	)
}

export default BoardPage;
