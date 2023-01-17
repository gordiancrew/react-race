import { SetStateAction, useEffect, useState } from "react";

 interface IProd {
  id:string;
}

function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("https://dummyjson.com/products?limit=10")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
             setItems(result);
            console.log(result)
          },
        
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      // return <div>Error: {error.message}</div> ;
      return <div>Error: error</div> ;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log('we are here')
      return (
        <ul>
          {items.map(product => (
            <li key={product}>
              {product} 
            </li>
          ))}
        </ul>

        //  <h1>{items.toString()}</h1>
        
       
      );
      
    }
  }

  export default MyComponent;