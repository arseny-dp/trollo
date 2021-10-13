import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteBoard } from 'actions';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import styles from './board.module.scss';

const BoardItem = ({ board, deleteBoard }) => {

	return (
		<div className={styles.body}>
			<div>{board.name}</div>
			<FontAwesomeIcon icon={faTrash} onClick={() => deleteBoard(board.id)} />
		</div>
	)
}

BoardItem.propTypes = {
	board: object,
}

export default connect(null, { deleteBoard })(BoardItem);
