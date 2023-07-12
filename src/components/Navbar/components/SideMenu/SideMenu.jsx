import React from 'react';
import { Link } from 'react-scroll';
import './side-menu.scss';
import linkedinLink from '../../../../assets/images/icons/linkedin.svg';
import gitHubLink from '../../../../assets/images/icons/github.svg';
import { ReactComponent as ClosingLogo } from '../../../../assets/images/x-mark.svg';


const SideMenu = ({ closeMenuByLinkClick, myRef, handleClosingButton, toggleSideMenu }) => {
    return (
        <nav ref={myRef} className={toggleSideMenu ? "side-menu-container side-menu-container-open" : "side-menu-container"}>
            <ClosingLogo className="side-menu-close-button" onClick={handleClosingButton} />
            <ul className="side-menu-button-container">
                <li className="side-menu-button"><Link onClick={closeMenuByLinkClick} className="link-button" to="about-section">Skills</Link></li>
                <li className="side-menu-button"><Link onClick={closeMenuByLinkClick} className="link-button" to="projects-section">Projects</Link></li>
                <li className="side-menu-button"><Link onClick={closeMenuByLinkClick} className="link-button" to="contact-section">Contact</Link></li>
                <li className="side-menu-button"><Link onClick={closeMenuByLinkClick} className="link-button" to="/">Back to top</Link></li>
            </ul>
            <ul className="social-links-container">
                <li className="social-link"><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/fabricio-cunha-7b7392162"><img src={linkedinLink} alt="linkedin" /></a></li>
                <li className="social-link"><a rel="noopener noreferrer" target="_blank" href="https://github.com/fabriciocunhauk"><img src={gitHubLink} alt="github" /></a></li>
            </ul>
        </nav>
    )
}

export default SideMenu;
