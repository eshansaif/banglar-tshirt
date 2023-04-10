import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link style={{ marginRight: '20px' }} to="/">Home</Link>
            <Link to="/order-review">Order Review</Link>
        </div>
    );
};

export default Header;