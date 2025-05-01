import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-800/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cpu className="h-8 w-8 text-teal-400" />
            <span className="text-xl font-bold text-white">SauceSwap Fausto</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#tecnologia" className="text-gray-300 hover:text-white transition-colors">Architecture</a>
            <a href="#sauceswap" className="text-gray-300 hover:text-white transition-colors">SauceSwap</a>
            <a href="#charts" className="text-gray-300 hover:text-white transition-colors">Charts</a>
            <a href="#comunicacion" className="text-gray-300 hover:text-white transition-colors">HCS-10</a>
            <a href="#seguridad" className="text-gray-300 hover:text-white transition-colors">HCS-3</a>
            <a 
              href="#conectar" 
              className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-white font-medium transition-colors"
            >
              Connect
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 shadow-xl">
          <nav className="flex flex-col space-y-4 p-4">
            <a 
              href="#tecnologia" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Architecture
            </a>
            <a 
              href="#sauceswap" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              SauceSwap
            </a>
            <a 
              href="#charts" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Charts
            </a>
            <a 
              href="#comunicacion" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HCS-10
            </a>
            <a 
              href="#seguridad" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HCS-3
            </a>
            <a 
              href="#conectar" 
              className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-white font-medium transition-colors inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Connect
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;