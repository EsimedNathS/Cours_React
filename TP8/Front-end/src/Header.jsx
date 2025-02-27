import React from 'react'
import { Link } from "react-router";


function Header() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-lg z-50">
            <div className="container mx-auto flex justify-center space-x-12">
            <Link to="/home" className="hover:text-gray-300 text-lg font-semibold transition duration-300">
                Home
            </Link>
            <Link to="/about" className="hover:text-gray-300 text-lg font-semibold transition duration-300">
                About
            </Link>
            <Link to="/contact" className="hover:text-gray-300 text-lg font-semibold transition duration-300">
                Contact
            </Link>
            </div>
        </nav>
      );
}

export default Header