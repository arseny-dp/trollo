import Board from 'pages/Board'
import Main from 'pages/_Main'
import { Route } from 'react-router'

const Routes = () =>
	<>
		<Route exact path='/' component={Main} />
		<Route exact path='/board/:id' component={Board} />
		{/* <Route exact path='/' component={App} /> */}
	</>

export default Routes