import React from 'react';
import locationIcon from '../../assets/images/icons/location.svg';
import emailIcon from '../../assets/images/icons/email.svg';
import phoneIcon from '../../assets/images/icons/phone.svg';
import myCv from '../../assets/Download-file/frontend-reactjs.pdf';

import './footer-styles.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
            <div className="icon-container">
            <h1>Fabricio Cunha</h1>
                <span className="contact-link"><img src={locationIcon} alt="location" />Swindon</span>
                <a className="contact-link" href="tel:+447453155169"><img src={phoneIcon} alt="phone" />+447453155169</a>
                <a className="contact-link" href="mailto:fabriciocunhadeveloper@gmail.com"><img src={emailIcon} alt="email" />fabriciocunhadeveloper@gmail.com</a>
            </div>
            <a
                href={myCv}
                className="btn-download"
                target="_blank"
                rel="noopener noreferrer"
                download="Fabricio-Cunha-CV.pdf">
                Download CV
            </a>
            </div>
        </footer>
    )
}

export default Footer;
