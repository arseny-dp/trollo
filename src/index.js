import App from 'App';
import ErrorBoundary from 'components/ErrorBoundry';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import 'styles/base.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
reportWebVitals();
