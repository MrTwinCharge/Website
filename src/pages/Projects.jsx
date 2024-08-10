import React from 'react';
import { projects } from '../constants';

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>
      <div className="mt-5 text-slate-500">
        <p>
          Here are some of my past and in-progress projects. They encompass a wide range of technologies and fields.
        </p>
      </div>
      
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Project Highlights</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {projects.map((project) => (
            <div key={project.id} className="block-container w-80">
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex flex-col justify-center items-center">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{project.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{project.description}</p>
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
