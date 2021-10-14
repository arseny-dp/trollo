import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteBoard } from 'actions';
import { func } from 'prop-types';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './board.module.scss';

const BoardItem = ({ board, deleteBoard }) => {
	return (
		<div className={styles.body}>
			<Link to={`board/${board.id}`}>{board.name}</Link>
			<FontAwesomeIcon icon={faTrash} onClick={() => deleteBoard(board.id)} />
		</div>
	)
};

BoardItem.propTypes = {
	board: object,
	deleteBoard: func
};

const mapDispatch = { deleteBoard };

export default connect(null, mapDispatch)(BoardItem);
