'use client'

import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [isGray, setIsGray] = useState(true);

  // Background and text color change logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGray((prev) => !prev);
    }, 2000); // Change background every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='Contact' className="text-gray-600 body-font bg-gray-900 py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-white mb-4">Get In Touch</h2>
          <p className="leading-relaxed text-lg text-gray-100">
            Interested in working together or just want to say hello? Feel free to reach out!
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <form
            action="mailto:youremail@example.com"
            method="POST"
            className={`p-8 rounded-lg shadow-lg transition-all duration-500 ${
              isGray ? 'bg-gray-500 text-white' : 'bg-yellow-300 text-black'
            }`}
          >
            <div className="mb-4">
              <label htmlFor="name" className="text-sm font-semibold mb-2 block">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-white border border-gray-300 caret-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm font-semibold mb-2 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-white border caret-yellow-300 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-sm font-semibold mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 bg-white border caret-yellow-300 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
