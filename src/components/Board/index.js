import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { array, func, object } from 'prop-types';
import React from 'react';
import styles from './board.module.scss';

const Board = props => {
	const {
		board,
		boards,
		setBoards
	} = props

	console.log(styles)
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


Board.propTypes = {
	board: object,
	boards: array,
	setBoards: func
}

export default Board
