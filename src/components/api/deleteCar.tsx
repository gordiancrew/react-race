import App from "../../App";


async function DeleteCar(id: number) {
    
  
    await fetch(`http://localhost:3000/garage/${id}`, { method: 'DELETE' });
   

   
}
export default DeleteCar;