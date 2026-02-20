import React, { useState, useEffect, useRef, useMemo } from 'react';
import { resourcesData } from '../data/resources';
import PeekModal from './PeekModal';
import { Database, Sparkles, BookOpen, Users, ExternalLink } from 'lucide-react';

export default function ResourceGrid({ categoryFilter, setCategoryFilter }) {
    // Filters now received from props
    // Search & Audience Removed per Client Feedback

    const [sortBy, setSortBy] = React.useState("Featured"); // New: Sorting State
    const [visibleCount, setVisibleCount] = React.useState(6); // Infinite Scroll Limit
    const observerTarget = React.useRef(null);
    const [hoveredCard, setHoveredCard] = React.useState(null);
    const [selectedResourceId, setSelectedResourceId] = React.useState(null);

    const itemsPerPage = 6;

    // Labels (formerly Categories)
    const categoryOptions = ["All", "Databases", "Tools and methods", "Learning and reference", "Community and groups"];
    // Audience Options Removed

    // 1. Filter Logic
    const filteredResources = resourcesData.filter(resource => {
        const matchesCategory = categoryFilter === "All" || resource.category.includes(categoryFilter);
        // Audience & Search checks removed
        return matchesCategory;
    });

    // 2. Sorting Logic
    const sortedResources = [...filteredResources].sort((a, b) => {
        if (sortBy === "Featured") {
            // Featured first, then by ID
            return (b.featured === a.featured) ? 0 : b.featured ? 1 : -1;
        }
        if (sortBy === "A-Z") return a.title.localeCompare(b.title);
        if (sortBy === "Z-A") return b.title.localeCompare(a.title);
        if (sortBy === "Newest") return b.id - a.id;
        return 0;
    });

    // 3. Infinite Scroll Data Logic
    const displayedResources = sortedResources.slice(0, visibleCount);

    // Reset visible count on filter/sort change
    React.useEffect(() => {
        setVisibleCount(itemsPerPage);
    }, [categoryFilter, sortBy]);

    // Intersection Observer to load more
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setVisibleCount(prev => prev + itemsPerPage);
                }
            },
            { threshold: 1.0 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [observerTarget]);

    // 2. Count Logic (Simplified helper)
    const getCount = (type, value) => {
        if (value === "All") return resourcesData.length;
        if (type === "category") return resourcesData.filter(r => r.category.includes(value)).length;
        return 0;
    };

    // 3. Deep Linking & Overlay Logic
    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const resourceId = params.get('resource');
        if (resourceId) {
            setSelectedResourceId(parseInt(resourceId));
        }
    }, []);

    React.useEffect(() => {
        const url = new URL(window.location);
        if (selectedResourceId) {
            url.searchParams.set('resource', selectedResourceId);
        } else {
            url.searchParams.delete('resource');
        }
        window.history.pushState({}, '', url);
    }, [selectedResourceId]);

    const handleOpen = (id) => setSelectedResourceId(id);
    const handleClose = () => setSelectedResourceId(null);

    const activeResource = resourcesData.find(r => r.id === selectedResourceId);

    // Helpers for breadcrumbs
    const showCategory = categoryFilter && categoryFilter !== "All";

    return (
        <section id="resources-grid" className="py-8 bg-gray-50/50 min-h-[800px]">
            {/* Peek Modal Component */}
            <PeekModal
                resource={activeResource}
                isOpen={!!selectedResourceId}
                onClose={handleClose}
            />

            <div className="container-custom">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                    <div className="max-w-2xl">
                        {/* Breadcrumbs */}


                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Tools and guides</h2>
                        <p className="text-gray-600 text-lg">
                            Immerse yourself in our curated collection of resources.
                        </p>
                    </div>
                </div>

                {/* Sticky Control Bar - Tabs Style */}
                <div className="sticky top-6 z-[60] bg-white rounded-xl border border-gray-200 shadow-sm p-2 md:px-6 md:py-3 mb-10 transition-all duration-300">
                    <div className="flex flex-col xl:flex-row gap-4 justify-between items-center">

                        {/* Filters Group + Sorting */}
                        <div className="flex flex-wrap items-center justify-between w-full">

                            {/* Horizontal Tabs */}
                            <div className="flex items-center space-x-1 md:space-x-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full xl:w-auto border-b md:border-b-0 border-gray-100 flex-nowrap md:flex-wrap">
                                {categoryOptions.map(option => (
                                    <button
                                        key={option}
                                        onClick={() => setCategoryFilter(option)}
                                        className={`whitespace-nowrap px-4 py-2 text-sm font-semibold transition-all border-b-2 ${categoryFilter === option
                                            ? "border-[var(--primary-blue)] text-[var(--primary-blue)]"
                                            : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
                                            }`}
                                    >
                                        {option}
                                        <span className={`ml-2 text-xs px-1.5 rounded-full ${categoryFilter === option ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}>
                                            {getCount('category', option)}
                                        </span>
                                    </button>
                                ))}
                            </div>



                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px] content-start">
                    {displayedResources.map((resource, index) => (
                        <div
                            key={resource.id}
                            style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }} // opacity 0 start for animation to handle fade-in
                            className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden cursor-pointer animate-slide-up"
                            onClick={() => handleOpen(resource.id)}
                            onMouseEnter={() => setHoveredCard(resource.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Featured Badge Removed */}

                            {/* 'Expand View' Visual Cue - Appears on Hover for ALL content */}
                            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="flex items-center gap-1 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full border shadow-sm bg-white/90 text-gray-600 border-gray-200">
                                    <div className="icon-maximize text-xs"></div>
                                    Expand View
                                </div>
                            </div>

                            <div className="p-7 flex flex-col h-full relative z-0">
                                {/* Card Header */}
                                <div className="flex items-start justify-between mb-5">
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 border bg-gray-50 border-gray-100 group-hover:bg-blue-50 group-hover:border-blue-100">
                                        <div className={`icon-${resource.icon} text-2xl transition-colors duration-300 text-gray-400 group-hover:text-[var(--primary-blue)]`}></div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-[var(--primary-blue)] transition-colors text-gray-900 line-clamp-2">
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-5 min-h-[100px]">
                                        {resource.description}
                                    </p>

                                    {/* Categories Only (Audience Removed) */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {resource.category.map(cat => (
                                            <span key={cat} className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Area */}
                                <div className="mt-auto pt-5 border-t border-dashed border-gray-100 flex items-center justify-between">
                                    {/* Visit Site Button - stops propagation to prevent opening modal */}
                                    <a
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-xs font-bold text-gray-400 hover:text-[var(--primary-blue)] flex items-center py-1.5 px-3 rounded-md hover:bg-blue-50 transition-colors z-10"
                                    >
                                        Visit Site
                                        <div className="icon-external-link ml-1.5 text-xs"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Infinite Scroll Trigger / Loader */}
                {displayedResources.length < sortedResources.length && (
                    <div ref={observerTarget} className="mt-12 flex justify-center py-4">
                        <div className="flex items-center gap-2 text-gray-400 text-sm font-medium animate-pulse">
                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                            Loading more resources...
                        </div>
                    </div>
                )}

                {displayedResources.length === sortedResources.length && sortedResources.length > 0 && (
                    <div className="mt-12 text-center text-gray-400 text-sm pb-10">
                        All resources loaded
                    </div>
                )}

                {filteredResources.length === 0 && (
                    <div className="text-center py-24 bg-white rounded-xl border border-dashed border-gray-200 mt-8">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <div className="icon-search text-2xl text-gray-400"></div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">No resources found</h3>
                        <p className="text-gray-500 max-w-sm mx-auto">
                            We couldn't find any resources matching "{searchQuery}" in the selected category/audience.
                        </p>
                        <button
                            onClick={() => { setSearchQuery(""); setCategoryFilter("All"); setAudienceFilter("All"); }}
                            className="mt-4 text-[var(--primary-blue)] font-semibold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
