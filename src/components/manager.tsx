
import React, { ChangeEvent, useState } from "react";

import "../styles/manager.css";
import CreateCar from "./api/createCar";
import updateCar from "./api/updateCar";


function Manager() {
    const [inputName, setInputName] = useState('');
    const [inputColor, setInputColor] = useState('red');
    const [updateColor, setUpdateColor]=useState('');
    const [updateName, setUpdateName]=useState('');
   



    return (
        <div className="manager">
            <div className="manager-item">
                <form>
                    <input onChange={(e) => { setInputName(e.target.value) }} className="manager-input" type="text"></input>
                    <input onChange={(e) => { setInputColor(e.target.value) }} type="color" ></input>

                </form>
                <button onClick={() => CreateCar(inputColor, inputName)} className="manager-button">CREATE</button>

            </div>
            <div className="manager-item">
                <form>
                    <input onChange={(e) => { setUpdateName(e.target.value) }} className="manager-input" type="text"></input>
                    <input onChange={(e) => { setUpdateColor(e.target.value) }} type="color"></input>

                </form>
                <button onClick={() => updateCar(updateColor, updateName, 2)} className="manager-button">UPDATE</button>

            </div>
            <div className="manager-item">
                <button className="manager-button">RACE</button>
                <button className="manager-button">RESET</button>
                <button className="manager-button">GENERATE CAR</button>
            </div>
        </div>

    );

}
export default Manager;