import { addBoard } from 'actions';
import BoardItem from "components/BoardItem";
import { array } from "prop-types";
import { connect } from "react-redux";

const BoardsList = ({ boards }) => {
	return (
		<div>
			{boards.map(e =>
				<BoardItem key={e.id} board={e} />
			)}
		</div>
	)
}

BoardsList.propTypes = {
	boards: array
}

const mapStateToProps = ({ boards }) => {
	return { boards };
}

const mapDispatchToProps = { addBoard }

export default connect(mapStateToProps, mapDispatchToProps)(BoardsList);
