function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 text-sm">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2 lg:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-6">
                            <img src="./images/3ie-logo.png" alt="3ie Impact" className="h-10 w-auto" />
                        </a>
                        <p className="text-gray-500 mb-6 max-w-sm">
                            The International Initiative for Impact Evaluation (3ie) promotes evidence-informed equitable, inclusive and sustainable development.
                        </p>
                        <div className="flex space-x-4">
                            {['twitter', 'facebook', 'linkedin', 'youtube'].map(social => (
                                <a key={social} href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-[var(--primary-blue)] hover:text-white transition-colors">
                                    <div className={`icon-${social} text-sm`}></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">About</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-[var(--primary-blue)]">Who We Are</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[var(--primary-blue)]">Our Team</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[var(--primary-blue)]">Careers</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[var(--primary-blue)]">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">Work</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-[var(--primary-blue)]">Evidence Hub</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[var(--primary-blue)]">Resources</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[var(--primary-blue)]">Projects</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[var(--primary-blue)]">Publications</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">Legal</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-[var(--primary-blue)]">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[var(--primary-blue)]">Terms of Use</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[var(--primary-blue)]">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
                    <p>&copy; 2026 International Initiative for Impact Evaluation (3ie). All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}