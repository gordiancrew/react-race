import { SetStateAction, useEffect, useState } from "react";

 export interface IProd {
  id:string;
}

export interface IProds{
  products:IProd[];
}

function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState<any>(false);
    const [items, setItems] = useState<Array<IProd>>([]);
  
    useEffect(() => {
      fetch("https://dummyjson.com/products?limit=10")
        .then(res => res.json())
        .then(
          (result:IProds) => {
            setIsLoaded(true);
             setItems(result.products);
            console.log("consolelog"+result.products)
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
            <li key={product.id}>
              {product.id} 
            </li>
          ))}
        </ul>

        //  <h1>{items.toString()}</h1>
        
       
      );
      
    }
  }

  export default MyComponent;