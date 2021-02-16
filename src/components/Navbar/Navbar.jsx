import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../images/burger-menu.svg';
import SideMenu from '../SideMenu/SideMenu';
import './navbar-styles.scss';

const Navbar = () => {
    const [navbarBg, setNavbarBg] = useState(false);
    const [sideMenu, setSideMenu] = useState(false);

    const handleNavBg = () => {
        if (window.scrollY >= 20) {
            setNavbarBg(true);
        } else {
            setNavbarBg(false);
        }
    };

    const handleMenu = () => {
        if (!sideMenu) {
            menuOpen()
            setSideMenu(true);
        } else {
            menuClose();
            setSideMenu(false);
        }
    };

    const menuOpen = () => {
        const menuOpen = document.querySelector(".side-menu-container");
        menuOpen.style.width = "300px";
        menuOpen.style.height = "80%";
        menuOpen.style.display = "flex";
    }

    const menuClose = () => {
        const menuOpen = document.querySelector(".side-menu-container");
        menuOpen.style.width = "0";
        menuOpen.style.height = "0";
    };

    window.addEventListener('scroll', handleNavBg);

    return (
        <div className={navbarBg ? "navbar active" : "navbar"}>
            <div className="navigation-container">
                <ul>
                    <li><a href="https://www.linkedin.com/in/fabricio-cunha-7b7392162" rel="noopener noreferrer" target="_blank">Linkedin</a></li>
                    <li><a href="https://github.com/fabriciocunhauk" rel="noopener noreferrer" target="_blank">GitHub</a></li>
                    <li><a href="https://www.instagram.com/fabriciocunhauk" rel="noopener noreferrer" target="_blank">Instagram</a></li>
                </ul>
            </div>
            <Logo className="burger-svg" onClick={handleMenu} />
            <SideMenu />
        </div>
    )
};

export default Navbar;
