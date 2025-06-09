import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Get unique tech stack items for filters
  const techFilters = Array.from(
    new Set(projects.flatMap(project => project.techStack))
  ).sort();
  
  // Filter projects based on selected technology
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.techStack.includes(filter));

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in web development.
            Each project represents unique challenges and solutions.
          </p>
        </div>
        
        {/* Filter Controls */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 w-[1200px] mx-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            All Projects
          </button>
          {techFilters.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                filter === tech
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">
              No projects found with the selected technology. Try a different filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;