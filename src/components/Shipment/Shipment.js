import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Shipment.css'
const Shipment = () => {

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [city,setCity]=useState()
    const [house,setHouse]=useState()
    const [street,setStreet]=useState()
    const [error,setError]=useState()
    const [phone,setPhone]=useState()
    const navigate=useNavigate()

    //to get logged in user use use useAuthState(react firebase hook)
    const [user, loading] = useAuthState(auth);
    console.log(user)
    

    const nameHandler=(event)=>{
        setName(event.target.value)
    }
    const cityHandler=(e)=>{
        setCity(e.target.value)
    }
    const houseHandler=(e)=>{
        setHouse(e.target.value)
    }
    const streetHandler=(e)=>{
        setStreet(e.target.value)
    }
    const phoneHandler=(e)=>{
        setPhone(e.target.value)
    }

    const handleCreateUser=(e)=>{
        e.preventDefault()       //form submission a click korley jeno reload na hoy sheita thekanor jonno

        setEmail(user?.email)
        const shipping={name,email,phone,city,house,street}
        alert('Info taken Successfully')
        console.log(shipping)
    }   

  
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='form-container'>
            <div>
                <h4 className='heading-style'>Your Shipping Informations </h4>

                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor='name'>Name: </label>
                        <input onBlur={nameHandler} type="text" name='name' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor='email'>Email: </label>
                        <input type="email" name='email' value={user?.email} readOnly required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor='city'>City: </label>
                        <input onBlur={cityHandler} type="text" name='city' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor='house'>House No.: </label>
                        <input onBlur={houseHandler} type="number" name='house' required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor='street'>Street: </label>
                        <input onBlur={streetHandler} type="text" name='street' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor='phone'>Phone: </label>
                        <input onBlur={phoneHandler} type="text" name='phone' required/>
                    </div>
            
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="CHECK-OUT" />
                </form>
            </div>
        </div>
    </div>
    );
};

export default Shipment;