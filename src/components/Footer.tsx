import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Dev<span className="text-blue-500">Folio</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Designing and building exceptional digital experiences, transforming ideas into functional, beautiful web applications.
            </p>
            <p className="text-slate-400 flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> by Shubham Chandratre
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-blue-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-200">Contact</h3>
            <ul className="space-y-2">
              <li className="text-slate-400">
                Pune, India
              </li>
              <li>
                <a href="chandratreshubham@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                  chandratreshubham@gmail.com
                </a>
              </li>
              <li className="text-slate-400">
                +91 9356427316
              </li>
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://github.com/ShubhamChandratre" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/shubham-chandratre-a03819257/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/shubham_chandratre_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.36 3.608 1.334.975.975 1.272 2.242 1.334 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.36 2.633-1.334 3.608-.975.975-2.242 1.272-3.608 1.334-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.36-3.608-1.334-.975-.975-1.272-2.242-1.334-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.36-2.633 1.334-3.608C4.542 2.593 5.809 2.296 7.175 2.234 8.441 2.176 8.821 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.74.13 4.391.397 3.3 1.488 2.209 2.579 1.942 3.928 1.884 5.24.826 8.332.813 8.741.813 12s.014 3.668.072 4.948c.058 1.312.325 2.661 1.416 3.752 1.091 1.091 2.44 1.358 3.752 1.416 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.312-.058 2.661-.325 3.752-1.416 1.091-1.091 1.358-2.44 1.416-3.752.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.312-.325-2.661-1.416-3.752C20.661.397 19.312.13 18 .072 16.72.014 16.311 0 12 0z"/>
                      <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
                      <circle cx="18.406" cy="5.594" r="1.44"/>
                    </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>&copy; {currentYear} Shubham Chandratre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;