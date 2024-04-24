import React from 'react';
import './page.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to My Personal Site</h1>
            <p>Discover my projects, read about my experiences, and connect with me!</p>
            <button onClick={() => alert('Thanks for clicking!')}>Learn More</button>
        </div>
    );
};

export default Home;