import BoardCreator from 'components/BoardCreator';
import { useEffect, useState } from 'react';
import Board from './components/Board';
import Layout from './components/Layout';
import Header from './components/Layout/Header';

function App() {
	const [boards, setBoards] = useState([])

	useEffect (() => {
		console.log(boards)
	},[boards])

	return (
		<>
			<Header />
			<Layout>
				<BoardCreator boards={boards} setBoards={setBoards}/>
				{boards.map(e => <Board key={e.id} boards={boards} setBoards={setBoards} board={e}/>)}
			</Layout>
		</>
	);
}

export default App;
