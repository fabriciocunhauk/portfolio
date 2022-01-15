import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as BurgerLogo } from '../../assets/images/burger-menu.svg';
import { ReactComponent as Logo } from '../../assets/images/SVG/fabricio-cunha-logo.svg';
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
            setSideMenu(true);
        } else {
            setSideMenu(false);
        }
    };

    let menuRef = useRef();

    useEffect(() => {
        let closeMenuWhenClickOutside = (event) => {
            if (!menuRef.current.contains(event.target)) {
                setSideMenu(false);
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
                <Link className="link-button" to="/"> <Logo className="personal-logo" /></Link>
                   
                    <ul>
                        <a href="https://www.linkedin.com/in/fabricio-cunha-7b7392162" rel="noopener noreferrer" target="_blank"><li>Linkedin</li></a>
                        <a href="https://github.com/fabriciocunhauk" rel="noopener noreferrer" target="_blank"><li>GitHub</li></a>
                        <a href="https://www.instagram.com/fabs.dev" rel="noopener noreferrer" target="_blank"><li>Instagram</li></a>
                    </ul>
                </div>
                <div className="transition-div">
                    <BurgerLogo
                        className={sideMenu ? "burger-svg-hide" : "burger-svg"}
                        onClick={handleMenu}
                    />
                </div>
                <SideMenu
                    toggleSideMenu={sideMenu}
                    myRef={menuRef}
                    closeMenuByLinkClick={handleMenu}
                    handleClosingButton={handleMenu}
                />
            </nav>
        </header>
    )
};

export default Navbar;
