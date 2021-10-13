import Layout from 'components/Layout';
import Header from 'components/Layout/Header';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';
import 'styles/base.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Layout>
				<Routes />
			</Layout>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
reportWebVitals();
