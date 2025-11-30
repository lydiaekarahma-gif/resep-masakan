import React from 'react';
import { Recipe } from '../types';
import { Clock, ChefHat, ArrowRight } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full border border-emerald-100"
      onClick={() => onClick(recipe)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold text-emerald-800 shadow-sm">
          {recipe.difficulty}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif group-hover:text-emerald-600 transition-colors">
          {recipe.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
          {recipe.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-emerald-500" />
            <span>{recipe.cookingTime}</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-600 font-medium group-hover:translate-x-1 transition-transform">
            Lihat Resep <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;