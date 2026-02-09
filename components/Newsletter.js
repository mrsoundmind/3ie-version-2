function Newsletter() {
    return (
        <section className="bg-gray-900 py-16">
            <div className="container-custom relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[var(--primary-blue)] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-white mb-4 font-serif">
                            Stay updated with the latest evidence.
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Join 25,000+ researchers and policymakers receiving our monthly insights and new resource alerts.
                        </p>
                    </div>
                    
                    <div className="md:w-1/2 w-full max-w-md">
                        <form className="bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/20 flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Enter your work email" 
                                className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none border-none"
                            />
                            <button className="btn bg-[var(--primary-blue)] text-white hover:bg-blue-600 whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 mt-3 text-center sm:text-left">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}