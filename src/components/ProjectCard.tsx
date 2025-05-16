import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-between items-center">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md flex items-center text-sm transition-colors"
              >
                <ExternalLink size={14} className="mr-1" /> Live Demo
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white bg-slate-800 hover:bg-slate-900 px-4 py-2 rounded-md flex items-center text-sm transition-colors"
              >
                <Github size={14} className="mr-1" /> Code
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
        <p className="text-slate-600 mb-4 h-20 overflow-hidden">{project.description}</p>
        
        <div className="flex items-start">
          <Layers size={16} className="text-blue-600 mt-1 mr-2" />
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;