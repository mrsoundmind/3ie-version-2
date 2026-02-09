function ResourceOverlay({ resource, isOpen, onClose, onNext, onPrev }) {
    if (!isOpen || !resource) return null;

    // Handle keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
                onClick={onClose}
            ></div>

            {/* Modal Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] animate-scale-in">
                
                {/* Header */}
                <div className="flex items-start justify-between p-6 border-b border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-blue-50 border border-blue-100 text-[var(--primary-blue)]`}>
                            <div className={`icon-${resource.icon} text-2xl`}></div>
                        </div>
                        <div>
                            <h3 className="text-xl font-serif font-bold text-gray-900 leading-snug mb-1">{resource.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {resource.category.map(cat => (
                                    <span key={cat} className="text-xs font-medium px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors"
                    >
                        <div className="icon-x text-2xl"></div>
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="p-6 overflow-y-auto">
                    <div className="prose prose-blue max-w-none text-gray-600 text-sm leading-relaxed mb-6">
                        <p className="font-medium text-gray-900 mb-2">Description</p>
                        <p>{resource.description}</p>
                        <p className="mt-4">
                            This resource provides essential guidance for conducting high-quality impact evaluations. It includes methodologies, practical examples, and standardized metrics used by leading development agencies globally.
                        </p>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Format</div>
                            <div className="flex items-center text-sm font-semibold text-gray-900">
                                <div className="icon-file-text mr-1.5 text-gray-400 text-xs"></div>
                                PDF
                            </div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Size</div>
                            <div className="text-sm font-semibold text-gray-900">2.4 MB</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Pages</div>
                            <div className="text-sm font-semibold text-gray-900">{resource.totalPages || 12}</div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">Published</div>
                            <div className="text-sm font-semibold text-gray-900">2024</div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                         {/* Nav Buttons */}
                        <button 
                            onClick={onPrev}
                            className="p-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-[var(--primary-blue)] hover:border-blue-200 transition-colors"
                            title="Previous"
                        >
                            <div className="icon-arrow-left text-lg"></div>
                        </button>
                        <button 
                            onClick={onNext}
                            className="p-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-[var(--primary-blue)] hover:border-blue-200 transition-colors"
                            title="Next"
                        >
                            <div className="icon-arrow-right text-lg"></div>
                        </button>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none btn bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-4 py-2.5 text-sm">
                            <div className="icon-download mr-2 text-sm"></div>
                            Download
                        </button>
                        <button className="flex-1 sm:flex-none btn bg-[var(--primary-blue)] text-white hover:bg-[var(--primary-dark)] px-6 py-2.5 text-sm shadow-lg shadow-blue-500/20">
                            View Full Resource
                            <div className="icon-external-link ml-2 text-sm"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}