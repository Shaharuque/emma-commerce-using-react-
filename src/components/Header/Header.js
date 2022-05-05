import React from 'react';
//import { Container, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'
import logo from '../../images/Logo.svg'


const Header = () => {
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
                <Link className='link-style' to='/login' >Login</Link>
            </div>
        </nav>

    );
};

export default Header;