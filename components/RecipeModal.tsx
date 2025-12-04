import React from 'react';
import { Recipe } from '../types';
import { X, Clock, Award, ChefHat } from 'lucide-react';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 bg-emerald-900 bg-opacity-80 transition-opacity backdrop-blur-sm" 
          aria-hidden="true" 
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal Panel */}
        <div className="relative inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border border-emerald-100">
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header without image */}
          <div className="bg-emerald-600 p-8 pt-10 relative overflow-hidden">
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
             <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-yellow-300 opacity-20 rounded-full blur-2xl"></div>
             
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/50 text-emerald-100 text-sm font-medium mb-4 border border-emerald-500">
                  <ChefHat className="w-4 h-4" /> Resep Pilihan
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">{recipe.title}</h2>
                <p className="text-emerald-100 text-lg opacity-90">{recipe.description}</p>

                <div className="flex items-center gap-6 text-white mt-6 font-medium">
                  <div className="flex items-center gap-2 bg-emerald-700/30 px-3 py-1.5 rounded-lg">
                    <Clock className="w-5 h-5 text-yellow-300" /> {recipe.cookingTime}
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-700/30 px-3 py-1.5 rounded-lg">
                    <Award className="w-5 h-5 text-yellow-300" /> Tingkat: {recipe.difficulty}
                  </div>
                </div>
             </div>
          </div>

          <div className="px-6 py-8 sm:px-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ingredients Column */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-800 mb-4 border-b-2 border-emerald-100 pb-2">
                  <ChefHat className="w-5 h-5" /> Bahan-Bahan
                </h3>
                <div className="space-y-6">
                  {recipe.ingredients.map((section, idx) => (
                    <div key={idx}>
                      {section.title && (
                        <h4 className="font-bold text-emerald-600 text-sm mb-3 uppercase tracking-wider">{section.title}</h4>
                      )}
                      <ul className="space-y-3">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700 text-sm group">
                            <span className="w-2 h-2 bg-emerald-300 rounded-full mt-1.5 flex-shrink-0 group-hover:bg-emerald-500 transition-colors"></span>
                            <span className="group-hover:text-emerald-900 transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps Column */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-800 mb-4 border-b-2 border-emerald-100 pb-2">
                  <UtensilsIcon className="w-5 h-5" /> Cara Memasak
                </h3>
                <ol className="space-y-6 relative border-l border-emerald-100 ml-3">
                  {recipe.steps.map((step, idx) => (
                    <li key={idx} className="ml-6 relative">
                      <span className="absolute -left-[37px] w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold flex items-center justify-center ring-4 ring-white">
                        {idx + 1}
                      </span>
                      <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-emerald-200 transition-colors">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-100 text-center">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex justify-center rounded-xl shadow-lg shadow-emerald-200 px-8 py-3 bg-emerald-600 text-base font-bold text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transform transition hover:-translate-y-0.5"
                onClick={onClose}
              >
                Tutup Resep
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for the modal icon
const UtensilsIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

export default RecipeModal;