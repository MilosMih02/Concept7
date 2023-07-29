import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styling/headerStyles.css';

const Header: React.FC = () => {
    useEffect(() => {
        const toggleNavbar = () => {
            const navbar = document.getElementById('navbar-default');
            if (navbar) {
                navbar.classList.toggle('hidden');
            }
        };

        const navbarToggleButton = document.getElementById('navbar-toggle-button');
        if (navbarToggleButton) {
            navbarToggleButton.addEventListener('click', toggleNavbar);

            // Clean up the event listener when the component unmounts
            return () => {
                navbarToggleButton.removeEventListener('click', toggleNavbar);
            };
        }
    }, []);

    return (
        <header className="bg-gray-800 text-white py-4">
            <nav className="black border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center">
                        <span className="self-center text-2xl font-semibold dark:text-white">Concept7</span>
                    </a>
                    <button
                        id="navbar-toggle-button"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <span className="h-0.5 w-6 bg-white my-1"></span>
                        <span className="h-0.5 w-6 bg-white my-1"></span>
                        <span className="h-0.5 w-6 bg-white my-1"></span>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-custom-gray md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link
                                    to="/Home"
                                    className="block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-black-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Todo"
                                    className="block py-2 pl-3 pr-4 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-black-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    To-do
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;