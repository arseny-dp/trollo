import { boardRename } from "actions";
import EditableCaption from "components/EditableCaption";
import useBoardById from "hooks/useBoardById";
import { useDispatch } from "react-redux";
import styles from './BoardCaption.module.scss';

const BoardCaption = ({ id }) => {
	const dispatch = useDispatch();
	const board = useBoardById(id);
	const renameHandler = (value) => dispatch(boardRename(board.id, value));

	return (
		<h1 className={styles.caption}>
			<div>
				<EditableCaption
					value={board.name}
					handler={renameHandler} />
			</div>
		</h1>
	)
}

export default BoardCaption
