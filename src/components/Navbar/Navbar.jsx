import React from 'react';
import burgerMenu from '../../images/burger-menu.svg';
import './navbar-styles.scss';

const Header = () => {
    return (
        <div className="navbar">
            <div className="navigation-container">
                <ul>
                    <li><a href="/">Linkedin</a></li>
                    <li><a href="/">GitHub</a></li>
                    <li><a href="/">Instagram</a></li>
                </ul>
            </div>
            <img src={burgerMenu} alt="menu" />
        </div>
    )
}

export default Header;
