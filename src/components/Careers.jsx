import React, { useState, useEffect, useRef } from 'react';
import { Users, ArrowRight, Star, Globe, Lightbulb, Puzzle, Download, Clock, MapPin } from 'lucide-react';
import Breadcrumb from './Breadcrumb';

const jobOpenings = [
    {
        id: 1,
        title: "Senior Impact Evaluator",
        location: "New Delhi, India",
        type: "Full-time",
        posted: "2 days ago",
        department: "Research"
    },
    {
        id: 2,
        title: "Policy & Advocacy Manager",
        location: "Washington, DC (Remote)",
        type: "Full-time",
        posted: "1 week ago",
        department: "Policy"
    },
    {
        id: 3,
        title: "Data Scientist",
        location: "London, UK",
        type: "Contract",
        posted: "3 days ago",
        department: "Data"
    },
    {
        id: 4,
        title: "Research Assistant",
        location: "Nairobi, Kenya",
        type: "Full-time",
        posted: "Just now",
        department: "Research"
    }
];

// Simple Hook for Intersection Observer (Scroll Reveal)
const useScrollReveal = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slide-up-fade');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};

export default function Careers() {
    useScrollReveal();

    return (
        <div className="font-sans antialiased bg-[var(--secondary-bg)]">
            {/* Global Grid Pattern (Matches Resources Page) */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-30 bg-grid-pattern"></div>
            {/* Gradient Overlay for depth */}
            <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[var(--secondary-bg)]/50 to-[var(--secondary-bg)] pointer-events-none"></div>

            {/* 1. HERO SECTION: "Spotlight Card Style" */}
            <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 overflow-visible">
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        {/* Content */}
                        <div className="order-2 lg:order-1 reveal-on-scroll">
                            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Careers' }]} />
                            {/* Standardized Badge */}
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[var(--primary-blue)] text-xs font-bold tracking-widest uppercase border border-blue-100 shadow-sm mb-8">
                                <Users className="w-3 h-3 mr-2 text-blue-500" />
                                Join Our Team
                            </div>

                            {/* Huge Typography matching Resources */}
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[var(--primary-blue)] leading-[0.9] tracking-tighter mb-8">
                                Join our team
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-lg font-medium">
                                Help us generate high-quality evidence to improve the lives of people in low- and middle-income countries.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <a href="#open-positions" className="group relative px-8 py-4 bg-[var(--primary-blue)] text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-blue-900/20 active:scale-95 transition-all duration-200 overflow-hidden">
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Openings <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </a>

                                {/* Social Proof / Team Faces */}
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Team" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm font-bold text-gray-500">Join 50+ experts</span>
                                </div>
                            </div>
                        </div>

                        {/* Visual: "Spotlight Card" (Structured, consistent with Resources) */}
                        <div className="order-1 lg:order-2 relative reveal-on-scroll">
                            {/* Glow Effect - Enhanced */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

                            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/50 ring-1 ring-black/5 hover:-translate-y-2 transition-transform duration-500 group">
                                {/* Header Bar */}
                                <div className="bg-[var(--primary-blue)] px-6 py-4 flex justify-between items-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/5"></div>
                                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                                    <span className="text-white font-bold tracking-wide text-xs uppercase flex items-center relative z-10">
                                        <Star className="w-3 h-3 mr-2 text-yellow-300 fill-current" />
                                        Life at 3ie
                                    </span>
                                </div>

                                {/* Image Content */}
                                <div className="relative h-[400px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                                        alt="3ie Team Collaboration"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <div className="flex items-center gap-4 text-white mb-2">
                                            <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white">
                                                <Globe className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-blue-200 font-bold uppercase tracking-wider">Global Presence</p>
                                                <p className="text-lg font-bold">Impacting 30+ Countries</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. CULTURE: "Interactive Cards" (Harmonized Colors) */}
            <section className="py-24 relative z-10 bg-white border-y border-gray-100">
                <div className="container-custom">
                    <div className="text-center mb-16 reveal-on-scroll">
                        <span className="text-blue-500 font-bold tracking-wider text-sm uppercase mb-2 block">Our Culture</span>
                        <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">Driven by Values</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our culture is built on a foundation of shared principles that guide our work and our relationships.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Inclusive", icon: Users, desc: "We champion diversity and ensure every voice is heard and valued.", color: "bg-blue-50 text-blue-600" },
                            { title: "Innovative", icon: Lightbulb, desc: "We push boundaries to find new and better ways to solve problems.", color: "bg-indigo-50 text-indigo-600" },
                            { title: "Collaborative", icon: Puzzle, desc: "We believe the best solutions come from working together.", color: "bg-sky-50 text-sky-600" },
                        ].map((item, idx) => (
                            <div key={idx} className="group relative p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default reveal-on-scroll">
                                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--primary-blue)] transition-colors">{item.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <div className={`h-full bg-[var(--primary-blue)] w-0 group-hover:w-full transition-all duration-700 ease-out`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PROCESS: "Brand Blue Section" (Fixed Color Inconsistency) */}
            <section className="py-24 bg-[var(--primary-blue)] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                {/* Gradient mesh overlay */}
                <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-blue-400/10 to-transparent pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-on-scroll">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold mb-6">Your Journey to Impact</h2>
                            <p className="text-blue-100 text-lg">
                                We've designed a transparent and fair recruitment process to help you show us your best self.
                            </p>
                        </div>
                        <a href="https://www.3ieimpact.org/sites/default/files/2025-12/3ie-jobs-FAQ.pdf" className="hidden md:inline-flex items-center gap-2 text-blue-200 font-bold hover:text-white transition-colors border border-blue-400/30 px-4 py-2 rounded-lg hover:bg-white/10">
                            Download Process FAQs <Download className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-800 -translate-y-1/2 hidden lg:block"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 reveal-on-scroll">
                            {[
                                { step: "01", title: "Apply", desc: "Submit your curated CV." },
                                { step: "02", title: "Review", desc: "We check alignment." },
                                { step: "03", title: "Interview", desc: "Deep dive with the team." },
                                { step: "04", title: "Offer", desc: "Welcome to the mission." },
                                { step: "05", title: "Onboard", desc: "Your impact begins." },
                            ].map((s, i) => (
                                <div key={i} className="relative group bg-blue-900/40 backdrop-blur-sm p-6 rounded-xl border border-blue-400/20 hover:border-blue-300 hover:bg-blue-800/60 transition-all duration-300">
                                    <div className="text-4xl font-black text-blue-300/50 mb-4 group-hover:text-white transition-colors">{s.step}</div>
                                    <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                                    <p className="text-sm text-blue-200">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. OPEN POSITIONS: "Sleek List View" (Consistent Styling) */}
            <section id="open-positions" className="py-24 relative z-10">
                <div className="container-custom max-w-5xl">
                    <div className="flex items-center justify-between mb-12 reveal-on-scroll">
                        <h2 className="text-4xl font-bold text-[var(--primary-blue)]">Current Openings</h2>
                        <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 font-medium hover:bg-white hover:border-blue-200 transition-all text-sm shadow-sm">
                            View All on Portal
                        </button>
                    </div>

                    <div className="space-y-4">
                        {jobOpenings.map((job) => (
                            <div key={job.id} className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer reveal-on-scroll">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 rounded-full bg-blue-50 text-[var(--primary-blue)] text-xs font-bold uppercase tracking-wider">
                                            {job.department}
                                        </span>
                                        <span className="text-gray-400 text-sm flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {job.posted}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[var(--primary-blue)] transition-colors mb-1">{job.title}</h3>
                                    <p className="text-gray-500 font-medium flex items-center gap-2">
                                        <MapPin className="w-4 h-4" /> {job.location}
                                        <span className="w-1 h-1 bg-gray-300 rounded-full mx-2"></span>
                                        {job.type}
                                    </p>
                                </div>
                                <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
                                    <button className="px-6 py-3 rounded-xl bg-gray-50 text-gray-900 font-bold text-sm group-hover:bg-[var(--primary-blue)] group-hover:text-white transition-all duration-300">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-white border border-gray-100 rounded-2xl p-12 text-center shadow-sm reveal-on-scroll relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -z-10"></div>

                        <h3 className="text-2xl font-bold text-[var(--primary-blue)] mb-4">Don't see a perfect fit?</h3>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                            We are always looking for exceptional talent. Submit a general application and we'll keep you in mind for future roles.
                        </p>
                        <a href="#" className="inline-block px-8 py-3 bg-[var(--primary-blue)] text-white font-bold rounded-full shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 hover:-translate-y-1 transition-all">
                            Submit General Application
                        </a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .animate-pulse-slow {
                    animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-bounce-subtle {
                    animation: bounce 3s infinite;
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(-5%); }
                    50% { transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .reveal-on-scroll {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 1s ease-out;
                }
                .animate-slide-up-fade {
                    opacity: 1;
                    transform: translateY(0);
                }
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </div>
    );
}
