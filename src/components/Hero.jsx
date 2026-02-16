import React, { useState, useEffect } from 'react';
import { resourcesData } from '../data/resources';
import PeekModal from './PeekModal';
import { Sparkles, ArrowRight, Database, Globe, BookOpen, Users, ExternalLink } from 'lucide-react';

export default function Hero({ categoryFilter, audienceFilter }) {
    const [selectedResourceId, setSelectedResourceId] = React.useState(null);

    // Spotlight Resource (First one or specific ID)
    const spotlightResource = resourcesData[0];

    const handleOpen = (id) => setSelectedResourceId(id);
    const handleClose = () => setSelectedResourceId(null);

    return (
        <section className="relative bg-[var(--secondary-bg)] pt-32 pb-20 overflow-visible min-h-[60vh] flex items-center">
            {/* Background: Technical Grid & Glows */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-blue-400/5 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>

            <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Column: Text Only */}
                <div className="text-left">
                    {/* 1. Headline - Simple "Resources" but HUGE */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[var(--primary-blue)] leading-[0.9] tracking-tighter mb-8 animate-fade-in-up">
                        Resources
                    </h1>

                    {/* 2. Intro Text - Specific Client Copy */}
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-lg font-medium animate-fade-in-up delay-100">
                        Practical tools and learning resources designed to empower researchers, funders, and policymakers.
                    </p>

                    {/* No Search, No CTA as requested. Just pure content. */}
                </div>

                {/* Right Column: Spotlight Card */}
                <div className="relative hidden lg:block animate-slide-up" style={{ animationDelay: "200ms" }}>

                    {/* The Card Container */}
                    <div className="relative z-10 transform hover:-translate-y-2 transition-transform duration-500 ease-out group">

                        {/* Glow Effect - Enhanced */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

                        <div className="relative bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl shadow-blue-900/10 overflow-hidden p-8 ring-1 ring-black/5">

                            {/* Spotlight Badge */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[var(--primary-blue)] text-xs font-bold tracking-widest uppercase border border-blue-100 shadow-sm">
                                    <Sparkles className="w-3 h-3 mr-2 text-blue-500" />
                                    Spotlight
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[var(--primary-blue)] transition-colors" />
                            </div>

                            {/* Resource Content */}
                            <div className="space-y-6">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[var(--primary-blue)] shadow-inner border border-blue-100">
                                    <Database className="w-8 h-8" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-[var(--primary-blue)] mb-3 leading-tight">
                                        {spotlightResource?.title || "Development Evidence Portal"}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                                        {spotlightResource?.description || "The world's most comprehensive repository of impact evaluations and systematic reviews."}
                                    </p>
                                </div>

                                <button
                                    onClick={() => handleOpen(spotlightResource?.id || 1)}
                                    className="w-full flex items-center justify-center px-6 py-4 bg-[var(--primary-blue)] text-white rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-900/20 active:scale-95 duration-200"
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Peek Modal Component */}
            <PeekModal
                isOpen={!!selectedResourceId}
                onClose={handleClose}
                resource={resourcesData.find(r => r.id === selectedResourceId)}
            />
        </section>
    );
}
