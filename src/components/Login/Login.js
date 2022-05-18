import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

  


    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleUserSignIn=(e)=>{
        e.preventDefault()

        signInWithEmailAndPassword(email, password)
    }

    const navigate=useNavigate()  
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center',height:'100vh'}}>
            <div className='form-container'>
                <div>
                    <h4 className='heading-style'>Login </h4>
                    <form onSubmit={handleUserSignIn}>
                        <div className="input-group">
                            <label htmlFor='email'>Email: </label>
                            <input onChange={handleEmail} type="email" name='email' required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor='password'>Password: </label>
                            <input onChange={handlePassword} type="password" name='password' required/>
                        </div>

                        <p style={{color:'red',fontWeight:'bold'}}>{error?.message}</p>
                        {
                            loading && <p>Loading...</p>
                        }

                        <input className='form-submit' type="submit" value="Login" />
                    </form>
                    <p>
                        New to ema-jhon! <Link className='form-link' to='/signup'>Create new account</Link>
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

export default Login;