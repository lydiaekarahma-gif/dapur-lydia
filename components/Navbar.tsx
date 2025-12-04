import React, { useState } from 'react';
import { Menu, X, ChefHat, Utensils } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-emerald-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <ChefHat className="h-8 w-8 text-yellow-300" />
            <span className="font-serif font-bold text-xl tracking-wide">Dapur Lydia</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Beranda</a>
              <a href="#recipes" className="hover:bg-emerald-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">Resep</a>
              <a href="#ai-chef" className="bg-yellow-400 text-emerald-900 hover:bg-yellow-300 px-3 py-2 rounded-md text-sm font-bold transition-colors flex items-center gap-1">
                <Utensils className="h-4 w-4" /> Tanya Chef
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-emerald-700 inline-flex items-center justify-center p-2 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-emerald-700">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-emerald-600">Beranda</a>
            <a href="#recipes" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-emerald-600">Resep</a>
            <a href="#ai-chef" className="block px-3 py-2 rounded-md text-base font-medium text-yellow-300 hover:bg-emerald-600 font-bold">Tanya Chef</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;