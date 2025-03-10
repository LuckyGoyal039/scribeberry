'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const navigationItems = [
        { value: 'Home', link: '/' },
        { value: 'Pricing', link: '/#price' },
        { value: 'FAQ', link: '/#faq' },
        { value: 'Blog', link: '/#blog' },
        { value: 'App', link: '/#app' },
        { value: 'Data Privacy', link: '/#data-privacy' }
    ];

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo and Navigation Section */}
                    <div className='flex-1 lg:flex-initial flex items-center justify-between lg:justify-start gap-8'>
                        <Link href="/" className="flex items-center">
                            <Image src="/images/logo-full.png" alt="Scribeberry Logo" width={150} height={30} />
                        </Link>

                        {/* Desktop/Tablet Navigation */}
                        <div className="hidden lg:block">
                            <ul className="font-medium flex flex-row space-x-8 text-sm">
                                {navigationItems.map((item) => (
                                    <li key={item.value}>
                                        <Link
                                            href={item.link}
                                            className="block py-2 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                                        >
                                            {item.value}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Mobile/Tablet menu button */}
                    <div className="flex lg:hidden items-center gap-4">
                        {/* Show Login link in tablet view */}
                        <button onClick={() => router.push("/auth/signin")}
                            className="text-sm text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                        >
                            Login
                        </button>
                        <button
                            onClick={toggleSidebar}
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop CTA buttons */}
                    <div className="hidden lg:flex items-center gap-5 text-sm">
                        <button
                            onClick={() => router.push("/auth/signin")}
                            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                        >
                            Log in or Sign up
                        </button>
                        <Link
                            href="#"
                            className="border-2 rounded-3xl border-indigo-500 px-6 py-2 hover:bg-indigo-500 transition-colors"
                        >
                            Request a Demo
                        </Link>
                    </div>
                </div>

                {/* Mobile/Tablet Sidebar Overlay */}
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    onClick={toggleSidebar}
                />

                {/* Mobile/Tablet Sidebar */}
                <div
                    className={`fixed top-0 right-0 h-full w-[300px] bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        } lg:hidden`}
                >
                    <div className="p-6">
                        <button
                            onClick={toggleSidebar}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <div className="mt-8">
                            <ul className="space-y-4">
                                {navigationItems.map((item) => (
                                    <li key={item.value}>
                                        <Link
                                            href={item.link}
                                            className="block py-2 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                                        >
                                            {item.value}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 space-y-4">
                                <Link
                                    href="#"
                                    className="block border-2 rounded-3xl border-indigo-500 px-6 py-3 text-center text-lg hover:bg-indigo-700"
                                    onClick={toggleSidebar}
                                >
                                    Request a Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;