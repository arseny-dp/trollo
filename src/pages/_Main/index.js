import BoardCreator from "components/BoardCreator"
import BoardLink from "components/BoardLink"
import { useState } from "react"

const Main = () => {
	const [boards, setBoards] = useState([])

	return (
		<div>
			<BoardCreator boards={boards} setBoards={setBoards} />
			{boards.map(e => <BoardLink key={e.id} boards={boards} setBoards={setBoards} board={e} />)}
		</div>
	)
}

export default Main
