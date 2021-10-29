import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteBoard } from 'actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './BoardItem.module.scss';

const BoardItem = ({ board }) => {
	const dispatch = useDispatch();

	return (
		<div className={styles.body}>
			<Link
				className={styles.link}
				to={`${board.id}`}
				title={board.name}
			>
				{board.name}
			</Link>
			<div
				className={styles.delete}
				onClick={() => dispatch(deleteBoard(board.id))}
			>
				<FontAwesomeIcon icon={faTrash} />
			</div>
		</div>
	)
};

export default BoardItem;
