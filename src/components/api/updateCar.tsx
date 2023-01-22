async function updateCar(color:string, nameCar: string, idCar: number){
  
  let bodyContent:object;
  if(color!=''&&nameCar!=''){
    bodyContent={name:nameCar, color:color};
  }else if(color!=''){
    bodyContent={color:color};
  }else{
    bodyContent={name:nameCar, color:color};
  }
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyContent)
    };
    await fetch(`http://localhost:3000/garage/${idCar}`, requestOptions)
    
}
export default updateCar;