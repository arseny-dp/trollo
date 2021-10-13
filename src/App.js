import BoardCreator from "components/BoardCreator"
import BoardLink from "components/BoardLink"
import Layout from "components/Layout"
import Header from "components/Layout/Header"
import { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "routes"

const App = () => {
	const [boards, setBoards] = useState([])

	return (
		<>
			<Router>
				<Header />
				<Layout>
					<Routes />
					<BoardCreator boards={boards} setBoards={setBoards} />
					{boards.map(e => <BoardLink key={e.id} boards={boards} setBoards={setBoards} board={e} />)}
				</Layout>
			</Router>
		</>
	)
}

export default App
