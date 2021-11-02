import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { number, shape, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { boardDeleted } from 'store/boardsSlice';
import styles from './BoardItem.module.scss';

const BoardItem = ({ board }) => {
	const dispatch = useDispatch();

	return (
		<div className={styles.body}>
			<Link
				className={styles.link}
				to={String(board.id)}
				title={board.name}
			>
				{board.name}
			</Link>
			<div
				className={styles.delete}
				onClick={() => dispatch(boardDeleted(board.id))}
			>
				<FontAwesomeIcon icon={faTrash} />
			</div>
		</div>
	);
};

BoardItem.propTypes = {
	board: shape({
		id: number.isRequired,
		name: string,
	}).isRequired
};

export default BoardItem;
