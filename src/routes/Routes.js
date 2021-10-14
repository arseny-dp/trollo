import BoardPage from 'pages/BoardPage';
import HomePage from 'pages/HomePage';
import { Route } from 'react-router';

const Routes = () =>
	<>
		<Route
			path='/'
			component={HomePage}
			exact />
		<Route
			path='/board/:id'
			component={BoardPage}
			exact />
	</>

export default Routes;