import React from 'react';
import locationIcon from '../../assets/images/icons/location.svg';
import emailIcon from '../../assets/images/icons/email.svg';
import phoneIcon from '../../assets/images/icons/phone.svg';
import myCv from '../../assets/Download-file/frontend-reactjs.pdf';
import arrowUp from '../../assets/images/SVG/iconmonstr-arrow-up-lined.svg'
import linkedinLink from '../../assets/images/icons/linkedin.svg';
import gitHubLink from '../../assets/images/icons/github.svg';

import './footer-styles.scss';
import Button from '../Button/Button';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <>
            <div className="back-btn-container">
                <Link className="back-btn" to="/">
                    <img src={arrowUp} className="btn-image" alt="back to top" />
                    Back to top</Link>
            </div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="icon-container">
                        <h1>Fabricio Cunha</h1>
                        <span className="contact-link"><img src={locationIcon} alt="location" />Swindon</span>
                        <a className="contact-link" href="tel:+447453155169"><img src={phoneIcon} alt="phone" />+447453155169</a>
                        <a className="contact-link" href="mailto:fabriciocunhadeveloper@gmail.com"><img src={emailIcon} alt="email" />fabriciocunhadeveloper@gmail.com</a>
                    </div>
                    <div className="download-and-socials-container">
                        <Button href={myCv}>
                            Download CV
                        </Button>
                        <ul className="social-links-container">
                            <li className="social-link">
                                <a  rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/fabricio-cunha-7b7392162">
                                    <img src={linkedinLink} alt="linkedin" />
                                </a>
                            </li>
                            <li className="social-link">
                                <a  rel="noopener noreferrer" target="_blank" href="https://github.com/fabriciocunhauk">
                                    <img src={gitHubLink} alt="github" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
