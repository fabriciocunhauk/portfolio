import React, { useEffect, useRef, useState } from 'react';
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
    window.addEventListener('scroll', handleNavBg);

    const handleMenu = () => {
        if (!sideMenu) {
            menuIsOpen()
            setSideMenu(true);
        } else {
            menuIsClose();
            setSideMenu(false);
        }
    };

    const menuIsOpen = () => {
        const menuContainer = document.querySelector(".side-menu-container");
        menuContainer.style.width = "300px";
        menuContainer.style.height = "590px";

        const burgerSvg = document.querySelector(".burger-svg");
        burgerSvg.style.width = "0";
    }

    const menuIsClose = () => {
        const menuContainer = document.querySelector(".side-menu-container");
        menuContainer.style.width = "0";
        menuContainer.style.height = "0";

        const burgerSvg = document.querySelector(".burger-svg");
        burgerSvg.style.transition = "all .4s ease-in-out";
        burgerSvg.style.width = "50px";
    };

    let menuRef = useRef();

    useEffect(() => {
        let closeMenuWhenClickOutside = (event) => {
            if (!menuRef.current.contains(event.target)) {
                menuIsClose();
            }
        }

        document.addEventListener("mousedown", closeMenuWhenClickOutside)

        return () => {
            document.removeEventListener("mousedown", closeMenuWhenClickOutside)
        }
    });

    return (
        <header>
            <nav className={navbarBg ? "navbar active" : "navbar"}>
                <div className="navigation-container">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/fabricio-cunha-7b7392162" rel="noopener noreferrer" target="_blank">Linkedin</a></li>
                        <li><a href="https://github.com/fabriciocunhauk" rel="noopener noreferrer" target="_blank">GitHub</a></li>
                        <li><a href="https://www.instagram.com/fabsdev" rel="noopener noreferrer" target="_blank">Instagram</a></li>
                    </ul>
                </div>
                <div className="transition-div">
                    <Logo className="burger-svg" onClick={handleMenu} />
                </div>
                <SideMenu
                    myRef={menuRef}
                    closeMenuByLinkClick={handleMenu}
                    handleClosingButton={handleMenu}
                />
            </nav>
        </header>
    )
};

export default Navbar;
