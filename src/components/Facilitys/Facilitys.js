import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import UseFacilitys from "../../CustomHooks/UseFacilitys";
import Facility from "../Facility/Facility";

const Facilitys = () => {
	const facilitys = UseFacilitys();
	return (
		<Container className="facility-container text-center">
			<h2 className="mt-5 fs-1 fw-bolder">Our Facilitys</h2>
			<div className="mx-auto">
				<p className="fs-4 w-50 mx-auto">
					For your convenience we will give you lifetime access. And you
					will always get our support
				</p>
			</div>
			<Row xs={1} md={2} className="g-4">
				{facilitys?.map((facility) => (
					<Facility key={facility.id} facility={facility} />
				))}
			</Row>
		</Container>
	);
};

export default Facilitys;
