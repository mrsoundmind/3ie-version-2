import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#1e3a8a] text-white py-16 text-center relative">
            <div className="container-custom">
                {/* Main Links Row - Reduced Font Size */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium mb-10">
                    <a href="#" className="hover:text-blue-200 transition-colors">About</a>
                    <a href="#" className="hover:text-blue-200 transition-colors">Services</a>
                    <a href="#" className="hover:text-blue-200 transition-colors">Research</a>
                    <a href="#" className="hover:text-blue-200 transition-colors">Evidence Hub</a>
                    <a href="#" className="hover:text-blue-200 transition-colors">Donate</a>
                </div>

                {/* Copyright Row - Reduced Font Size */}
                <div className="text-[10px] md:text-xs text-blue-200/60 border-t border-blue-800 pt-6 flex flex-col md:flex-row items-center justify-center gap-4">
                    <p>Copyright © 2026 International Initiative for Impact Evaluation (3ie) | All rights reserved</p>
                    <div className="hidden md:block mx-2">|</div>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors">Terms of use</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
                        <a href="#" className="hover:text-white transition-colors">Accessibility statement</a>
                    </div>
                </div>

                {/* Scroll Top Button */}
                <button
                    onClick={scrollToTop}
                    className="absolute bottom-8 right-8 p-3 bg-blue-900 rounded-full hover:bg-blue-800 transition-colors shadow-lg group"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </footer>
    );
}
