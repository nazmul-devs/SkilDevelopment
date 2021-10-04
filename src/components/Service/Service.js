import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Service = (props) => {
	const { title, img, lacture, price, time, type, cetagorie } = props.service;
	return (
		<Col>
			<Card>
				<Card.Img variant="top" height="300" src={img} />
				<Card.Body>
					<div className="d-flex justify-content-around">
						<p className="service-ceta rounded-pill"> {cetagorie}</p>
						<p className="course-type fw-bold">
							<i className="fas fa-signal"></i> {type}
						</p>
					</div>
					<Card.Title>{title}</Card.Title>
					<div className="d-flex justify-content-around">
						<p className="course-time rounded-pill shadow fw-bold">
							<i className="far fa-clock "></i> {time}
						</p>
						<p className="lacture">
							<i className="fas fa-video"></i> {lacture} Lectures
						</p>
					</div>
					<div className="d-flex justify-content-around">
						<h3 className="price">$ {price}</h3>
						<Button
							style={{ background: "#ff8c00" }}
							className="fw-bold border-0 px-4"
						>
							ENROLL
						</Button>
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Service;
