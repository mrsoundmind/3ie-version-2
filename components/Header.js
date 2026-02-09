function Header() {
    const [isVisible, setIsVisible] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);
    const [isInResourcesSection, setIsInResourcesSection] = React.useState(false);

    // Detect if user is in the resources section
    React.useEffect(() => {
        const resourcesSection = document.getElementById('resources-grid');
        if (!resourcesSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInResourcesSection(entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when 10% of section is visible
        );

        observer.observe(resourcesSection);
        return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // If in resources section, keep nav hidden (don't show on scroll up)
            if (isInResourcesSection) {
                if (currentScrollY < 10) {
                    setIsVisible(true); // Show at very top
                } else {
                    setIsVisible(false); // Always hidden in resources section
                }
            }
            // Normal behavior outside resources section
            else {
                if (currentScrollY < lastScrollY || currentScrollY < 10) {
                    setIsVisible(true);
                } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setIsVisible(false);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isInResourcesSection]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 shadow-md font-sans transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            {/* Top Bar - Black */}
            <div className="bg-black text-white text-xs py-2">
                <div className="container-custom flex justify-between items-center">
                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        {['facebook', 'twitter', 'linkedin', 'youtube', 'instagram'].map(social => (
                            <a
                                key={social}
                                href="#"
                                className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800 transition-colors"
                            >
                                <div className={`icon-${social} text-sm`}></div>
                            </a>
                        ))}
                    </div>

                    {/* Secondary Navigation */}
                    <div className="flex items-center gap-6 font-medium">
                        <a href="#" className="hover:text-gray-300 transition-colors">Blogs</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Careers</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Events</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Media</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Newsletter</a>
                        <a href="#" className="font-bold text-white">Resources</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Donate</a>
                        <button className="hover:text-gray-300 transition-colors">
                            <div className="icon-search text-sm"></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Navigation - White */}
            <div className="bg-white py-4">
                <div className="container-custom flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="flex-shrink-0">
                        <img src="./images/3ie-logo.png" alt="3ie Impact" className="h-12 w-auto" />
                    </a>

                    {/* Primary Navigation */}
                    <div className="hidden md:flex items-center gap-8 font-bold text-[var(--primary-blue)]">
                        <div className="relative group cursor-pointer flex items-center gap-1">
                            <span>About</span>
                            <div className="icon-chevron-down text-xs mt-0.5"></div>
                        </div>
                        <a href="#" className="hover:text-[var(--primary-dark)] transition-colors text-[var(--primary-blue)]">Services</a>
                        <a href="#" className="hover:text-[var(--primary-dark)] transition-colors text-[var(--primary-blue)]">Research</a>
                        <div className="relative group cursor-pointer flex items-center gap-1 text-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white px-4 py-6 -my-4 h-full relative z-10 transition-colors">
                            <span>Evidence Hub</span>
                            <div className="icon-chevron-down text-xs mt-0.5"></div>

                            {/* Dropdown Menu (Simplified for visual match) */}
                            <div className="absolute top-full left-0 w-64 bg-[var(--primary-blue)] shadow-xl py-2 hidden group-hover:block rounded-b-md">
                                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-white/10">Development Evidence Portal</a>
                                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-white/10">Evidence gap maps</a>
                                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-white/10">Impact Stories Dashboard</a>
                                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-white/10">Publications</a>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <a href="#" className="bg-[var(--primary-dark)] text-white font-bold py-2 px-6 rounded-full hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/20">
                        Impact
                    </a>
                </div>
            </div>
        </header>
    );
}