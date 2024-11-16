import React from 'react';

const Skills = () => {
  return (
    <section id='Skills' className="text-gray-600 body-font bg-gray-900 py-24 sm:mt-28 skills-section">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-white mb-4">
            My Skills
          </h2>
          <p className="leading-relaxed text-lg text-gray-400">
            Here are the key skills I bring to the table. From front-end development to back-end expertise, I have the technical know-how to build engaging and effective applications.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-yellow-500 text-white p-4 rounded-full mx-auto mb-4">
              <i className="fas fa-code fa-2x"></i>
            </div>
            <h3 className="font-medium text-lg text-white">JavaScript</h3>
          </div>
          <div className="text-center">
            <div className="bg-yellow-500 text-white p-4 rounded-full mx-auto mb-4">
              <i className="fas fa-cogs fa-2x"></i>
            </div>
            <h3 className="font-medium text-lg text-white">TypeScript</h3>
          </div>
          <div className="text-center">
            <div className="bg-yellow-500 text-white p-4 rounded-full mx-auto mb-4">
              <i className="fas fa-database fa-2x"></i>
            </div>
            <h3 className="font-medium text-lg text-white">Next.Js</h3>
          </div>
          <div className="text-center">
            <div className="bg-yellow-500 text-white p-4 rounded-full mx-auto mb-4">
              <i className="fas fa-cloud fa-2x"></i>
            </div>
            <h3 className="font-medium text-lg text-white">HTML / CSS</h3>
          </div>
          {/* Add more skills here */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
