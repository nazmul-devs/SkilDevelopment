import React from "react";
import { Container, Row } from "react-bootstrap";
import Facility from "../Facility/Facility";

const Facilitys = (props) => {
	const facilitys = props.children;
	return (
		<Container className="facility-container text-center">
			<Row xs={1} md={2} className="g-4">
				{facilitys?.map((facility) => (
					<Facility key={facility.id} facility={facility} />
				))}
			</Row>
		</Container>
	);
};

export default Facilitys;
