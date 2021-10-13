import App from 'App';
import ErrorBoundary from 'components/ErrorBoundry';
import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/base.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
			<ErrorBoundary>
		<App />
			</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('root')
);
reportWebVitals();
