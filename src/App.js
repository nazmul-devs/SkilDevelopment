import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
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
import UseFacilitys from "./CustomHooks/UseFacilitys";

function App() {
	const services = UseServices();
	const facilitys = UseFacilitys();
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
					<Facilitys>{facilitys}</Facilitys>
				</Route>
				<Route exact path="/about">
					<About>
						<Button
							style={{ background: "#ff8c00" }}
							className="fw-bold border-0"
						>
							ENROLLED TODAY
						</Button>
					</About>
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
