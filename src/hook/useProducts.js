import { useEffect, useState } from "react"

const useProducts=()=>{
    const [products,setProducts]=useState([])

    //data fetch
    useEffect(()=>{
        fetch('http://localhost:5000/product') //out created own api, ai api tey hit korley data pabo
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return [products,setProducts]
}

export {useProducts}