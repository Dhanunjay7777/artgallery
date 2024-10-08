import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './buyernav.css'; // Ensure the CSS file is in the correct path

const BuyerNav = () => {
    return (
        <header>
            <h1 style={{ margin: 0, fontSize: '1.5em' }}>The Art Spectrum</h1>
            <nav>
                <Link to="/buyerhome">
                    <span></span> Home
                </Link>
                <Link to="/artexplore">
                    <span></span> Art Explore
                </Link>
                <Link to="/myorders">
                    <span></span> My Orders
                </Link>
                <Link to="/changepwd">
                    <span></span> Change Password
                </Link>
        
                <Link to="/login" className="logout-icon">
                    <span></span> Logout
                </Link>
            </nav>
        </header>
    );
};

export default BuyerNav;
