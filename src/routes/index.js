import AddBoard from 'pages/AddBoard'
import BoardPage from 'pages/BoardPage'
import { Route } from 'react-router'

const Routes = () =>
	<>
		<Route exact path='/' component={AddBoard} />
		<Route exact path='/board/:id' component={BoardPage} />
		{/* <Route exact path='/' component={App} /> */}
	</>

export default Routes