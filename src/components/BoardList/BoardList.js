import BoardItem from "components/BoardItem";
import { array } from "prop-types";
import { connect } from "react-redux";
import styles from './board-list.module.scss'

const BoardList = ({ boards }) => {
	return (
		<div className={styles.body}>
			{boards.map(e =>
				<BoardItem key={e.id} board={e} />
			)}
		</div>
	)
};

BoardList.propTypes = {
	boards: array
};

const mapState = ({ boards }) => ({ boards });

export default connect(mapState)(BoardList);
