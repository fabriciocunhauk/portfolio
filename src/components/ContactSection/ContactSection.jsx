import React, { useState } from 'react';

import './contact-section.scss';

const ContactSection = () => {
    const [status, setStatus] = useState('');

    function submitForm(ev) {
        console.log(ev);
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
        <section className="contact-section-container" id="contact-section">
            <h1>Lets talk</h1>
            <hr />
            <form action="https://formspree.io/f/mpzogvej" method="POST" onSubmit={submitForm}>
                <fieldset name="portfolio-form">
                    <input id="name" type="text" name="Name" placeholder="Name" required />
                    <input type="email" id="email" name="email" placeholder="Enter email" required />
                    <input type="tel" id="contact" name="phone" placeholder="Contact number" required />
                </fieldset>
                <textarea name="additional-details" cols="64" rows="10" placeholder="Your Message" required></textarea>
                {
                    status === "SUCCESS"
                        ? <button className="btn-success">Thanks!</button>
                        : status === "ERROR"
                            ? <button className="btn-fail">Ooops! There was an error.</button>
                            : <button>Submit</button>
                }
            </form>
        </section>
    )
}

export default ContactSection;
