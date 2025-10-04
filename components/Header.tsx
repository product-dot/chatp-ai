'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl">😈</div>
            <span className="font-rifton font-bold text-xl text-black">CHATPERSONA AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-cp-purple hover:bg-cp-purple/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium">Features</a>
            <a href="#personas" className="text-gray-700 hover:text-cp-purple hover:bg-cp-purple/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium">Personas</a>
            <a href="#pricing" className="text-gray-700 hover:text-cp-purple hover:bg-cp-purple/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-cp-purple hover:bg-cp-purple/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium">Testimonials</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-cp-purple hover:bg-cp-purple/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium">Login</button>
            <button className="btn-primary">Get Extension</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-cp-purple hover:bg-cp-purple/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium">Features</a>
              <a href="#personas" className="text-gray-700 hover:text-cp-purple hover:bg-cp-purple/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium">Personas</a>
              <a href="#pricing" className="text-gray-700 hover:text-cp-purple hover:bg-cp-purple/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-cp-purple hover:bg-cp-purple/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium">Testimonials</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="text-gray-700 hover:text-cp-purple hover:bg-cp-purple/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium text-left">Login</button>
                <button className="btn-primary w-full">Get Extension</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

