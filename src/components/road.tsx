import React from "react";
import "../styles/road.css";
import MyGarage from "./api";
import Car from "./car";


function Road(color:string) {
	return (
		<React.Fragment>
			<div className="road-box">
				{Car(color)}
				<div className="road-line"></div>
			</div>
		</React.Fragment>
	);
}
export default Road;
