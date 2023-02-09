import React from 'react';
import logo from '../../images/favicon1.png'
import './Header.css'


const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt=""/> 
           <div>
            <a href='/home'>Home</a>
            <a href='/contract'>Contract</a>
            <a href='/about'>About</a>
           </div>
        </nav>
    );
};

export default Header;