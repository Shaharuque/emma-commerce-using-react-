import React from 'react';
import './ReviewItem.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewItem = (props) => {
    //console.log(props.children)
    const {cartProduct,removeCartProduct}=props
    const { img, name, quantity, shipping, price } = cartProduct
    return (
        <div className='reviewProduct'>
            <div>
                <img style={{ width: '200px', height: '200px', padding: '10px' }} src={img} alt="" />
            </div>
            <div className='review-details'>
                <div>
                    <h4 title={name}>{
                        name.length > 20 ? name.slice(0, 20) + '...' : name
                    }
                    </h4>
                    <p>Product-Quantity: {quantity}</p>
                    <p>Price: ${price}</p>
                    <p>Shipping-charge: ${shipping}</p>
                </div>
                <div>
                    <button onClick={()=>removeCartProduct(cartProduct)} className='review-button-style'>
                        <FontAwesomeIcon style={{ height: '20px', width: '20px' }} icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;