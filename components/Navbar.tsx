"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "px-6 lg:px-8 py-4"
                    : "px-6 lg:px-8 py-4"
            }`}
        >
            <div
                className={`flex justify-between items-center transition-all duration-300 ${
                    isScrolled
                        ? "bg-white/80 dark:bg-transparent shadow-lg rounded-full py-3 px-8 max-w-5xl mx-auto backdrop-blur-md dark:shadow-none dark:backdrop-blur-none"
                        : "bg-transparent rounded-none py-0 px-0"
                }`}
            >
                {/* Logo */}
                <a href="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                        DA
                    </div>
                    <span className="hidden sm:block text-sm font-semibold text-gray-900 dark:text-gray-100">Digital Agency</span>
                </a>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <a
                        href="/"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium text-sm"
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium text-sm"
                    >
                        About
                    </a>
                    <a
                        href="/portfolio"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium text-sm"
                    >
                        Portfolio
                    </a>
                    <a
                        href="/services"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium text-sm"
                    >
                        Services
                    </a>
                </div>

                {/* Right Side - Theme Toggle & CTA */}
                <div className="flex items-center gap-6">
                    {/* Theme Toggle Button - Visible on all screens */}
                    <button 
                        onClick={toggleTheme}
                        suppressHydrationWarning
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 focus:outline-none flex items-center justify-center"
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? (
                            // Moon icon for dark mode
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        ) : (
                            // Sun icon for light mode
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        )}
                    </button>

                    {/* CTA Button */}
                    <a
                        href="/contact"
                        className={`font-medium text-sm transition-all duration-300 ${
                            isScrolled
                                ? "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                                : "px-6 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        }`}
                    >
                        Contact
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-gray-700 dark:text-gray-300 text-2xl focus:outline-none">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}