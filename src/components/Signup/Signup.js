import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import { useCreateUserWithEmailAndPassword  } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Signup = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [confirmPass,setConfirmPass]=useState()
    const [error,setError]=useState()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate=useNavigate()

    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }
    const confirmPasswordHandler=(e)=>{
        setConfirmPass(e.target.value)
    }

    const handleCreateUser=(e)=>{
        e.preventDefault()       //form submission a click korley jeno reload na hoy sheita thekanor jonno
        //input field validation
        if(password !==confirmPass){
            setError('Password didnot matched')
            return
        }
        if(password.length<6){
            setError('Password mustbe atleast in 6 charecters')
        }

        //firebase hook a email and password ta parameter hisabey pathassi
        createUserWithEmailAndPassword(email,password)

    }   
    if(user){
        navigate('/shop');
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='form-container'>
            <div>
                <h4 className='heading-style'>Sign-Up </h4>

                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor='email'>Email: </label>
                        <input onBlur={emailHandler} type="email" name='email' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password: </label>
                        <input onBlur={passwordHandler} type="password" name='password' required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor='confirm-password'>Confirm Password: </label>
                        <input onBlur={confirmPasswordHandler} type="password" name='confirm-password' required/>
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Signup" />
                </form>
                <p>
                Already have an account? <Link className='form-link' to='/login'>sign-in</Link>
                </p>

                <div style={{display:'flex',alignItems:'center'}}>
                    <div className='line'>
                        <br />
                    </div>
                    <p>or</p>
                    <div className='line'>
                        <br />
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    );
};

export default Signup;