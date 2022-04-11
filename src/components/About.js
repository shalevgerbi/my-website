import React from "react";
import Link from "react-scroll/modules/components/Link";
import image from ".././images/coding1.jpg";
export default function About() {
  return (
    <section id="about" className="relative ">
      <div className="lg:container mx-auto flex px-10 py-20 md:flex-row flex-col items-center min-h-full mmin-w-full w-full">
        <div
          id="scale-up-left"
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Shalev.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="hidden lg:inline-block">
            I've been coding for over 10 years now. As a Software developer I've
            done many projects and i'm searching for my next adventure. Along
            the journey I realised my passion existed in helping others excel
            and pursue their dreams as upcoming developers.
          </p>
          <div className="flex justify-center">
            <Link
              to="contact"
              className="cursor-pointer inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              smooth={true}
              duration={1000}
            >
              Work With Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className="cursor-pointer ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </Link>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded-lg blur-md"
            src={image}
            alt="coding"
          />
        </div>
      </div>
    </section>
  );
}
