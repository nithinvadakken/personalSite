import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import './NavBar.css';

const NavBar = () => {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isSignUpOpen, setSignUpOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-links-left">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="nav-links-right">
                <button onClick={() => setLoginOpen(true)}>Login</button>
                <button onClick={() => setSignUpOpen(true)}>Sign Up</button>
            </div>
            {isLoginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
            {isSignUpOpen && <SignUpModal onClose={() => setSignUpOpen(false)} />}
        </nav>
    );
};

export default NavBar;
