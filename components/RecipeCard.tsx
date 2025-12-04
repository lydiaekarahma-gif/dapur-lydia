import React from 'react';
import { Recipe } from '../types';
import { Clock, BarChart, ArrowRight } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1 hover:border-emerald-300 flex flex-col h-full"
      onClick={() => onClick(recipe)}
    >
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
             {recipe.difficulty}
          </div>
          <Clock className="w-5 h-5 text-emerald-400" />
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
          {recipe.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {recipe.description}
        </p>
      </div>

      <div className="px-6 py-4 bg-emerald-50 border-t border-emerald-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-gray-600 text-sm font-medium">
          <Clock className="w-4 h-4" />
          <span>{recipe.cookingTime}</span>
        </div>
        <div className="flex items-center gap-1 text-emerald-700 font-bold text-sm group-hover:translate-x-1 transition-transform">
          <span>Lihat Resep</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;