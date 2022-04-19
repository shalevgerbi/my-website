import React from "react";
import Link from "react-scroll/modules/components/Link";
import image from ".././images/coding1.jpg";
export default function About() {
  return (
    <section id="about" className="relative sm:static h-full w-full ">
      <div className="lg:container container-lg mx-auto lg:flex px-10 py-20 md:flex-row flex-col items-center w-full mt-10 lg:mt-0">
        <div
          id="scale-up-left"
          className="lg:flex-grow lg:w-1/2 lg:pr-24  lg:flex lg:flex-col md:items-start lg:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1 className="mt-10 lg:mt-0 text-center lg:text-center title-font text-9xl lg:text-4xl font-medium text-white whitespace-nowrap">
            Hi, I'm Shalev.
            </h1>
            <br  />
            <h1 className="text-center m-0 title-font text-6xl lg:text-4xl mb-4 font-medium text-white whitespace-nowrap">I love to build amazing apps.</h1>
          
          <p className="mt-20 text-center align-center mb-5 text-5xl lg:inline-block lg:text-left lg:text-3xl">
            I've been coding for over 10 years now. As a Software developer I've
            done many projects and I'm searching for my next adventure.</p>
            <p className="text-center align-center mb-5  text-5xl lg:inline-block lg:text-left lg:text-3xl">
             Along
            the journey I realised my passion existed in helping others excel
            and pursue their dreams as upcoming developers.
          </p>
          <div className="mt-10 flex items-center ml-0 mr-0 ">
            <Link
              to="contact"
              className="p-5 text-center cursor-pointer inline-flex text-white bg-green-500 border-0 py-4 px-6 focus:outline-none hover:bg-green-600 lg:rounded lg:text-lg sm:text-7xl"
              smooth={true}
              duration={1000}
            >
              Work With Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className="p-5 text-center cursor-pointer ml-6 inline-flex text-gray-400 bg-gray-800 border-0 py-4 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-lg lg:text-lg text-7xl"
            >
              See My Past Work
            </Link>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full w-full ">
          <img
            className="p-5 mt-20 object-cover object-center rounded-lg w-screen blur-md"
            src={image}
            alt="coding"
          />
        </div>
      </div>
    </section>
  );
}
