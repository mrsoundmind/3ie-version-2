import React from 'react';

const Logo = ({ className = "h-12", showText = true, ...props }) => {
    if (showText) {
        return (
            <svg
                viewBox="0 0 420 100"
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                {/* Icon Group */}
                <g>
                    <rect width="100" height="100" rx="20" fill="#153A80" />
                    <text x="50" y="45" fontFamily="'Times New Roman', serif" fontSize="55" fill="white" textAnchor="middle">3</text>
                    <circle cx="38" cy="42" r="5" fill="#BFDBFE" />
                    <text x="36" y="85" fontFamily="'Times New Roman', serif" fontSize="58" fill="#BFDBFE" textAnchor="middle">i</text>
                    <text x="64" y="85" fontFamily="'Times New Roman', serif" fontSize="58" fill="#BFDBFE" textAnchor="middle">e</text>
                </g>

                {/* Text Group */}
                <g transform="translate(115, 0)">
                    <text x="0" y="32" fontFamily="sans-serif" fontSize="26" fill="#153A80" fontWeight="600">International</text>
                    <text x="0" y="62" fontFamily="sans-serif" fontSize="26" fill="#153A80" fontWeight="600">Initiative for</text>
                    <text x="0" y="92" fontFamily="sans-serif" fontSize="26" fill="#153A80" fontWeight="600">Impact Evaluation</text>
                </g>
            </svg>
        );
    }

    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect width="100" height="100" rx="20" fill="#153A80" />
            <text x="50" y="45" fontFamily="'Times New Roman', serif" fontSize="55" fill="white" textAnchor="middle">3</text>
            <circle cx="38" cy="42" r="5" fill="#BFDBFE" />
            <text x="36" y="85" fontFamily="'Times New Roman', serif" fontSize="58" fill="#BFDBFE" textAnchor="middle">i</text>
            <text x="64" y="85" fontFamily="'Times New Roman', serif" fontSize="58" fill="#BFDBFE" textAnchor="middle">e</text>
        </svg>
    );
};

export default Logo;
