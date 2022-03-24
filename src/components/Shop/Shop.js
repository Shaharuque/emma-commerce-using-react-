import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () =>{
    const [products,setProducts]=useState([])
    //for the purpose of cart state related
    const [cart, setCart]=useState([])

    //fetching data 
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    //console.log(products)

    const handleCart=(product)=>{
        //console.log(product)
        //normally array tey push korey new item add korar jinish ta react a state update ar khetrey kora jabey na. array ar copy create korey then setCart() call korey 'cart' ar state/value change kora lagbey
        const newCart=[...cart,product]  //spread operator use kora hoisey
        setCart(newCart)
    }
    //console.log(cart)


    return (
        <div className='shop-container-style'>
            <div className="products-container">
                {
                    products.map(product=><Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }
            </div>

            <div className="cart-container">
                <h1 className='order-summary-style'>Order Summary</h1>
                <div >
                    <p className='selected-items-style'>Selected Items:{cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;