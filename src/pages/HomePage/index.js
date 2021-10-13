import BoardLink from "components/Board"
import BoardCreator from "components/BoardCreator"
import { useState } from "react"
import { connect } from "react-redux"
import { addBoard } from 'actions'

const HomePage = (props) => {
	const [boards, setBoards] = useState(props.boards);

	return (
		<div>
			<BoardCreator boards={boards} setBoards={setBoards} />
			{boards.map(e => <BoardLink key={e.id} boards={boards} setBoards={setBoards} board={e} />)}
		</div>
	)
}

const mapDispatchToProps = {
	addBoard
}

const mapStateToProps = ({ boards }) => {
	return { boards }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
