import React from 'react';

const Services = () => {
  return (
    <section className="text-gray-600 body-font bg-yellow-400 sm:mt-28 py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            What I Do
          </h2>
          <p className="leading-relaxed text-lg text-gray-600">
            I specialize in creating user-friendly and highly functional websites and web applications. Below are the services I offer:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Web Development</h3>
            <p className="text-gray-100 mb-4">
              I build responsive, fast-loading, and SEO-optimized websites tailored to your business needs.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">UI/UX Design</h3>
            <p className="text-gray-100 mb-4">
              I create intuitive and user-friendly designs that enhance the overall user experience.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">E-Commerce Solutions</h3>
            <p className="text-gray-100 mb-4">
              From building your e-commerce platform to implementing payment gateways, I help you launch your online store.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">API Development</h3>
            <p className="text-gray-100 mb-4">
              I design and develop robust APIs to ensure seamless communication between your application and third-party services.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">API Development</h3>
            <p className="text-gray-100 mb-4">
              I design and develop robust APIs to ensure seamless communication between your application and third-party services.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">API Development</h3>
            <p className="text-gray-100 mb-4">
              I design and develop robust APIs to ensure seamless communication between your application and third-party services.
            </p>
          </div>
          {/* Add more services as necessary */}
        </div>
      </div>
    </section>
  );
};

export default Services;
