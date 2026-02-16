import React from 'react';

const Logo = ({ className = "h-12", showText = true, ...props }) => {
    return (
        <img
            src="/src/images/3ie-logo.png"
            alt="3ie Logo"
            className={`object-contain ${className}`}
            {...props}
        />
    );
};

export default Logo;
