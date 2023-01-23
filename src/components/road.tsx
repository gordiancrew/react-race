import React, { ProfilerProps, useState } from "react";
import "../styles/road.css";
import DeleteCar from "./api/deleteCar";
import Car from "./car";

export interface ICarObject {
  id: number;
  color: string;
  carname: string;
  setaction: Function;
  setid: Function;
}

function Road(props: ICarObject) {
  const [driven, setDriven] = useState(false);
  const hundlerDelete = () => {
    DeleteCar(props.id);
    props.setaction((x: number) => x + 1);
  };
  return (
    <React.Fragment>
      <div className="road-box">
        <div className="road-btns">
          <button
            onClick={() => props.setid(props.id, props.carname, props.color)}
          >
            SELECT
          </button>
          <button onClick={hundlerDelete}>REMOVE</button>
          <div className="car-name">{props.carname}</div>
        </div>
        <button
          onClick={() => setDriven((x: boolean) => !x)}
          className="road-btn-a"
        >
          A
        </button>
        <button className="road-btn-b">B</button>
        <img
          src="https://www.svgrepo.com/show/48420/racing-flag.svg"
          className="road-flag"
        ></img>
        <Car color={props.color} classAdd={driven ? "drive" : ""} />
        <div className="road-line"></div>
      </div>
    </React.Fragment>
  );
}
export default Road;
