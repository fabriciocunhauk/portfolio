import React from 'react';
import locationIcon from '../../images/icons/location.svg';
import emailIcon from '../../images/icons/email.svg';
import phoneIcon from '../../images/icons/phone.svg';
import whatsappIcon from '../../images/icons/whatsapp.svg';

import './footer-styles.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="lets-talk">
                <h1>Lets talk</h1>
                <a className="contact-link" href="mailto:fabriciocunhadeveloper@gmail.com"><img src={emailIcon} alt="email" />fabriciocunhadeveloper@gmail.com</a>
            </div>
            <div className="contact-details">
                <h1>Fabricio Cunha</h1>
                <div className="icon-container">
                    <span className="contact-link"><img src={locationIcon} alt="location" />London</span>
                    <a className="contact-link" href="tel:+447453155169"><img src={phoneIcon} alt="phone" />+447453155169</a>
                    <a className="contact-link" href="whatsapp://send?abid=+447453155169&text=Hello%2C%20World!"><img src={whatsappIcon} alt="whatsapp" />Whatsapp</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
