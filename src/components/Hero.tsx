import React from 'react';
import * as Icons from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <p className="text-blue-600 font-medium mb-4 tracking-wide animate-fadeIn">
              FULL STACK DEVELOPER
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight animate-slideUp">
              Shubham Chandratre 
            </h1>
            {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight animate-slideUp whitespace-nowrap">
              Shubham Chandratre 
            </h1> */}

            <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-lg animate-slideUp animation-delay-100">
              I am a student and currently pursuing my B.E. in Information Technology from PICT, Pune.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-lg animate-slideUp animation-delay-100">
              I build modern web applications with a focus on performance, accessibility, and beautiful design. Let's turn ideas into reality.
            </p>
            
            <div className="flex space-x-4 mb-8 animate-slideUp animation-delay-200">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center space-x-5 animate-slideUp animation-delay-300">
              <a
                href="https://github.com/ShubhamChandratre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 transition-all transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Icons.Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-chandratre-a03819257/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 transition-all transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Icons.Linkedin size={24} />
              </a>
              <a
                href="mailto:chandratreshubham@gmail.com"
                className="text-slate-700 hover:text-blue-600 transition-all transform hover:-translate-y-1"
                aria-label="Email"
              >
                <Icons.Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-emerald-500 bg-opacity-10 animate-fadeIn animation-delay-400">
              <div className="absolute inset-4 rounded-full overflow-hidden bg-blue-600 bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full overflow-hidden">
                  <img 
                    src="/public/profilephoto2.png" 
                    alt="Developer Portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a 
            href="#projects" 
            aria-label="Scroll to projects"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-colors"
          >
            <Icons.ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;