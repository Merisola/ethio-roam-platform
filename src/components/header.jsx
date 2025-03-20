import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';  // Import logo
import '../styles/global.css'
import './../styles/header.css'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Ethio Roam Logo" className="h-12" /> {/* Logo */}
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-gray-200 transition duration-300">About Us</Link>
          </li>
          <li className="group relative">
            <button className="hover:text-gray-200 transition duration-300">Explore</button>
            <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-lg rounded-md">
              <li><Link to="/places" className="block px-4 py-2 hover:bg-gray-200">Places</Link></li>
              <li><Link to="/urban-areas" className="block px-4 py-2 hover:bg-gray-200">Urban Areas</Link></li>
              <li><Link to="/events" className="block px-4 py-2 hover:bg-gray-200">Events</Link></li>
              <li><Link to="/hotels" className="block px-4 py-2 hover:bg-gray-200">Hotels</Link></li>
              <li><Link to="/kids-section" className="block px-4 py-2 hover:bg-gray-200">Kids Section</Link></li>
            </ul>
          </li>
          <li className="group relative">
            <button className="hover:text-gray-200 transition duration-300">Book</button>
            <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-lg rounded-md">
              <li><Link to="/contact-us" className="block px-4 py-2 hover:bg-gray-200">Contact Us</Link></li>
            </ul>
          </li>
          <li>
            <div className="group relative">
              <button className="hover:text-gray-200 transition duration-300">Review</button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
