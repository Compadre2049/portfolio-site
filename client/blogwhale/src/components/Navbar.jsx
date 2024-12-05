import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
    const { user, logout, isAuthenticated } = useAuth();
    const isAdmin = user?.email === 'admin@example.com';

    return (
        <nav className="bg-blue-500 p-4 shadow-md">
            <div className="container mx-auto">
                <ul className="flex justify-center items-center space-x-8">
                    <li>
                        <Link
                            to="/"
                            className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md transition duration-150 ease-in-out"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blogs"
                            className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md transition duration-150 ease-in-out"
                        >
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md transition duration-150 ease-in-out"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md transition duration-150 ease-in-out"
                        >
                            Contact
                        </Link>
                    </li>

                    {isAuthenticated ? (
                        <>
                            {isAdmin ? (
                                <li>
                                    <Link
                                        to="/admin"
                                        className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md transition duration-150 ease-in-out"
                                    >
                                        Admin Page
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    <Link
                                        to="/profile"
                                        className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md transition duration-150 ease-in-out"
                                    >
                                        Profile
                                    </Link>
                                </li>
                            )}
                            <li>
                                <button
                                    onClick={logout}
                                    className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md transition duration-150 ease-in-out"
                                >
                                    Logout
                                </button>
                            </li>
                            {user && (
                                <li className="text-white font-medium px-3 py-2">
                                    Welcome, {user.name}
                                </li>
                            )}
                        </>
                    ) : (
                        <li>
                            <Link
                                to="/login"
                                className="text-white hover:text-gray-200 font-medium px-3 py-2 rounded-md transition duration-150 ease-in-out"
                            >
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;