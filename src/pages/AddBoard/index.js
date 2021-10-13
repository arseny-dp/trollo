import Board from "components/Board"
import BoardCreator from "components/BoardCreator"
import { useEffect, useState } from "react"

const AddBoard = () => {
	const [boards, setBoards] = useState([])

	useEffect(() => {
		console.log(boards)
	}, [boards])
	return (
		<>
			<BoardCreator boards={boards} setBoards={setBoards} />
			{boards.map(e => <Board key={e.id} boards={boards} setBoards={setBoards} board={e} />)}
		</>
	)
}

export default AddBoard
