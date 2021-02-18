import React from 'react';

import './contact-section.scss';

const ContactSection = () => {
    return (
        <div className="contact-section-container" id="contact-section">
            <h1>Lets talk</h1>
            <hr />
            <form action="mailto:fabriciocunhadeveloper@gmail.com" method="post" encType="text/plain">
                <fieldset>
                    <input id="name" type="text" name="Name " placeholder="Name" required />
                    <input type="email" id="email" name="email " placeholder="Enter email" required />
                    <input type="tel" id="contact" name="phone " placeholder="Contact number" required />
                </fieldset>
                <textarea name="aditional-details" cols="64" rows="10" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default ContactSection;
