import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header style and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update header background
      setIsScrolled(window.scrollY > 20);
      
      // Update active section
      const sections = ['home', 'projects', 'skills', 'contact'];
      const currentPos = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          
          if (currentPos >= top && currentPos < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-600">
          <span className="sr-only">Portfolio</span>
          Dev<span className="text-emerald-500">Folio</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className={`
                    text-base font-medium hover:text-blue-600 transition-colors px-2 py-1
                    ${activeSection === item.href.substring(1) 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : isScrolled ? 'text-slate-800' : 'text-slate-800'}
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://github.com/ShubhamChandratre" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-blue-600 transition-colors"
            aria-label="GitHub profile"
          >
            <Icons.Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/shubham-chandratre-a03819257/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn profile"
          >
            <Icons.Linkedin size={20} />
          </a>
          <a 
            href="https://www.instagram.com/shubham_chandratre_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-blue-600 transition-colors"
            aria-label="Twitter profile"
          >
            <Icons.Instagram size={20} />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-800 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <nav className="container mx-auto py-4 px-6">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className={`block py-2 ${
                      activeSection === item.href.substring(1) 
                        ? 'text-blue-600 font-medium' 
                        : 'text-slate-800'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Links - Mobile */}
            <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-slate-100">
              <a 
                href="https://github.com/ShubhamChandratre" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 transition-colors"
                aria-label="GitHub profile"
              >
                <Icons.Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shubham-chandratre-a03819257/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Icons.Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/shubham_chandratre_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 transition-colors"
                aria-label="Twitter profile"
              >
                <Icons.Instagram size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;