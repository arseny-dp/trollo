import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { array, object } from 'prop-types';
import styles from './board.module.scss';

const BoardLink = props => {
	const {
		board,
		boards,
		setBoards
	} = props

	const deleteBoard = () => {
		let index = boards.indexOf(board);
		let newBoards = boards.slice(0, index).concat(boards.slice(index + 1));
		setBoards(newBoards);
	}

	return (
		<div className={styles.body}>
			<div>{board.name}</div>
			<FontAwesomeIcon icon={faTrash} onClick={deleteBoard} />
		</div>
	)
}

BoardLink.propTypes = {
	board: object,
	boards: array
}

export default BoardLink;
