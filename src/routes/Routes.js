import BoardPage from 'pages/BoardPage';
import HomePage from 'pages/HomePage';
import { Redirect, Route } from 'react-router';

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
		<Route path='/' exact>
			<Redirect to='/boards/' />
		</Route>
	</>;

export default Routes;