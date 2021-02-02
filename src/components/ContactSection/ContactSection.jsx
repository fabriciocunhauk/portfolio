import React from 'react';
import locationIcon from '../../images/icons/location.svg';
import emailIcon from '../../images/icons/email.svg';
import phoneIcon from '../../images/icons/phone.svg';
import whatsappIcon from '../../images/icons/whatsapp.svg';

import './contact-section.scss';

const ContactSection = () => {
    return (
        <div className="contact-section-container" id="contact-section">
            <h1>Contact Me</h1>
            <hr />
            <div className="section-cards">
                <form>
                    <fieldset>
                        <div className="form-field-cotainer">
                            <input className="names-fied" type="text" name="name" placeholder="Name" />
                            <input className="names-fied" type="text" name="name" placeholder="Surname" />
                        </div>
                        <div className="form-field-cotainer">
                            <input type="email" placeholder="email" />
                        </div>
                        <div className="form-field-cotainer">
                            <input type="tel" placeholder="Contact number" />
                        </div>
                    </fieldset>
                    <textarea name="aditional-details" cols="64" rows="5" placeholder="Mensage"></textarea>
                    <button type="submit">Send Mensage</button>
                </form>
                <div className="contact-details">
                    <h1>Fabricio Cunha</h1>
                    <div className="icon-container">
                        <span className="contact-link"><img src={locationIcon} alt="location" />London</span>
                        <a className="contact-link" href="mailto:fabriciocunhadeveloper@gmail.com"><img src={emailIcon} alt="email" />fabriciocunhadeveloper@gmail.com</a>
                        <a className="contact-link" href="tel:+447453155169"><img src={phoneIcon} alt="phone" />+447453155169</a>
                        <a className="contact-link" href="whatsapp://send?abid=+447453155169&text=Hello%2C%20World!"><img src={whatsappIcon} alt="whatsapp" />Whatsapp</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;
