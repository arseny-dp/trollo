import Board from 'pages/Board'
import { Route } from 'react-router'

const Routes = () =>
	<>
		{/* <Route exact path='/' component={App} /> */}
		<Route exact path='/board/:id' component={Board} />
		{/* <Route exact path='/' component={App} /> */}
	</>

export default Routes