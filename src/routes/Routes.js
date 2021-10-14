import BoardPage from 'pages/BoardPage';
import HomePage from 'pages/HomePage';
import { Route } from 'react-router';

const Routes = () =>
	<>
		<Route
			path='/boards/'
			component={HomePage}
			exact />
		<Route
			path='/boards/:id'
			component={BoardPage}
			exact />
	</>

export default Routes;