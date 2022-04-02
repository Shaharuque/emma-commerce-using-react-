import { useEffect, useState } from "react"

const useProducts=()=>{
    const [products,setProducts]=useState([])

    //data fetch
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return [products,setProducts]
}

export {useProducts}