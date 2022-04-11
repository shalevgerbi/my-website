import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Link from "react-scroll/modules/components/Link";
export default function Navbar() {
  return (
    <section className="container-lg bg-gray-800 fixed md:sticky top-0 z-50 bg-opacity-90">
      <div className="flex flex-wrap  pt-5 pb-5 flex-col md:flex-row items-center">
        <p className="ml-5 title-font font-medium text-white mb-4  md:mb-0">
          <Link
            to="about"
            className="text-xl cursor-pointer"
            smooth={true}
            duration={1000}
          >
            Shalev Gerbi
          </Link>
        </p>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap  text-base">
          <Link
            to="projects"
            className="mr-5 cursor-pointer hover:text-white"
            smooth={true}
            duration={1000}
          >
            Past Work
          </Link>
          <Link
            to="skills"
            className="mr-5 hover:text-white cursor-pointer"
            smooth={true}
            duration={1000}
          >
            Skills
          </Link>
          <Link
            to="game"
            className="mr-5 hover:text-white cursor-pointer"
            smooth={true}
            duration={1000}
          >
            Let's Play
          </Link>
          </nav>
          <div className="">
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          className="inline-flex mr-5 items-center bg-gray-800 border-0 py-1 fucus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 cursor-pointer"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Link>
        </div>
      </div>
    </section>
  );
}
