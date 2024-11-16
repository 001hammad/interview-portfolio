import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Projects = () => {
  return (
    <section id="Project" className="body-font bg-gray-900 py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-white mb-4">My Projects</h2>
          <p className="leading-relaxed text-lg text-gray-100">
            Check out some of the amazing projects I've worked on. Each one reflects my dedication and skill in creating high-quality web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-yellow-400 shadow-yellow-400 p-6 rounded-lg shadow-md">
            <Image
              className="w-full h-56 object-cover mb-4 rounded"
              src="/todopic.jpg"
              alt="Todo List App"
              width={640} // Adjust as needed
              height={224} // Adjust as needed
            />
            <h3 className="text-xl font-semibold text-gray-900">Todo List App</h3>
            <p className="text-gray-600 mb-4">You can handle your daily tasks or any specific event for reminders.</p>
            <Link href="https://my-todo-app-weld.vercel.app/" target="_blank" className="text-indigo-500 hover:text-indigo-600 hover:underline">
              View Project
            </Link>
          </div>
          <div className="bg-yellow-400 shadow-yellow-400 p-6 rounded-lg shadow-md">
            <Image
              className="w-full h-56 object-cover mb-4 rounded"
              src="/timer.png"
              alt="CountDown App"
              width={640} // Adjust as needed
              height={224} // Adjust as needed
            />
            <h3 className="text-xl font-semibold text-gray-900">CountDown App</h3>
            <p className="text-gray-600 mb-4">Countdown Timer is very helpfull App for you test to exlore it..</p>
            <Link href="https://countdown-clock-gules.vercel.app/" target="_blank" className="text-indigo-500 hover:text-indigo-600 hover:underline">
              View Project
            </Link>
          </div>
          <div className="bg-yellow-400 shadow-yellow-400 p-6 rounded-lg shadow-md">
            <Image
              className="w-full h-56 object-cover mb-4 rounded"
              src="/food-delivery.jpg"
              alt="Food Delivery Website"
              width={640} // Adjust as needed
              height={224} // Adjust as needed
            />
            <h3 className="text-xl font-semibold text-gray-900">Food Delivery Website</h3>
            <p className="text-gray-600 mb-4">This website design like a foodpanda web i design and developed with some functionalty..</p>
            <Link href="https://foodflavourweb-8m8s.vercel.app/" target="_blank" className="text-indigo-500 hover:text-indigo-600 hover:underline">
              View Project
            </Link>
          </div>
          {/* Add more projects */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
