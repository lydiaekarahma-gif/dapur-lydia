import React from 'react';
import { ArrowRight, ChefHat } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-emerald-800 to-emerald-900 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-yellow-300 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full bg-emerald-600 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="mb-8 p-4 bg-emerald-700/50 rounded-full inline-block backdrop-blur-sm ring-1 ring-emerald-400/30">
           <ChefHat className="w-12 h-12 text-yellow-400 mx-auto" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
          Masakan Rumahan, <br />
          <span className="text-yellow-400">Cita Rasa Istimewa</span>
        </h1>
        <p className="mt-6 text-xl text-emerald-100 max-w-3xl drop-shadow-md">
          Selamat datang di Resep Dapur Lydia. Temukan rahasia kelezatan Nasi Goreng, Soto Ayam, dan Seblak legendaris kami yang mudah dibuat di rumah.
        </p>
        <div className="mt-10 max-w-sm sm:max-w-none sm:flex sm:justify-center gap-4">
          <a
            href="#recipes"
            className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-900 bg-white hover:bg-emerald-50 md:py-4 md:text-lg md:px-10 shadow-lg transition-transform hover:scale-105"
          >
            Lihat Resep
          </a>
          <a
            href="#ai-chef"
            className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-500 md:py-4 md:text-lg md:px-10 shadow-lg transition-transform hover:scale-105"
          >
            Tanya Chef AI <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;