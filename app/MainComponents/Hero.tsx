import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className=" body-font  animate-bg-change text-gray-900 animate-text-change">
      <div className="container mx-auto flex px-5 py-24 sm:mt-20 flex-col md:flex-row items-center">
        {/* Text and Description */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            I&apos;m Hammad, a passionate frontend developer creating seamless user experiences.
            <br className="hidden lg:inline-block" />
            with Us
          </h1>
          <p className="mb-8 leading-relaxed"> {'<<'}  I build modern, responsive websites that connect users with great experiences. {'>>'}</p>

          <div className="flex justify-center">
            <Link href='#Contact'><button className="inline-flex font-bold text-black duration-300 hover:text-white bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg">
              Contact
            </button></Link>
           <Link href='https://resume-1-lime.vercel.app/' target='_blank'><button className="duration-300 ml-4 inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">
              Get Resume
            </button></Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center items-center">
          {/* Circular Image Container */}
          <div className="w-40 h-40 md:w-96 md:h-96 relative overflow-hidden rounded-full">
  {/* Rotating & Color-Changing Border */}
  <div className="absolute inset-0 border-4 rounded-full animate-rotate-color"></div>
  
  {/* Static Image */}
  <Image
    className="object-cover object-center w-full h-full rounded-full"
    alt="hero"
    src="/heropic.png"
    width={384}
    height={384}
  />
</div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
