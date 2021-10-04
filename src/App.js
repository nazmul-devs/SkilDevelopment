import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
