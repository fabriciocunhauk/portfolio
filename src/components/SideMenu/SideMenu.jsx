import React from 'react';
import { Link } from 'react-scroll';
import './side-menu.scss';

import linkedinLink from '../../images/icons/linkedin.svg';
import gitHubLink from '../../images/icons/github.svg';
import instagramLink from '../../images/icons/instagram.svg';

const SideMenu = ({ closeMenuByLinkClick, myRef }) => {
    return (
        <nav ref={myRef} className="side-menu-container">
            <ul className="side-menu-button-container">
                <li className="side-menu-button"><Link onClick={closeMenuByLinkClick} className="link-button" to="about-section">Skills</Link></li>
                <li className="side-menu-button"><Link onClick={closeMenuByLinkClick} className="link-button" to="projects-section">Projects</Link></li>
                <li className="side-menu-button"><Link onClick={closeMenuByLinkClick} className="link-button" to="contact-section">Contact</Link></li>
                <li className="side-menu-button"><Link onClick={closeMenuByLinkClick} className="link-button" to="/">Back to top</Link></li>
            </ul>
            <div className="contact-links-container">
                <ul className="social-links-container">
                    <li><a className="social-link" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/fabricio-cunha-7b7392162"><span className="social-link-shadow"><img src={linkedinLink} alt="linkedin" /></span></a></li>
                    <li><a className="social-link" rel="noopener noreferrer" target="_blank" href="https://github.com/fabriciocunhauk"><img src={gitHubLink} alt="github" /></a></li>
                    <li><a className="social-link" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/fabsdev"><img src={instagramLink} alt="instagram" /></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default SideMenu;
