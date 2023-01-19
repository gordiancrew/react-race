import { Properties } from "csstype";
import React, { ProfilerProps } from "react";
import "../styles/road.css";
import Car from "./car";


function Road(props:any) {
	return (
		<React.Fragment>
			<div className="road-box">
				<div className="road-btns">
					<button>SELECT</button>
					<button>REMOVE</button>
					<div className="car-name">{props.carname}</div>
				</div>
				<Car color={props.color} />
				<div className="road-line"></div>
			</div>
		</React.Fragment>
	);
}
export default Road;
