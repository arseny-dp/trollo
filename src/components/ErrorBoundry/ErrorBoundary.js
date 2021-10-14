import Error from 'components/Error';
import React, { Component } from 'react';

export default class ErrorBoundary extends Component {

	state = { hasError: false };

	static getDerivedStateFromError(error) {
		return { hasError: true };
	};

	render() {
		if (this.state.hasError) {
			<Error />
		}

		return this.props.children;
	};
};
