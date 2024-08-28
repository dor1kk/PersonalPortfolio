import React from 'react';
import { MyProjects } from '../constants'; // Adjust the import path as needed

const Projects = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="px-16 mx-auto ">
        <div className='relative flex flex-row items-center mb-12 space-x-4'>
          <h5 className='text-[#16b7ea] text-2xl opacity-75 glow-effect'>
            &lt;h1&gt;
          </h5>
          <h5 className='relative font-montserrat text-[#1e293b] text-center italic text-3xl font-bold'>
            My <span className='text-[#16b7ea]'>Projects</span>
          </h5>
          <h5 className='text-[#16b7ea] text-2xl opacity-75 glow-effect'>
            &lt;/h1&gt;
          </h5>
        </div>

        <p className="text-gray-600 mb-8 text-center">
          *Note: Most of the projects have a live demo available by clicking 'View Project', but not all of them do, you can access the code by clicking 'Github'.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MyProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm font-medium py-1 px-2 rounded-full"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Project
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
