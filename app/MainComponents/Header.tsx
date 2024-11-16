'use client';

import { useState } from 'react';
import Link from 'next/link'; // Import Link for Next.js routing

const Header = () => {
  // State to control menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-yellow-400 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="#" className="text-2xl font-bold text-gray-900">Hammad&apos;s Portfolio</Link>

        {/* Burger Button for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-6 text-gray-900">
          <Link href="#home" className="hover:underline font-semibold hover:text-purple-500 duration-300">Home</Link>
          <Link href="#About" className="hover:underline font-semibold hover:text-purple-500 duration-300">About</Link>
          <Link href="#Projects" className="hover:underline font-semibold hover:text-purple-500 duration-300">Projects</Link>
          <Link href="#Skills" className="hover:underline font-semibold hover:text-purple-500 duration-300">Skills</Link>
          <Link href="#Contact" className="hover:underline font-semibold hover:text-purple-500 duration-300">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu - Slide-in from Right */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64`}
      >
        <nav className="flex flex-col items-center space-y-4 py-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 focus:outline-none"
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
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link href="#home" className="hover:underline">Home</Link>
          <Link href="#About" className="hover:underline">About</Link>
          <Link href="#Projects" className="hover:underline">Projects</Link>
          <Link href="#Skills" className="hover:underline">Skills</Link>
          <Link href="#Contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
