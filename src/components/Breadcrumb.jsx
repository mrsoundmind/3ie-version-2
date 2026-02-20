import React from 'react';

// Mirrors the exact DOM structure observed on https://www.3ieimpact.org/services
// <nav role="navigation" aria-label="breadcrumb">
//   <ol class="breadcrumb">
//     <li class="breadcrumb-item"><a href="/">Home</a></li>
//     <li class="breadcrumb-item active">Services</li>
//   </ol>
// </nav>

export default function Breadcrumb({ items }) {
    return (
        <nav role="navigation" aria-label="breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <React.Fragment key={index}>
                            <li className={`flex items-center ${isLast ? 'text-gray-900 font-bold' : 'text-gray-700'}`}>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="hover:text-[var(--primary-blue)] transition-colors"
                                        onClick={(e) => {
                                            if (item.href.startsWith('/')) {
                                                e.preventDefault();
                                                window.history.pushState({}, '', item.href);
                                                window.dispatchEvent(new PopStateEvent('popstate'));
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <span>{item.label}</span>
                                )}
                            </li>
                            {!isLast && (
                                <li className="text-gray-400 select-none flex items-center mt-0.5">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </li>
                            )}
                        </React.Fragment>
                    );
                })}
            </ol>
        </nav>
    );
}
