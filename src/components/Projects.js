import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="container-lg h-screen w-screen lg:h-full text-gray-400 bg-gray-900 body-font">
      <div className="lg:container-lg fill mx-auto text-center lg:px-14">
        <div className="flex  flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block lg:w-10 mb-4 w-40" />
          <h1 className="lg:text-4xl text-7xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 text-5xl mx-auto leading-relaxed lg:text-base">
            During my studies and in my spare time I made the following apps
            (more on GitHub):
          </p>
        </div>
        <div className="pl-10 pr-10  h-full items-center ">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="lg:pt-4 w-full h-full "
            >
              <div className="relative transform transition-all h-full hover:translate-x-10 space-y-10">
                <img
                  src={process.env.PUBLIC_URL + project.image}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="w-full relative h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 align-center space-y-10 pt-5 pb-5">
                  <h2 className="tracking-widest text-5xl lg:text-lg title-font font-medium text-green-400 ">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font  text-7xl lg:text-4xl font-medium text-white">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-4xl lg:text-md">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
