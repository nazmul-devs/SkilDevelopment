import { useEffect } from "react";
import { useState } from "react";

const UseServices = () => {
	const [services, setServices] = useState();
	useEffect(() => {
		fetch("./Services.JSON")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return services;
};

export default UseServices;
