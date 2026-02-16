import React from 'react';

export default function Newsletter() {
    return (
        <section className="bg-blue-200 py-12">
            <div className="container-custom flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                <h2 className="text-lg md:text-xl font-bold text-gray-900">
                    Stay up-to-date with 3ie
                </h2>
                <a
                    href="#"
                    className="px-6 py-2 bg-[#1e3a8a] text-white rounded-full font-bold text-sm hover:bg-blue-900 transition-colors shadow-md"
                >
                    Subscribe
                </a>
            </div>
        </section>
    );
} 
