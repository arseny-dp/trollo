import Layout from "components/Layout"
import Header from "components/Layout/Header"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "routes"

const App = () => {

	return (
		<>
			<Router>
				<Header />
				<Layout>
					<Routes />
				</Layout>
			</Router>
		</>
	)
}

export default App
