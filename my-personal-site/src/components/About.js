import React from 'react';
import './About.css'; // Assuming styles are defined here
import './page.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-image">
                <img src="https://via.placeholder.com/300" alt="Your Name" />
            </div>
            <div className="about-text">
                <h1>About Me</h1>
                <p>Hello, I'm Nithin Vadakken. I'm a passionate Software Developer with over [X] years of experience. I love what I do and I'm constantly learning new skills and improving my craft. Here's a little more about my background, skills, and what I bring to the table.</p>
            </div>
        </div>
    );
};

export default About;

