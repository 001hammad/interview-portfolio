import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section 
      id='About' 
      className="text-gray-600 body-font bg-yellow-400 transition-colors duration-500 hover:bg-gray-300"
    >
      <div className="container mx-auto py-24 sm:mt-36 px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="leading-relaxed text-lg sm:w-2/4 sm:ml-96 text-gray-600">
            I am a passionate Frontend Developer from Karachi, Pakistan, with a strong expertise in web development. I have completed a GIAC course and am currently pursuing further studies to enhance my skills. I am highly skilled in creating dynamic and responsive user interfaces, and I love working with cutting-edge technologies to build seamless web experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-16">
          <div className="w-full md:w-1/2 lg:w-1/3 p-6">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">My Vision</h3>
              <p className="leading-relaxed text-base text-gray-100">
                My vision is to create seamless and impactful web applications that not only provide great user experiences but also solve real-world problems. I am committed to continuous learning and applying the best practices in frontend development to build intuitive, accessible, and innovative solutions.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-6">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">My Values</h3>
              <p className="leading-relaxed text-base text-gray-100">
                I believe in delivering quality code, maintaining a strong work ethic, and continuously striving for improvement. Collaboration, innovation, and a passion for learning are at the heart of everything I do. I am committed to creating web solutions that are not only effective but also enjoyable to use.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-6">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Me?</h3>
              <p className="leading-relaxed text-base text-gray-100">
                I bring a strong passion for frontend development, combining technical expertise with a user-centered approach to create engaging and functional web applications. With a commitment to clean code, scalability, and continuous learning, I ensure that every project I work on is both innovative and impactful.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-6">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <Image
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  src="/person1.jpg"
                  alt="team member"
                  width={128}
                  height={128}
                />
                <h3 className="text-xl font-medium text-white mb-2">John Doe</h3>
                <p className="text-gray-100">Co-Founder & CEO</p>
                <p className="text-base text-gray-100 mt-2">
                  John leads the company with over 10 years of experience in the tech and HR sectors. His vision is to simplify the hiring process through innovative tools and solutions.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 p-6">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <Image
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  src="/person2.jpg"
                  alt="team member"
                  width={128}
                  height={128}
                />
                <h3 className="text-xl font-medium text-white mb-2">Jane Smith</h3>
                <p className="text-gray-100">Chief Operating Officer</p>
                <p className="text-base text-gray-100 mt-2">
                  Jane manages operations and helps ensure the smooth running of the platform. She is passionate about creating a positive user experience and optimizing workflows.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 p-6">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <Image
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  src="/person1.jpg"
                  alt="team member"
                  width={128}
                  height={128}
                />
                <h3 className="text-xl font-medium text-white mb-2">Alex Johnson</h3>
                <p className="text-gray-100">Product Manager</p>
                <p className="text-base text-gray-100 mt-2">
                  Alex works with our product team to ensure we are building solutions that meet the needs of both job seekers and employers. He loves working with cutting-edge technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
