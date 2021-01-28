import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../images/burger-menu.svg';
import './navbar-styles.scss';

const Header = () => {
    const [navbarBg, setNavbarBg] = useState(false);

    const handleNavBg = () => {
        if (window.scrollY >= 20) {
            setNavbarBg(true);
        } else {
            setNavbarBg(false);
        }
    }

    window.addEventListener('scroll', handleNavBg)

    return (
        <div className={navbarBg ? "navbar active" : "navbar"}>
            <div className="navigation-container">
                <ul>
                    <li><a href="/">Linkedin</a></li>
                    <li><a href="/">GitHub</a></li>
                    <li><a href="/">Instagram</a></li>
                </ul>
            </div>
            <Logo className="burger-svg" />
        </div>
    )
}

export default Header;
