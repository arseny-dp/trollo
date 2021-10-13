import BoardPage from 'pages/BoardPage'
import HomePage from 'pages/HomePage'
import { Route } from 'react-router'

const Routes = () =>
	<>
		<Route exact path='/' component={HomePage} />
		<Route exact path='/board/:id' component={BoardPage} />
		{/* <Route exact path='/' component={App} /> */}
	</>

export default Routes