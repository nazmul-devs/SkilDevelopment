import React from "react";
import { Button, Container } from "react-bootstrap";
import UseServices from "../../CustomHooks/UseServices";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
	const services = UseServices();
	console.log(services);
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
			<Container className="mb-5">
				<Services>{services?.slice(0, 4)}</Services>
				<Button
					style={{ background: "#ff8c00" }}
					className="fw-bold border-0 ms-5"
				>
					Explore More Services
				</Button>
			</Container>
		</>
	);
};

export default Home;
