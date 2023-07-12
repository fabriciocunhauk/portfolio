import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as BurgerLogo } from '../../assets/images/burger-menu.svg';
import { ReactComponent as Logo } from '../../assets/images/SVG/fabricio-cunha-logo.svg';
import SideMenu from './components/SideMenu/SideMenu';
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
                        <li className="side-menu-button"><Link className="link-button" to="about-section">Skills</Link></li>
                        <li className="side-menu-button"><Link className="link-button" to="projects-section">Projects</Link></li>
                        <li className="side-menu-button"><Link className="link-button" to="contact-section">Contact</Link></li>
                        {/* <li className="side-menu-button"><Link className="link-button" to="/">Back to top</Link></li> */}
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
