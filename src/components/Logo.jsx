import React from 'react';
import logoImage from '../images/3ie-logo.png';

const Logo = ({ className = "h-12", showText = true, ...props }) => {
    return (
        <img
            src={logoImage}
            alt="3ie Logo"
            className={`object-contain ${className}`}
            {...props}
        />
    );
};

export default Logo;
