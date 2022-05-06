import React from 'react';
//import { Container, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'
import logo from '../../images/Logo.svg'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user]=useAuthState(auth)
    console.log(user)

    const handleSignout=()=>{
        signOut(auth);
    }
    return (
        <nav className='nav-style'>
            <Link className='link-style' to='/'>
                <img src={logo} alt="" />
            </Link>
            <div>
                <Link className='link-style' to='/shop'>Shop</Link>
                <Link className='link-style' to='/orders'>Order</Link>
                <Link className='link-style' to='/inventory'>Inventory</Link>
                <Link className='link-style' to='/about'>About</Link>
                
                {
                    user ?
                    <button onClick={handleSignout}>sign-out</button>
                    :
                    <Link className='link-style' to='/login' >Login</Link>
                }
            </div>
        </nav>

    );
};

export default Header;