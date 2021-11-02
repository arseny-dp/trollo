import EditableCaption from 'components/EditableCaption';
import useBoardById from 'hooks/useBoardById';
import { number } from 'prop-types';
import { useDispatch } from 'react-redux';
import { boardRenamed } from 'store/boardsSlice';
import styles from './BoardCaption.module.scss';

const BoardCaption = ({ id }) => {
	const dispatch = useDispatch();
	const board = useBoardById(id);
	const renameHandler = (value) => dispatch(boardRenamed({id: board.id, name: value}));

	return (
		<h1 className={styles.caption}>
			<div>
				<EditableCaption value={board.name} handler={renameHandler} />
			</div>
		</h1>
	);
};

BoardCaption.propTypes = {
	id: number.isRequired,
};

export default BoardCaption;
