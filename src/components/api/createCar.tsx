import { useEffect } from "react";

function CreateCar(color:string, nameCar: string){
  
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nameCar , color: color})
    };
     fetch("http://localhost:3000/garage", requestOptions)
        .then(response => response.text())
        .then(result => console.log("POST!!!"+result))
        .catch(error => console.log('POST!! error', error));

}
export default CreateCar;