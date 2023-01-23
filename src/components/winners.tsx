import React, { useEffect, useState } from "react";

import { ICar } from "./garage";
import "../styles/winners.css";

export interface IWinner {
	id: number;
	wins: number;
	time: number;
}

function Winners() {

	const [error, setError] = useState<Error | null>(null);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [items, setItems] = useState<Array<IWinner>>([]);
	const [car, setCar] = useState<ICar>();
	
	const GetCar = async (id: number) => {
		return await fetch(`http://localhost:3000/garage/${id}`)
			.then((res => res.json())).then((x:ICar)=>setCar(x))
			

	}

	useEffect(() => {
		fetch(`http://localhost:3000/winners`)
			.then((res) => res.json())
			.then(
				(result: IWinner[]) => {
					setIsLoaded(true);
					setItems(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);
	if (error) {
		return <div>Error: error</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		
		return (
			<div className="wins">
				
				{items.map((win, ind) =>

					<div key={win.id}>
						{ind+1}----name:Tesla ----pwins:{win.wins} ----time:{win.time}
					 </div>)}
			</div>
		);
	}


}
export default Winners;