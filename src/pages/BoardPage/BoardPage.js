import ListCreator from "components/ListCreator";
import ListList from "components/ListList";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import styles from './board-page.module.scss';

const BoardPage = ({ board, filteredLists: lists }) => {
	return (
		<>
			{board.name}
			<div className={styles.wrapper}>
			<ListList lists={lists} />
				<ListCreator boardId={board.id} />
			</div>
		</>
	)
}

const mapState = ({ boards, lists }, { match }) => {
	const { id: boardId } = match.params;
	const board = boards.find(
		({ id }) => id === parseInt(boardId)
	);
	const filteredLists = lists.filter(
		({ parentId }) => parentId === parseInt(boardId)
	);
	return (
		{ board, filteredLists }
	)
}

export default withRouter(connect(mapState)(BoardPage))
