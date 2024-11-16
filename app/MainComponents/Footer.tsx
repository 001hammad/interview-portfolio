import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-950 py-12">
      <div className="container mx-auto px-5 text-center">
        <p className="text-white text-sm">
          &copy; 2024 Hammad Hafeez. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-500">
            LinkedIn
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-500">
            GitHub
          </Link>
          <Link href="mailto:youremail@example.com" className="text-white hover:text-indigo-500">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
