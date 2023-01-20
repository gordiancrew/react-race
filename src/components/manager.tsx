
import React, { ChangeEvent, useState } from "react";
import { ParamKeyValuePair } from "react-router-dom";
import "../styles/manager.css";
import CreateCar from "./api/createCar";


function Manager() {
    const[inputName,setInputName]=useState('');
    const[inputColor,setInputColor]=useState('red');



    return (
        <div className="manager">
            <div className="manager-item">
                <form>
                    <input onChange={(e)=>{setInputName(e.target.value)}}  className="manager-input" type="text"></input>
                    <input onChange={(e)=>{setInputColor(e.target.value)}} type="color" ></input>
                    
                </form>
                <button onClick={()=>CreateCar(inputColor, inputName)} className="manager-button">CREATE</button>

            </div>
            <div className="manager-item">
            <form>
                    <input className="manager-input" type="text"></input>
                    <input type="color"></input>
                    <button className="manager-button">UPDATE</button>
                </form>

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