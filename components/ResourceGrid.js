function ResourceGrid({ categoryFilter, setCategoryFilter, audienceFilter, setAudienceFilter }) {
    // Filters now received from props
    const [searchQuery, setSearchQuery] = React.useState("");
    const [sortBy, setSortBy] = React.useState("Featured"); // New: Sorting State
    const [visibleCount, setVisibleCount] = React.useState(6); // Infinite Scroll Limit
    const observerTarget = React.useRef(null);
    const [hoveredCard, setHoveredCard] = React.useState(null);
    const [selectedResourceId, setSelectedResourceId] = React.useState(null);

    const itemsPerPage = 6; // Increment by 6

    // Categories split
    const categoryOptions = ["All", "Databases", "Tools and methods", "Learning and reference", "Community and groups"];
    const audienceOptions = ["All", "For Researchers", "For Policymakers", "For Academic Institutions", "For Donors", "For NGOs", "For Students", "For Evaluators"];


    // 1. Filter Logic
    const filteredResources = resourcesData.filter(resource => {
        const matchesCategory = categoryFilter === "All" || resource.category.includes(categoryFilter);
        const matchesAudience = audienceFilter === "All" || (resource.audience && resource.audience.includes(audienceFilter));
        const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesAudience && matchesSearch;
    });

    // 2. Sorting Logic
    const sortedResources = [...filteredResources].sort((a, b) => {
        if (sortBy === "Featured") {
            // Featured first, then by ID
            return (b.featured === a.featured) ? 0 : b.featured ? 1 : -1;
        }
        if (sortBy === "A-Z") return a.title.localeCompare(b.title);
        if (sortBy === "Z-A") return b.title.localeCompare(a.title);
        if (sortBy === "Newest") return b.id - a.id; // Mocking date by ID
        return 0;
    });

    // 3. Infinite Scroll Data Logic
    // We just take the first N items from the sorted list
    const displayedResources = sortedResources.slice(0, visibleCount);

    // Reset visible count on filter/search change
    React.useEffect(() => {
        setVisibleCount(itemsPerPage);
    }, [categoryFilter, audienceFilter, searchQuery, sortBy]);

    // Intersection Observer to load more
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    // Load more items when target is visible
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
        if (type === "audience") return resourcesData.filter(r => r.audience && r.audience.includes(value)).length;
        return 0;
    };

    // 3. Deep Linking & Overlay Logic
    // Initialize from URL
    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const resourceId = params.get('resource');
        if (resourceId) {
            setSelectedResourceId(parseInt(resourceId));
        }
    }, []);

    // Update URL when selection changes
    React.useEffect(() => {
        const url = new URL(window.location);
        if (selectedResourceId) {
            url.searchParams.set('resource', selectedResourceId);
            // Disable body scroll handled in Modal component now
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
    const showAudience = audienceFilter && audienceFilter !== "All";

    return (
        <section id="resources-grid" className="py-20 bg-gray-50/50 min-h-[800px]">
            {/* Peek Modal Component */}
            <PeekModal
                resource={activeResource}
                isOpen={!!selectedResourceId}
                onClose={handleClose}
            />

            <div className="container-custom">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div className="max-w-2xl">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center text-sm text-gray-500 mb-4 animate-fade-in flex-wrap">
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

                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Toolkit for Change</h2>
                        <p className="text-gray-600 text-lg">
                            Browse our complete library of tools, manuals, and datasets designed to support rigorous evidence generation.
                        </p>
                    </div>
                </div>

                {/* Sticky Control Bar - Solid & Clean */}
                <div className="sticky top-6 z-[60] bg-white rounded-2xl border border-gray-100 shadow-xl shadow-slate-200/50 p-2 md:p-3 mb-12 transition-all duration-300 ring-1 ring-black/5">
                    <div className="flex flex-col xl:flex-row gap-4 justify-between items-center">

                        {/* Filters Group + Sorting */}
                        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">

                            {/* Audience Dropdown */}
                            <div className="relative group pb-4 md:pb-0">
                                <button className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border shadow-sm hover:shadow-md hover:-translate-y-0.5 ${audienceFilter !== "All"
                                    ? "bg-blue-50 text-blue-700 border-blue-200 ring-2 ring-blue-100"
                                    : "bg-white text-slate-700 border-gray-200/60 hover:bg-gray-50 hover:border-blue-200"
                                    }`}>
                                    <span className={`font-medium ${audienceFilter !== "All" ? "text-blue-500" : "text-slate-400"}`}>Audience:</span>
                                    <span>{audienceFilter}</span>
                                    <div className={`icon-chevron-down text-xs ml-1 transition-colors ${audienceFilter !== "All" ? "text-blue-500" : "text-slate-400 group-hover:text-blue-500"}`}></div>
                                </button>
                                <div className="absolute left-0 top-full -mt-2 w-56 pt-2 hidden group-hover:block z-50">
                                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in">
                                        {audienceOptions.map(option => (
                                            <button
                                                key={option}
                                                onClick={() => {
                                                    setAudienceFilter(option);
                                                }}
                                                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex justify-between ${audienceFilter === option ? "text-[var(--primary-blue)] font-bold bg-blue-50" : "text-gray-600"}`}
                                            >
                                                {option}
                                                <span className="text-xs text-gray-400 bg-gray-100 px-1.5 rounded-full">{getCount('audience', option)}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Category Dropdown */}
                            <div className="relative group pb-4 md:pb-0">
                                <button className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border shadow-sm hover:shadow-md hover:-translate-y-0.5 ${categoryFilter !== "All"
                                    ? "bg-blue-50 text-blue-700 border-blue-200 ring-2 ring-blue-100"
                                    : "bg-white text-slate-700 border-gray-200/60 hover:bg-gray-50 hover:border-blue-200"
                                    }`}>
                                    <span className={`font-medium ${categoryFilter !== "All" ? "text-blue-500" : "text-slate-400"}`}>Category:</span>
                                    <span>{categoryFilter}</span>
                                    <div className={`icon-chevron-down text-xs ml-1 transition-colors ${categoryFilter !== "All" ? "text-blue-500" : "text-slate-400 group-hover:text-blue-500"}`}></div>
                                </button>
                                <div className="absolute left-0 top-full -mt-2 w-64 pt-2 hidden group-hover:block z-50">
                                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in">
                                        {categoryOptions.map(option => (
                                            <button
                                                key={option}
                                                onClick={() => {
                                                    setCategoryFilter(option);
                                                }}
                                                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex justify-between ${categoryFilter === option ? "text-[var(--primary-blue)] font-bold bg-blue-50" : "text-gray-600"}`}
                                            >
                                                {option}
                                                <span className="text-xs text-gray-400 bg-gray-100 px-1.5 rounded-full">{getCount('category', option)}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sorting Dropdown */}
                            <div className="relative group pb-4 md:pb-0 border-l pl-4 border-gray-200/60 ml-2">
                                <button className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[var(--primary-blue)] transition-colors py-2 group/sort">
                                    <span className="text-slate-400 font-medium">Sort by:</span>
                                    {sortBy}
                                    <div className="icon-chevron-down text-xs text-slate-300 group-hover/sort:text-blue-500 transition-colors"></div>
                                </button>
                                <div className="absolute left-0 top-full -mt-2 w-40 pt-2 hidden group-hover:block z-50">
                                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in">
                                        {["Featured", "Newest", "A-Z", "Z-A"].map(option => (
                                            <button
                                                key={option}
                                                onClick={() => setSortBy(option)}
                                                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${sortBy === option ? "text-[var(--primary-blue)] font-bold bg-blue-50" : "text-gray-600"}`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Search Box */}
                        <div className="relative flex-grow md:max-w-xs ml-auto">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <div className="icon-search text-slate-400 text-lg group-focus-within:text-blue-500 transition-colors"></div>
                            </div>
                            <input
                                type="text"
                                placeholder="Search resources..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="block w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 sm:text-sm transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px] content-start">
                    {displayedResources.map((resource, index) => (
                        <div
                            key={resource.id}
                            style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }} // opacity 0 start for animation to handle fade-in
                            className={`group bg-white rounded-xl border transition-all duration-300 flex flex-col h-full relative overflow-hidden cursor-pointer animate-slide-up ${resource.featured
                                ? "border-blue-300 shadow-lg ring-2 ring-blue-50 bg-blue-50/10"
                                : "border-gray-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1"
                                }`}
                            onClick={() => handleOpen(resource.id)}
                            onMouseEnter={() => setHoveredCard(resource.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Featured Badge - Hidden on Hover to show Expand View */}
                            {resource.featured && (
                                <div className="absolute top-4 right-4 z-10 group-hover:opacity-0 transition-opacity duration-200">
                                    <span className="flex items-center gap-1 bg-blue-100 text-[var(--primary-blue)] text-xs font-bold px-2 py-1 rounded-full border border-blue-200">
                                        <div className="icon-star text-xs fill-current"></div>
                                        Featured
                                    </span>
                                </div>
                            )}

                            {/* 'Expand View' Visual Cue - Appears on Hover for ALL content */}
                            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className={`flex items-center gap-1 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full border shadow-sm ${resource.featured
                                    ? "bg-blue-100/90 text-[var(--primary-blue)] border-blue-200"
                                    : "bg-white/90 text-gray-600 border-gray-200"
                                    }`}>
                                    <div className="icon-maximize text-xs"></div>
                                    Expand View
                                </div>
                            </div>

                            <div className="p-7 flex flex-col h-full relative z-0">
                                {/* Card Header */}
                                <div className="flex items-start justify-between mb-5">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 border ${resource.featured
                                        ? "bg-[var(--primary-blue)] border-blue-600"
                                        : "bg-gray-50 border-gray-100 group-hover:bg-blue-50 group-hover:border-blue-100"
                                        }`}>
                                        <div className={`icon-${resource.icon} text-2xl transition-colors duration-300 ${resource.featured
                                            ? "text-white"
                                            : "text-gray-400 group-hover:text-[var(--primary-blue)]"
                                            }`}></div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <h3 className={`text-xl font-bold mb-3 leading-snug group-hover:text-[var(--primary-blue)] transition-colors ${resource.featured ? "text-[var(--primary-blue)]" : "text-gray-900"
                                        }`}>
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {resource.description}
                                    </p>

                                    {/* Categories & Audience Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {resource.category.map(cat => (
                                            <span key={cat} className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded">
                                                {cat}
                                            </span>
                                        ))}
                                        {resource.audience && resource.audience.slice(0, 2).map(aud => ( // Show max 2 audience tags
                                            <span key={aud} className="text-xs font-medium px-2 py-1 bg-gray-50 text-gray-500 border border-gray-100 rounded">
                                                {aud}
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