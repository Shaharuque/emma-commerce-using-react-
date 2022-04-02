

const addToLocalStorage=(productId)=>{
    //console.log('clicked product id:', productId)
    let cart
    //local storage thekey {key='cart-items'} provide korey tar stringify-value get kortese
    const storedCart=localStorage.getItem('cart-items')
    if(storedCart){
        cart=JSON.parse(storedCart)
    }
    else{
        cart={}
    }

    //particular productId ar against a quantity set and jodi agey thekey particular productId ar item 'cart-items' a thakey tahley tar quantity increse hobey
    let itemQuantity=cart[productId]
    if(itemQuantity){
        let newQuantity=itemQuantity+1
        cart[productId]=newQuantity
    }
    else{
        cart[productId]=1
    }

    //local storage a cart obj k set korbo
    localStorage.setItem('cart-items',JSON.stringify(cart))
}

//By calling this function we can get stored data from localStorage
const getStoredCartData=()=>{
    let cart
    //local storage thekey {key='cart-items'} provide korey tar stringify-value get kortese
    const storedCart=localStorage.getItem('cart-items')
    if(storedCart){
        //stringified value k obj a convert kora hoccey
        cart=JSON.parse(storedCart)
    }
    else{
        cart={}
    }
    return cart       //cart object return korbey
}

//product id ar against a local storage/DB thekey  data remove
const removeFromDB=(deletedProductId)=>{
    let cart
    const storedCart=localStorage.getItem('cart-items')
    if(storedCart){
        cart=JSON.parse(storedCart)
        if(deletedProductId in cart){
            delete cart[deletedProductId]
            localStorage.setItem('cart-items',JSON.stringify(cart))
        }
    }
    //return cart
    
}

export {addToLocalStorage,getStoredCartData,removeFromDB}