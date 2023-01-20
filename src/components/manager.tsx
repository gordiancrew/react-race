
import React from "react";
import "../styles/manager.css";

function Manager() {

    return (
        <div className="manager">
            <div className="manager-item">
                <form>
                    <input className="manager-input" type="text"></input>
                    <input type="color"></input>
                    <button className="manager-button">CREATE</button>
                </form>

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