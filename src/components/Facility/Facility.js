import React from "react";
import { Col } from "react-bootstrap";
import "./Facility.css";

const Facility = (props) => {
	const { img, title, description } = props.facility;
	return (
		<Col>
			<div className="facility-cart  p-5  text-center">
				<div className="facility-img">
					<img src={img} className="mx-auto" alt="" />
				</div>
				<div className="facility-body ">
					<h2 className="title my-3">{title}</h2>
					<p className="text-justify">{description}</p>
				</div>
			</div>
		</Col>
	);
};

export default Facility;
