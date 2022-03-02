import React from "react";
import './Contact.css';

const Contact = () => {

    return (
        <section className="contact-section">
            <h2 className="contact-title">contacto</h2>
            <ul className="contact-list">
                <li className="contact-list-li"><a href="https://twitter.com/odpinerosh" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                <li className="contact-list-li"><a href="https://www.linkedin.com/in/odph/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                <li className="contact-list-li"><a href="https://github.com/odpinerosh/" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
            </ul>
        </section>
    );
}

export default Contact;

