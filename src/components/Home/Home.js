import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import UseServices from "../../CustomHooks/UseServices";
import About from "../About/About";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
	const services = UseServices();
	const history = useHistory();
	const hanldeExploreMore = () => {
		history.push("/services");
	};
	return (
		<>
			<div className="home-banner">
				<div className="banner-text ps-5 text-center w-50">
					<h3>
						improve and grow up your skill with <br />
						<span className="company-title">Skill Development</span>{" "}
					</h3>
				</div>
			</div>
			<Container className="mt-5">
				<Services>{services?.slice(0, 4)}</Services>
				<Button
					onClick={() => hanldeExploreMore()}
					style={{ background: "#ff8c00" }}
					className="fw-bold border-0 ms-5"
				>
					Explore More Services
				</Button>
			</Container>

			<About />
		</>
	);
};

export default Home;
