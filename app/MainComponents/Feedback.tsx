import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font bg-yellow-400 py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">What People Say</h2>
          <p className="leading-relaxed text-lg text-gray-600">
            Here&apos;s what my clients and collaborators have to say about working with me.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full bg-gray-900 p-8 rounded-lg shadow-lg">
              <p className="leading-relaxed text-gray-100 mb-6">
                &apos;Working with Hammad was an absolute pleasure! They brought our vision to life in record time with attention to detail and excellent communication.&apos;
              </p>
              <div className="flex items-center">
                <Image
                  className="w-12 h-12 rounded-full object-cover object-center"
                  src="/heropic.webp"
                  alt="testimonial"
                  width={48}
                  height={48}
                />
                <div className="flex-grow pl-4">
                  <h3 className="text-gray-900 font-semibold text-lg">John Doe</h3>
                  <p className="text-gray-500">CEO, XYZ Company</p>
                  {/* Star Rating */}
                  <div className="text-yellow-500">
                    ★★★★☆ {/* 4 stars */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full bg-gray-900 p-8 rounded-lg shadow-lg">
              <p className="leading-relaxed text-gray-100 mb-6">
                &apos;Hammad delivered above and beyond expectations. The project was completed with high quality and in a very timely manner.&apos;
              </p>
              <div className="flex items-center">
                <Image
                  className="w-12 h-12 rounded-full object-cover object-center"
                  src="/heropic.webp"
                  alt="testimonial"
                  width={48}
                  height={48}
                />
                <div className="flex-grow pl-4">
                  <h3 className="text-gray-900 font-semibold text-lg">Jane Smith</h3>
                  <p className="text-gray-500">Lead Developer, ABC Corp</p>
                  {/* Star Rating */}
                  <div className="text-yellow-500">
                    ★★★★★ {/* 5 stars */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full bg-gray-900 p-8 rounded-lg shadow-lg">
              <p className="leading-relaxed text-gray-100 mb-6">
                &apos;Hammad was a pleasure to work with. Their professionalism and dedication were evident in every stage of the project, making it a smooth and efficient.&apos;
              </p>
              <div className="flex items-center">
                <Image
                  className="w-12 h-12 rounded-full object-cover object-center"
                  src="/heropic.webp"
                  alt="testimonial"
                  width={48}
                  height={48}
                />
                <div className="flex-grow pl-4">
                  <h3 className="text-gray-900 font-semibold text-lg">Michael Brown</h3>
                  <p className="text-gray-500">Project Manager, DEF Ltd.</p>
                  {/* Star Rating */}
                  <div className="text-yellow-500">
                    ★★★★★ {/* 5 stars */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
