import React from 'react';
//import { Container, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'
import logo from '../../images/Logo.svg'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Header = () => {
    const [user]=useAuthState(auth)
    console.log(user)
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
                    <button>sign-out</button>
                    :
                    <Link className='link-style' to='/login' >Login</Link>
                }
            </div>
        </nav>

    );
};

export default Header;