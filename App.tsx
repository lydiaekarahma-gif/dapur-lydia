import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecipeCard from './components/RecipeCard';
import RecipeModal from './components/RecipeModal';
import AIChef from './components/AIChef';
import { RECIPES } from './constants';
import { Recipe } from './types';
import { Heart } from 'lucide-react';

const App: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-emerald-50">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* Recipes Section */}
        <section id="recipes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-emerald-900 sm:text-4xl">
              Menu Favorit
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Pilihan resep terbaik yang telah teruji di Dapur Lydia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RECIPES.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onClick={setSelectedRecipe} 
              />
            ))}
          </div>
        </section>

        {/* AI Chef Section */}
        <section className="bg-emerald-100/50 py-10">
           <AIChef />
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-serif font-bold text-2xl mb-2">Resep Dapur Lydia</h3>
            <p className="text-emerald-200 text-sm max-w-xs">
              Membawa cita rasa masakan rumahan Indonesia ke meja makan Anda dengan sentuhan modern.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
             <p className="flex items-center gap-1 text-emerald-200 text-sm mb-2">
               Dibuat dengan <Heart className="w-4 h-4 text-red-400 fill-current" /> oleh Chef Lydia
             </p>
             <p className="text-emerald-400 text-xs">
               &copy; {new Date().getFullYear()} Resep Dapur Lydia. All rights reserved.
             </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <RecipeModal 
        recipe={selectedRecipe} 
        onClose={() => setSelectedRecipe(null)} 
      />
    </div>
  );
};

export default App;