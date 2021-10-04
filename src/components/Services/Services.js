import React from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = (props) => {
	const services = props.children;
	return (
		<Container className="text-center px-5 mb-5">
			<h2 className="mt-5 fs-1 fw-bolder">Our Services</h2>
			<p className="fs-4">
				we provide our best for improve and grow up your skill
			</p>
			<Row xs={1} md={3} className="g-4">
				{services?.map((service) => (
					<Service key={service.id} service={service} />
				))}
			</Row>
		</Container>
	);
};

export default Services;
