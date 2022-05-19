import { useEffect, useState } from "react"
import { getStoredCartData } from "../utilities/localStorageRelated"

const useCart=(products)=>{
    const [cart,setCart]=useState([])

    //fetching data from local storage (this work has to be done bcz whenever u refresh the page order summary will show you the previous calculation of added products(calculation reload marley remove hoye jawa prevent korbey) )
    useEffect(()=>{
        //storedData tey ekta object pabo
        const storedData=getStoredCartData()

        let savedCart=[]
        //object loop through
        //ai 'productId' ta basically jei product click hoisey shei product ar product id ja localstorage a stored
        for(let productId in storedData){
            //check korbo j local storage thekey get kora key/productId main jei products asey tar kono product ar id ar sathey miley kina
            const addedProduct=products.find(product=>product._id===productId)

            if(addedProduct){
                const singleProductQuantity=storedData[productId]
                addedProduct.quantity=singleProductQuantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])
    return [cart,setCart]
}

export {useCart}