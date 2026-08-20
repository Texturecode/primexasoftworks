export const Tagline = () => {
    return (
        <div className="tagline hidden md:block bg-linear-to-tr from-blue-500 to-[#0342E5] p-1.5">
            <div className="max-w-7xl mx-auto relative">
                <div className="flex justify-between">
                    <ul className="list-none space-x-1">
                        <li className="inline-flex items-center">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 text-white me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <a className="text-white/70 hover:text-white transition-all duration-500" href="tel:+152534-468-854">+152 534-468-854</a>
                        </li>
                        <li className="hidden md:inline-flex  items-center ps-2">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 text-white me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <a className="text-white/70 hover:text-white transition-all duration-500" href="mailto:contact@example.com">contact@example.com</a>
                        </li>
                    </ul>
                    <ul className="list-none hidden md:block space-x-1">
                        <li className="inline-flex items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 text-white me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                            <a className="text-white/70 hover:text-white transition-all duration-500" href="/login">Login</a></li><li className="inline-flex items-center ps-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 text-white me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            <a className="text-white/70 hover:text-white transition-all duration-500" href="/helpcenter-overview">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}