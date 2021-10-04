import { useEffect } from "react";
import { useState } from "react";

const UseFacilitys = () => {
	const [facilitys, setFacilitys] = useState();
	useEffect(() => {
		fetch("./Facilitys.JSON")
			.then((res) => res.json())
			.then((data) => setFacilitys(data));
	}, []);
	return facilitys;
};

export default UseFacilitys;
