import React, { useEffect, useState, useMemo } from 'react';
import { resourcesData } from '../data/resources';

export default function PeekModal({ resource, isOpen, onClose }) {
    // 1. Hooks must be declared BEFORE any conditional returns

    // Handle keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    // Prevent body scroll when modal is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // 3. Tooltip Logic
    const [showTooltip, setShowTooltip] = React.useState(false);
    const [showCopiedToast, setShowCopiedToast] = React.useState(false);

    const handleShare = () => {
        // Copy current URL (which has the ?resource=ID param)
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            setShowCopiedToast(true);
            setTimeout(() => setShowCopiedToast(false), 2000);
        });
    };

    React.useEffect(() => {
        if (isOpen) {
            // Show tooltip after a slight delay for attention
            const showTimer = setTimeout(() => setShowTooltip(true), 500);
            // Hide it after 4 seconds
            const hideTimer = setTimeout(() => setShowTooltip(false), 4500);

            return () => {
                clearTimeout(showTimer);
                clearTimeout(hideTimer);
            };
        } else {
            setShowTooltip(false);
        }
    }, [isOpen]);

    // 2. Logic for "You Might Also Like"
    const relatedResources = React.useMemo(() => {
        if (!resource) return [];
        return resourcesData
            .filter(r => r.id !== resource.id) // Exclude current
            .map(r => ({
                resource: r,
                score: r.category.filter(cat => resource.category.includes(cat)).length // Count matching tags
            }))
            .sort((a, b) => b.score - a.score) // Sort by most matches
            .slice(0, 3) // Take top 3
            .map(item => item.resource);
    }, [resource]);



    // 2. Conditional Rendering
    if (!isOpen || !resource) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" role="dialog" aria-modal="true">
            {/* Backdrop with Blur */}
            <div
                className="absolute inset-0 bg-gray-900/40 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Modal Container - Arc Style Browser Window */}
            {/* Increased size to 95% width/height for full browser feel, removed max-w restriction */}
            <div className="relative w-[95%] h-[95%] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-up border border-gray-200/50 ring-1 ring-black/5">

                {/* Arc-style Header Bar */}
                <div className="h-12 bg-gray-50/90 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-4 flex-shrink-0 select-none z-20">

                    {/* Left: Resource Info (URL Bar style) */}
                    <div className="flex items-center gap-3 overflow-hidden flex-1 mr-4">
                        <div className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group cursor-default bg-white/50 px-3 py-1.5 rounded-md border border-transparent hover:border-gray-200 hover:bg-white w-full max-w-2xl transition-all">
                            {/* Security Lock / Status Indicator */}
                            <div className="w-5 h-5 flex-shrink-0 text-gray-400">
                                <div className="icon-lock text-xs"></div>
                            </div>

                            <div className="flex flex-col flex-1 min-w-0 justify-center">
                                <span className="text-xs font-semibold text-gray-900 truncate">
                                    {resource.title}
                                </span>
                                <span className="text-[10px] text-gray-400 truncate opacity-0 group-hover:opacity-100 transition-opacity absolute translate-y-3 group-hover:translate-y-4">
                                    {resource.url || '3ieimpact.org'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Controls */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {/* Share Button */}
                        <div className="relative">
                            <button
                                onClick={handleShare}
                                className="p-1.5 rounded-md text-gray-400 hover:text-[var(--primary-blue)] hover:bg-blue-50 transition-colors flex items-center gap-2 px-3 group"
                                title="Share this resource"
                            >
                                <span className="text-xs font-medium hidden sm:inline-block">Share</span>
                                <div className="icon-share-2 text-lg"></div>
                            </button>

                            {/* Copied Toast */}
                            {showCopiedToast && (
                                <div className="absolute top-full right-0 mt-2 bg-gray-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg shadow-xl animate-bounce-subtle z-50 whitespace-nowrap">
                                    Link Copied!
                                </div>
                            )}
                        </div>

                        <div className="w-px h-4 bg-gray-300 mx-1"></div>

                        {/* Expand / Open in New Tab */}
                        <div className="relative">
                            <a
                                href={resource.url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-md text-gray-400 hover:text-[var(--primary-blue)] hover:bg-blue-50 transition-colors flex items-center gap-2 px-3 group"
                                title="Open in full page"
                            >
                                <span className="text-xs font-medium hidden sm:inline-block">Open in Tab</span>
                                <div className="icon-external-link text-lg"></div>
                            </a>

                            {/* Auto-Tooltip */}
                            {showTooltip && (
                                <div className="absolute top-full right-0 mt-3 w-48 bg-gray-900 text-white text-xs rounded-lg py-2 px-3 shadow-xl animate-bounce-subtle z-50">
                                    <div className="absolute -top-1 right-3 w-2 h-2 bg-gray-900 transform rotate-45"></div>
                                    Open resource in new tab.
                                </div>
                            )}
                        </div>

                        <div className="w-px h-4 bg-gray-300 mx-1"></div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-red-500 transition-all duration-200 transform hover:rotate-90"
                            title="Close preview"
                        >
                            <div className="icon-x text-lg"></div>
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-grow bg-white relative w-full h-full overflow-hidden">



                    {/* All Content Loads in Iframe */}
                    <div className="w-full h-full bg-gray-50 flex items-center justify-center relative">
                        {/* Loading State Context (Optional wrapper, iframe handles its own but good for UX) */}
                        <iframe
                            src={resource.url}
                            title={resource.title}
                            className="absolute inset-0 w-full h-full border-0 bg-white"
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}
