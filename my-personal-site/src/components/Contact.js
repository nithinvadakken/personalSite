import React from 'react';
import './page.css';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="centered-header">Contact Me</h1>
            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" rows="4" placeholder="Your message here..." required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-twitter"></i>
                </a>
                {/* Add more social links as needed */}
            </div>
        </div>
    );
};

export default Contact;
