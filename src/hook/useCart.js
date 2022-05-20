import { useEffect, useState } from "react";
import { getStoredCartData } from "../utilities/localStorageRelated";

// const useCart=(products)=>{
const useCart = () => {
  const [cart, setCart] = useState([]);

  //fetching data from local storage (this work has to be done bcz whenever u refresh the page order summary will show you the previous calculation of added products(calculation reload marley remove hoye jawa prevent korbey) )
  useEffect(() => {
    //storedData tey ekta object pabo
    const storedData = getStoredCartData();
    console.log(storedData);
    let savedCart = [];

    const keys = Object.keys(storedData);
    console.log(keys);
    //
    fetch("http://localhost:5000/productByKeys",{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(keys)  
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        //object loop through
        //ai 'productId' ta basically jei product click hoisey shei product ar product id ja localstorage a stored
        for (let productId in storedData) {
          //check korbo j local storage thekey get kora key/productId main jei products asey tar kono product ar id ar sathey miley kina
          const addedProduct = products.find(
            (product) => product._id === productId
          );

          if (addedProduct) {
            const singleProductQuantity = storedData[productId];
            addedProduct.quantity = singleProductQuantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, []);
  return [cart, setCart];
};

export { useCart };
