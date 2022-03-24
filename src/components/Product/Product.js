import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    //console.log(props)
    const {handleCart,product}=props
    //console.log(handleCart)

    //as product is object type so object destructring can be done
    const {name,price,ratings,seller,img}=product
    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <div className='info-style'>
                <h4 className='product-name'>{name}</h4>
                <h5 className='product-price'>Price: ${price}</h5>
                <div className='paragraph-style'>
                    <p >Manufacturer: {seller}</p>
                    <p >Ratings: {ratings} Star</p>
                </div>
            </div>
            {/*btn clicked event handling*/}
            <button onClick={()=>handleCart(product)} className='btn-style'>
                <p style={{color: '#0E161A',marginRight:'5px'}}>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;