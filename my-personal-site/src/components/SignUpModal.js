import React from 'react';
import './Modal.css';


const SignUpModal = ({ onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h1>Sign Up</h1>
                <form>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input type="password" placeholder="Confirm your password" required />
                    </div>
                    <div className="form-group">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SignUpModal;
