import React from "react";
import "../styles/road.css";
import Car from "./car";

function Road() {
	return (
		<React.Fragment>
			<div className="road-box">
				<Car />
				<div className="road-line"></div>
			</div>
		</React.Fragment>
	);
}
export default Road;
