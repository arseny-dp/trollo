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
};

BoardsList.propTypes = {
	boards: array
};

const mapState = ({ boards }) => ({ boards });

export default connect(mapState)(BoardsList);
