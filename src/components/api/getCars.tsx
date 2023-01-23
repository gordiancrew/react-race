import { useState } from "react";
import { ICar } from "../garage";

function GetCars() {

	const [items, setItems] = useState<Array<ICar>>([]);
	useState(() => {
		fetch("http://localhost:3000/garage")
			.then((res) => res.json())
			.then(
				(result: ICar[]) => {
					setItems(result);
					console.log("consolelog" + result);
				},
				(error) => {
					console.log('error: ' + error)
				}
			)
	})
	return items;
}
export default GetCars;