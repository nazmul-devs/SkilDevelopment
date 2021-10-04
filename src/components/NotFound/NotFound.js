import React from "react";
import notFoundImg from "../../img/404-page-not-found.svg";

const NotFound = () => {
	const errorStyle = {
		width: "100%",
		height: "74vh",
		background: "lightgray",
	};
	return (
		<div style={errorStyle} className=" text-center pt-5">
			<img src={notFoundImg} width="500" alt="" />
		</div>
	);
};

export default NotFound;
