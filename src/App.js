import ErrorBoundary from "components/ErrorBoundry";
import Layout from "components/Layout";
import Header from "components/Layout/Header";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "routes";

const App = () => {

	return (
		<>
			<ErrorBoundary>
				<Router>
					<Header />
					<Layout>
						<Switch>
							<Routes />
						</Switch>
					</Layout>
				</Router>
			</ErrorBoundary>
		</>
	)
}

export default App;
