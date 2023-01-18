import {useEffect, useState } from "react";

export interface ICar {
	id: number;
	name: string;
	color: string;
}

// export interface ICars {
// 	cars: ICar[];
// }

function MyGarage() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState<any>(false);
	const [items, setItems] = useState<Array<ICar>>([]);

	useEffect(() => {
		fetch("http://localhost:3000/garage")
			.then((res) => res.json())
			.then(
				(result: ICar[]) => {
					setIsLoaded(true);
					setItems(result);
					console.log("consolelog" + result);
				},

				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	if (error) {
		// return <div>Error: {error.message}</div> ;
		return <div>Error: error</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		console.log("we are here");
		return (
			<ul>
				{items.map((car) => (
					<li key={car.id}>{car.id}{car.name}{car.color}</li>
				))}
			</ul>

		//  <h1>hello</h1>
		);
	}
}

export default MyGarage;
