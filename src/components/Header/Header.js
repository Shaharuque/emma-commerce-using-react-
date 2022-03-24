import React from 'react';
//import { Container, Nav} from 'react-bootstrap';
import './Header.css'
import logo from '../../images/Logo.svg'


const Header = () => {
    return (
        <nav className='nav-style'>
            <img src={logo} alt="" />
            <div>
                <a className='a-style' href="/home">Home</a>
                <a className='a-style' href="/order">Order</a>
                <a className='a-style' href="/inventory">Inventory</a>
                <a className='a-style' href="/about">About</a>
            </div>
        </nav>
       
    );
};

export default Header;