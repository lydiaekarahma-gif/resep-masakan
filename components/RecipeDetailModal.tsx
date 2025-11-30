import React from 'react';
import { Recipe } from '../types';
import { X, Clock, ChefHat, CheckCircle } from 'lucide-react';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Header Image */}
        <div className="relative h-64 md:h-80 w-full">
          <img 
            src={recipe.imageUrl} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/50 hover:bg-white p-2 rounded-full backdrop-blur-md transition-all text-gray-800 shadow-lg"
          >
            <X size={24} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-2">{recipe.title}</h2>
            <div className="flex items-center gap-4 text-white/90 text-sm md:text-base">
              <span className="flex items-center gap-1"><Clock size={18} /> {recipe.cookingTime}</span>
              <span className="px-3 py-0.5 border border-white/30 rounded-full">{recipe.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
          
          {/* Ingredients */}
          <div>
            <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <ChefHat size={24} /> Bahan-bahan
            </h3>
            <ul className="space-y-3">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50 text-emerald-900 text-sm md:text-base">
                  <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-emerald-500" />
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              <CheckCircle size={24} /> Cara Memasak
            </h3>
            <div className="space-y-6">
              {recipe.instructions.map((step, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-emerald-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RecipeDetailModal;