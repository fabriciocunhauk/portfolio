import React from 'react';
import { Link } from 'react-scroll';
import './side-menu.scss';

const SideMenu = () => {
    return (
        <div className="side-menu-container">
            <ul>
                <li><Link to="about-section">Skills</Link></li>
                <li><Link to="projects-section">Projects</Link></li>
                <li><Link to="contact-section">Contact</Link></li>
                <li><Link to="/">Back to top</Link></li>
            </ul>
        </div>
    )
}

export default SideMenu;
