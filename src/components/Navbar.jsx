import React, {useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Home from './Home';
import Apply from './Apply';
import Contact from './Contact';
import Testimonials from './Testimonials';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const Logo = require('../imgs/Logo_Highres_transparent.png');

return (
    <nav className="w-full dark:text-[#e3b151] text-[#080e18] dark:bg-[#080e18]]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block text-right">
                    <a href="javascript:void(0)">
                        <div className=""><img src={Logo} width="300" className=""/></div>
                        {/* <h2 className="text-md sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-amber-300">Sparta Mortgage</h2> */}
                    </a>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 dark:text-[#e3b151] text-[#080e18]"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 dark:text-[#e3b151] text-[#080e18]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl bg-white dark:text-[#e3b151] text-[#080e18] dark:bg-[#080e18]">
                            <div className="hover:text-indigo-200 text-center">
                                <Link to="/">Home</Link>
                            </div>
                            <div className="hover:text-indigo-200 text-center">
                                <CustomLink to="/testimonials">Testimonials</CustomLink>
                            </div>
                            <div className="hover:text-indigo-200 text-center">
                                <CustomLink to="/apply">Apply</CustomLink>
                            </div>
                            <div className="hover:text-indigo-200 text-center">
                                <CustomLink to="/contact">Contact</CustomLink>
                            </div>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
);
}

function CustomLink({ to, children,...props }){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}