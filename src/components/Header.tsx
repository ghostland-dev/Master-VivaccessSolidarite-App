
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/80 shadow-sm backdrop-blur-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="bg-primary rounded-lg p-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 7L12 12L4 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-xl font-display font-bold text-primary">VivAccess</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-foreground hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link to="#" className="font-medium text-foreground hover:text-primary transition-colors">
            Télémédecine
          </Link>
          <Link to="#" className="font-medium text-foreground hover:text-primary transition-colors">
            Éducation
          </Link>
          <Link to="#" className="font-medium text-foreground hover:text-primary transition-colors">
            Économie
          </Link>
          <Link to="#" className="font-medium text-foreground hover:text-primary transition-colors">
            Eau
          </Link>
          <Link to="#" className="font-medium text-foreground hover:text-primary transition-colors">
            Engagement
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="#" 
              className="font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Télémédecine
            </Link>
            <Link 
              to="#" 
              className="font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Éducation
            </Link>
            <Link 
              to="#" 
              className="font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Économie
            </Link>
            <Link 
              to="#" 
              className="font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Eau
            </Link>
            <Link 
              to="#" 
              className="font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Engagement
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
