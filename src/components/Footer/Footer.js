import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-dark text-white p-3">
			<Container>
				<Row>
					<Col sm={12} md={7}>
						<p>
							Copyright © 2021 Skill Development - All rights reserved
						</p>
					</Col>
					<Col sm={12} md={5}>
						<div className="quick-link d-flex">
							<Link className="mx-3" to="/services">
								Service
							</Link>
							<Link className="mx-3" to="/cources">
								Cources
							</Link>
							<Link className="mx-3" to="/about">
								About Us
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
