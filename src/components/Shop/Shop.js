import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hook/useProducts';
import { addToLocalStorage, getStoredCartData } from '../../utilities/localStorageRelated';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { useNavigate } from "react-router-dom";
import { useSignInWithYahoo } from 'react-firebase-hooks/auth';
import { useCart } from '../../hook/useCart';

const Shop = () =>{
    //const [products,setProducts]=useState([])
    //custom hook use korey we can get products array of object and set it into products
    //const [products,setProducts]=useProducts()

    //for the purpose of cart state update related and cart ta k Cart component a via props pathano hobey
    // const [cart, setCart]=useState([])

    //node ar kaj korsi tai
    const [cart, setCart]=useCart()

    //for pagination purpose
    const [pageCount,setPageCount]=useState(0)
    const [page,setPage]=useState(0)
    const [size, setSize] = useState(10);

    //fetch all products from api
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`) //our created own api, ai api tey hit korley data pabo and ai api ar sathey query send kora hocchey  backend a. [query: ekta page ar jnno kotogula product fetch kora lagbey sheita]
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[page,size])  //page number or page size kono ekta kicho change holei api tey hit korey data fetch korbey tai page and size are the dependencies
    
    //get total products number from DB collection
    useEffect(()=>{
        fetch('http://localhost:5000/productCount')
        .then(res=>res.json())
        .then(data=>{
            const count=data.count   //db ar collection a jotogula product tar count pabo
            const pages=Math.ceil(count/10)
            setPageCount(pages)
        })
    },[])
    console.log(pageCount)
    /*//fetching data 
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    //console.log(products)*/

    
    // //Ai nicher part tuku basically refresh/website revisit korley order-summary r calculation ta jeno remove na hoye jay seita handle kortesey by the help of local storage. LocalStorage ar help niye cart array tey always clicked product gulur data thaktesey tai page refresh korleo calculation ja korsi Cart.js component a sheita show hobey
    // //fetching data from localStorage by calling getStoredCartData()
    // useEffect(()=>{
    //     const storedData=getStoredCartData()
    //     //console.log(storedData)

    //     let savedCart=[]
    //     //object loop through ar for-in use hoy
    //     for(let productId in storedData){
    //         //products ar moddhey jei array of object pabo sheita thekey localstorage a storeData ar productid(key) ar sathey miley shei particular product ar info get kortese addedProduct a
    //         //addedProduct a at a time ekta resulted product ar info thakbey
    //         const addedProduct= products.find(product=>product._id===productId)
    //         if(addedProduct){
    //             //console.log(addedProduct)

    //             //local storage thekey storedDate(obj) get korsi seikhaney each product ar jnno productId ar against a quantity/value asey so shei quantity ta singleProductQuantity tey store korbo
    //             const singleProductQuantity=storedData[productId]
    //             //console.log(singleProductQuantity)

    //             //setting the localStored each product quantity to addedProduct(obj) quantity
    //             addedProduct.quantity=singleProductQuantity  //full jei 'products' array of obj asey sheikhaney o kinto quantity change ar effect porbey
    //             savedCart.push(addedProduct) //basically local storage ar saved product with quantity stored kora hocchey savedCart array tey
    //             //console.log(savedCart)
    //         }
    //     }
    //     setCart(savedCart) //localstorage ar data akhn cart ar moddhey thakbey so easily 

    // },[products]) //[products] meaans products ar value/state jotobar change hobey totobar useEffect() ta call hobey jodi [] empty hoto tahley useEffect only ekbar e call hoto
    
    

    //click event handler function(protibar btn click a ai function call hobey)
    const handleCart=(selectedProduct)=>{
        //console.log(product)

        let clickedItems
        //checking agey thekey e ki selectedProduct is in the cart or not
        const productExists=cart.find(product=>product._id===selectedProduct._id)

        //jodi selectedProduct cart a na thekey thakey tahley
        if(!productExists){
            selectedProduct.quantity=1
            clickedItems=[...cart,selectedProduct]
        }
        //jodi selectedProduct cart a agey thekei thakey tahley productExists ar quantity 1 koray barbey
        else{
            //jei product cart a asey sei product badh a baki product gula ber kori
            const restProducts=cart.filter(product=>product._id!==selectedProduct._id) //restProducts will be an array
            productExists.quantity+=1
            clickedItems=[...restProducts,productExists]
        }


        //normally array tey push korey new item add korar jinish ta react a state update ar khetrey kora jabey na. array ar copy create korey then setCart() call korey 'cart' ar state/value change kora lagbey
        /////const newCart=[...cart,product]  //spread operator use kora hoisey
        setCart(clickedItems) //Add to btn clicked product gulo cart array tey add hobey

        //storing clicked product into localStorage
        addToLocalStorage(selectedProduct._id)
    }
    //console.log(cart)


    //<Link to=''/> aita use na korey navigate use koretse and both same kaj e korbey 
    const navigate=useNavigate()
    const goToOrderPage=()=>{
        navigate('/orders')
    }

    return (
        <>
        <div className='shop-container-style'>
            <div className="products-container">
                {
                    products.map(product=><Product key={product._id} product={product} handleCart={handleCart}></Product>)
                }
            </div>

            <div className='cart-container'>
                {/*cart is a array of product object after updating the state of cart using setCart()*/}
                <Cart cart={cart}>
                    {/*btn a click korar sathey sathey '/orders' page a niye jabey*/}
                    <button onClick={goToOrderPage} className='review-btn-style' >Review Order</button>
                </Cart>
            </div>
        </div>
        
        {/* pagination ar kaj hoisey */}
        {/* page UI tey show korar somoy 1 barai dekhabo but basically page number is starts from 0 */}
        <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number=><button 
                            className={page===number ? 'selected':''}
                            onClick={()=>setPage(number)}>{number+1}
                            </button>)
                    }
                    {/* ekta particular page a koto gula product dekhatey chai tar code */}
                    <select onChange={(e)=>setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
        </div>
        </>
    );
};

export default Shop;