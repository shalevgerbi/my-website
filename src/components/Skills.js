import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';
import React from 'react';
import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="container-lg w-screen h-fit lg:mt-48 md:mt-48">
      <div className="w-full h-fit px-5 mb-10 mx-auto">
        <div className="lg:px-20 text-center mb-20">
          <ChipIcon className="w-40 lg:w-10 inline-block mb-4" />
          <h1 className="text-7xl lg:text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-5xl lg:text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Over the years i expended my knowledge at the following technologies:
          </p>
        </div>
        <div className="w-4/5 grid grid-rows-1 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 w-1.2 lg:w-full ">
              <div className="bg-gray-800 rounded flex p-4 lg:place-content-center h-full items-center transform hover:translate-x-2 ">
                <BadgeCheckIcon className="text-green-400 w-20 h-20 lg:w-6 lg:h-6 origin-center items-center text-center flex-shrink-0 mr-4" />
                <span className="lg:text-center text-7xl lg:text-md title-font font-medium text-white lg:text-xl">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
