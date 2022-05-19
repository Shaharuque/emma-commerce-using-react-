import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../hook/useCart';
import { useProducts } from '../../hook/useProducts';
import { removeFromDB } from '../../utilities/localStorageRelated';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItems(cart-products)/ReviewItem';

import './Order.css'

const Orders = () => {
    //useProducts() hook/function will be called and returned value will be stored inside products,setProducts using array destructring 

    //useProducts() and useCart() both are my custom hook
    const [products, setProducts] = useProducts()
    const [cart,setCart] =useCart((products))
    //as cart will be a clicked products array
    //console.log(cart)

    const removeCartProduct=(deletedProduct)=>{
       // console.log(deletedProduct)
       //jei product ar delete btn a click hoisey sheita passi now cart thekey delete btn clicked  hoisey amn product cart thekey sorai dibo
       //cart ar sob gula product loop through hoye condition check hobey
       const restProductsCart=cart.filter(product=>product._id!==deletedProduct._id)
       setCart(restProductsCart)  //UI tey Show koranor jnno

       removeFromDB(deletedProduct._id)  //deleted btn a clicked product localstorage/DB thekeo deletation
       /*
       let cartUpdated=[]
       const afterRemove=removeFromDB(deletedProduct._id)
       for(let productId in afterRemove){
           const remainingProduct= products.find(product=>product._id===productId)
           const quantity=afterRemove[productId]
           remainingProduct.quantity=quantity
           cartUpdated.push(remainingProduct)
       }
       setCart(cartUpdated)
        */
    }


    const navigate=useNavigate()
    const goToShipmentPage=()=>{
        navigate('/shipment')
    }

    return (
        <div className='order-container-style'>
            <div className='odered-items-review'>
                {/*<p style={{textAlign:'center'}}>Clicked products inside Cart</p>*/}
                {
                    cart.map(cartProduct=><ReviewItem key={cartProduct._id} cartProduct={cartProduct} removeCartProduct={removeCartProduct}> <h1>Shaik</h1></ReviewItem>)
                }
            </div>
           <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={goToShipmentPage} className='proceed-btn'>Procced shipment</button>
                </Cart>
           </div>
           
        </div>
    );
};

export default Orders;