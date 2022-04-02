import React from 'react';
import './Cart.css'

//{cart} means directly destructring aita k amra const {cart}=props aivabeo likhtey partam
const Cart = (props) => {
    const {cart}=props
    //console.log(cart)

    //task:cart array tey joto gula product thakbey tader price property r value niye seita add korey total ta ber kora(normal way tey cart array loop through korey kaj ta kora jay)
    let totalPrice=0
    let totalShippingCost=0
    let productQantity=0
    for(let product of cart){
        totalPrice=totalPrice+(product.price*product.quantity)
        totalShippingCost+=product.shipping
        productQantity+=product.quantity
    }
    //console.log(totalPrice)
    //console.log(totalShippingCost)
    //console.log(productQantity)

    //tax=10% on total price
    const tax=totalPrice*(10/100)
    const grandTotal= parseFloat(totalPrice+totalShippingCost+tax)

    return (
        <div className="cart">
            <h1 className='order-summary-style'>Order Summary</h1>
            <div className='cart-info'>
                <p>Selected Items: {productQantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShippingCost}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            </div>
            <div style={{display:'flex',flexDirection:'column' ,alignItems:'center'}}>
                <button className='clear-btn-style'>
                    <p>Clear Cart</p>
                </button>
                {/*<button>
                    <p>Review Order</p>
                </button>*/}
                {props.children}
            </div>
        </div>
    );
};

export default Cart;
