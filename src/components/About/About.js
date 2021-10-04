import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import about from "../../img/about-us.jfif";

const About = (props) => {
	const button = props.children;
	return (
		<Container style={{ height: "65vh", marginTop: "140px" }}>
			<Row className="my-5">
				<Col xs={12} md={7}>
					<h2>We Have The Best Instructors Available In The City</h2>
					<div className="mt-5">
						<p>
							<i class="fas fa-check"></i> Full Lifetime Access
						</p>
						<p>
							<i class="fas fa-check"></i> 20+ Downloadable Resources
						</p>
						<p>
							<i class="fas fa-check"></i> Certificate Of Completion
						</p>
						<p>
							<i class="fas fa-check"></i> Free Trial 7 Days
						</p>
					</div>
					{button}
				</Col>
				<Col xs={12} md={5}>
					<img src={about} className="img-fluid rounded" alt="" />
				</Col>
			</Row>
		</Container>
	);
};

export default About;
