import React from 'react';
import './Modal.css';

const LoginModal = ({ onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h1>Login</h1>
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
                        <button type="submit">Login</button>
                    </div>
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default LoginModal;
