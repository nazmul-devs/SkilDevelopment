import React from "react";
import UseServices from "../../CustomHooks/UseServices";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
	const services = UseServices();
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
			<Services>{services.slice(0, 4)}</Services>
		</>
	);
};

export default Home;
