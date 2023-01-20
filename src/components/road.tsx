import { Properties } from "csstype";
import React, { ProfilerProps, useState } from "react";
import "../styles/road.css";
import Car from "./car";


function Road(props:any) {
	const[driven,setDriven]=useState(false);
	return (
		<React.Fragment>
			<div className="road-box">
				<div className="road-btns">
					<button>SELECT</button>
					<button>REMOVE</button>
					<div className="car-name">{props.carname}</div>
				</div>
				<button onClick={()=>setDriven((x:boolean)=>!x)} className="road-btn-a">A</button>
				<button className="road-btn-b">B</button>
				<img src="https://www.svgrepo.com/show/48420/racing-flag.svg" className="road-flag"></img>
				<Car color={props.color} classAdd={driven?"drive":""} />
				<div className="road-line"></div>
			</div>
		</React.Fragment>
	);
}
export default Road;
