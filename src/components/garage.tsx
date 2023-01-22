import { useEffect, useState } from "react";
import CreateCar from "./api/createCar";
import updateCar from "./api/updateCar";
import Road from "./road";
import "../styles/manager.css";

export interface ICar {
	id: number;
	name: string;
	color: string;
}

function MyGarage() {
	const [error, setError] = useState<Error | null>(null);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [items, setItems] = useState<Array<ICar>>([]);
	const [inputName, setInputName] = useState<string>('');
	const [inputColor, setInputColor] = useState<string>('#000000');
	const [updateColor, setUpdateColor] = useState<string>('');
	const [updateName, setUpdateName] = useState<string>('');
	const [countAction, setCountAction] = useState<number>(0);
	const [idUpd, setIdUpd] = useState<number>(0);
	const [carsNumber, setCarsNumber]=useState<number>(0);
	if(!localStorage.page)localStorage.page=1;

	function addId(id: number, name: string, color: string) {
		setIdUpd(id);
		setUpdateName(name);
		setUpdateColor(color)
	}

function leftPage(){

	if(localStorage.page>1){
		localStorage.page=localStorage.page-1;
		setCountAction((x)=>x+1);
	}
}
function rightPage(){

	if(localStorage.page<(Math.ceil(carsNumber/7))){
		let num:number=localStorage.page;
		localStorage.page= Number(num) + 1;
		setCountAction((x)=>x+1);
	}
	
}


	useEffect(() => {
		fetch("http://localhost:3000/garage")
			.then((res) => res.json())
			.then(
				(result: ICar[]) => {
					setCarsNumber(result.length)
				},
				(error) => {
					setError(error);
				}
			);
	}, [countAction]);

	useEffect(() => {
		fetch(`http://localhost:3000/garage?_limit=7&_page=${localStorage.page}`)
			.then((res) => res.json())
			.then(
				(result: ICar[]) => {
					setIsLoaded(true);
					setItems(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, [countAction]);
	if (error) {
		return <div>Error: error</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<div className="manager">
					<div className="manager-item">
						<form>
							<input onChange={(e) => { setInputName(e.target.value) }} className="manager-input" type="text"></input>
							<input onChange={(e) => { setInputColor(e.target.value) }} type="color" ></input>
						</form>
						<button onClick={() => { CreateCar(inputColor, inputName); setCountAction((x) => x + 1) }} className="manager-button">CREATE</button>
					</div>
					<div className="manager-item">
						<form>
							<input onChange={(e) => { setUpdateName(e.target.value) }} value={updateName} className="manager-input" type="text"></input>
							<input onChange={(e) => { setUpdateColor(e.target.value) }} value={updateColor} type="color"></input>
						</form>
						<button onClick={() => { updateCar(updateColor, updateName, idUpd); setCountAction((x) => x + 1) }} className="manager-button">UPDATE</button>

					</div>
					<div className="manager-item">
						<button className="manager-button">RACE</button>
						<button className="manager-button">RESET</button>
						<button className="manager-button">GENERATE CAR</button>
					</div>
				</div>
				<h1>GARAGE( {carsNumber} )</h1>
				<h2>Page #{localStorage.page} /from({Math.ceil(carsNumber/7)})</h2>
				<div className="arrow-page">
					<div onClick={leftPage} className="arrow">🡄</div>
					<div onClick={rightPage} className="arrow">🡆</div>
				</div>
				<div>
					{items.map((car) => (
						<div key={car.id}><Road id={car.id} color={car.color}
						setaction={setCountAction} carname={car.name} setid={addId} /></div>
					))}
				</div>
			</div>
		);
	}
}

export default MyGarage;
