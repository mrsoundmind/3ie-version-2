function Hero({ categoryFilter, audienceFilter }) {
    const [selectedResourceId, setSelectedResourceId] = React.useState(null);
    const [count, setCount] = React.useState(0);

    // Find the Development Evidence Portal resource (id: 1)
    const editorChoiceResource = resourcesData.find(r => r.id === 1);
    const activeResource = resourcesData.find(r => r.id === selectedResourceId);

    const handleOpen = (id) => setSelectedResourceId(id);
    const handleClose = () => setSelectedResourceId(null);

    // Animated counter from 0 to 20000
    React.useEffect(() => {
        const duration = 2000; // 2 seconds
        const target = 20000;
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, 16);

        return () => clearInterval(timer);
    }, []);

    // Helper to determine breadcrumb text
    const showCategory = categoryFilter && categoryFilter !== "All";
    const showAudience = audienceFilter && audienceFilter !== "All";

    return (
        <section className="relative bg-[var(--secondary-bg)] pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-visible">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--secondary-bg)]/50 to-[var(--secondary-bg)] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        {/* Breadcrumbs - Moved to Top */}
                        <nav className="flex items-center text-sm text-gray-500 animate-fade-in mb-2 flex-wrap">
                            <a href="#" className="hover:text-[var(--primary-blue)] transition-colors">Home</a>
                            <span className="mx-2 text-gray-300">/</span>
                            <span className={`transition-colors ${!showCategory && !showAudience ? "text-gray-900 font-medium" : "hover:text-[var(--primary-blue)]"}`}>Resources</span>

                            {showCategory && (
                                <>
                                    <span className="mx-2 text-gray-300">/</span>
                                    <span className={`transition-colors ${!showAudience ? "text-gray-900 font-medium" : ""}`}>
                                        {categoryFilter}
                                    </span>
                                </>
                            )}

                            {showAudience && (
                                <>
                                    <span className="mx-2 text-gray-300">/</span>
                                    <span className="font-semibold text-[var(--primary-blue)]">
                                        {audienceFilter}
                                    </span>
                                </>
                            )}
                        </nav>

                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100/80 backdrop-blur-sm text-[var(--primary-blue)] text-sm font-bold tracking-wide mb-4 border border-blue-200 animate-bounce-subtle">
                            <div className="icon-sparkles mr-2 text-sm"></div>
                            3ie Resources
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.15] tracking-tight">
                            Evidence that <br />
                            <span className="text-[var(--primary-blue)] relative inline-block">
                                improves lives.
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 opacity-60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                            Access our curated collection of over <strong className="inline-block min-w-[80px] tabular-nums">{count.toLocaleString()}+</strong> rigorous impact evaluations, datasets, and practical manuals designed to empower researchers and policymakers.
                        </p>
                        <div className="flex flex-col gap-4 pt-2">
                            <a href="#resources-grid" className="btn btn-primary shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transform hover:-translate-y-0.5 transition-all inline-flex items-center justify-center w-fit group">
                                Explore Resources
                                <span className="icon-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></span>
                            </a>
                            <div className="flex items-center gap-2 text-xs text-gray-600">
                                <div className="icon-trending-up text-base text-orange-500"></div>
                                <span className="font-medium">Trending:</span>
                                <a href="#" className="text-[var(--primary-blue)] hover:underline">Evidence Gap Maps</a>
                                <span className="text-gray-400">•</span>
                                <a href="#" className="text-[var(--primary-blue)] hover:underline">Impact Evaluations</a>
                            </div>
                        </div>
                    </div>

                    {/* Spotlight Card - Dynamic Stacking Effect - NO 3D TILT */}
                    <div className="relative group lg:mt-10 lg:translate-y-12 z-20">
                        {/* Decorative glow behind card */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                        <div
                            className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-300 group-hover:scale-[1.01] cursor-pointer"
                            onClick={() => handleOpen(1)}
                        >
                            <div className="bg-[var(--primary-blue)] px-6 py-4 flex justify-between items-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/5"></div>
                                <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

                                <span className="text-white font-bold tracking-wide text-xs uppercase flex items-center relative z-10">
                                    <div className="icon-star mr-2 text-yellow-300 fill-current"></div>
                                    Editor's Choice
                                </span>
                            </div>

                            <div className="p-8">
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-100">
                                        <div className="icon-database text-3xl text-[var(--primary-blue)]"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Development Evidence Portal</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Active Dataset
                                            </span>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                Updated Monthly
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-8 leading-relaxed border-b border-gray-100 pb-6">
                                    The world's most comprehensive repository of impact evaluations and systematic reviews. Search, filter, and visualize evidence on what works in international development.
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100/50">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <div className="icon-server text-sm"></div>
                                        <span className="text-sm font-medium">{editorChoiceResource.category[0]}</span>
                                    </div>
                                    <span className="flex items-center gap-2 text-[var(--primary-blue)] font-bold text-sm group-hover/link:gap-3 transition-all">
                                        View Resource
                                        <div className="icon-arrow-right w-4 h-4"></div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PeekModal */}
            <PeekModal
                resource={activeResource}
                isOpen={!!selectedResourceId}
                onClose={handleClose}
            />
        </section>
    );
}