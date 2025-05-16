import React, { useState } from 'react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'DevOps & Tools' },
    { id: 'lang', label: 'Language' }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career.
            Here's an overview of my technical expertise and proficiency levels.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex bg-slate-100 rounded-lg p-1 shadow-sm">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm md:text-base rounded-md transition-colors ${
                  activeCategory === category.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: 'fadeIn 0.5s ease-in-out forwards',
                opacity: 0
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                <span className="text-xs font-medium text-white bg-blue-600 px-2 py-1 rounded">
                  {skill.category}
                </span>
              </div>
              
              {/* Skill Level Bar */}
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                  style={{ width: `${skill.level * 20}%`, transition: 'width 1s ease-in-out' }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">Beginner</span>
                <span className="text-xs text-slate-500">Expert</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;