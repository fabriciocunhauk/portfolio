import React, { useState } from 'react';
import { useScrollAction } from '../../hooks/useScrollAction';
import Button from '../Button/Button';
import './contact-section.scss';

const ContactSection = () => {
    const [status, setStatus] = useState('');

   const  activeOnScroll  = useScrollAction(3200);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
            }
        };
        xhr.send(data);
    }

    return (
        <div className="contact-section-container" id="contact-section">
            <h1>Lets talk</h1>
            <form className={
                activeOnScroll
                    ? "contact-form contact-form-animation"
                    : "contact-form"
            }
                action="https://formspree.io/f/mpzogvej"
                method="POST"
                onSubmit={handleSubmit}
            >
                <fieldset name="portfolio-form">
                    <input id="name" type="text" name="Name" placeholder="Name" required />
                    <input type="email" id="email" name="email" placeholder="Enter email" required />
                    <input type="tel" id="contact" name="phone" placeholder="Contact number" required />
                </fieldset>
                <textarea name="additional-details" cols="64" rows="10" placeholder="Your Message" required></textarea>
                <Button status={status}>
                    {
                        status === "SUCCESS" ? 
                        <span>Thanks!</span> 
                        : status === "ERROR" ? 
                        <span>Ops! There was an error.</span> 
                        : <span>Submit</span> 
                    }
                </Button>
            </form>
        </div>
    )
}

export default ContactSection;
