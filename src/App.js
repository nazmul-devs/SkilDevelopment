import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Facilitys from "./components/Facilitys/Facilitys";
import About from "./components/About/About";
import UseServices from "./CustomHooks/UseServices";

function App() {
	const services = UseServices();
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/services">
					<Services>{services}</Services>
				</Route>
				<Route exact path="/facilitys">
					<Facilitys />
				</Route>
				<Route exact path="/about">
					<About />
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
