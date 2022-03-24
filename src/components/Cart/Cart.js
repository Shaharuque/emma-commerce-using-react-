import React from 'react';
import './Cart.css'

//{cart} means directly destructring aita k amra const {cart}=props aivabeo likhtey partam
const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div>
         <p className='selected-items-style'>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;