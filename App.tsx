import React, { useState } from 'react';
import { INITIAL_RECIPES } from './constants';
import { Recipe } from './types';
import RecipeCard from './components/RecipeCard';
import RecipeDetailModal from './components/RecipeDetailModal';
import AIChefModal from './components/AIChefModal';
import { ChefHat, Search, Sparkles, UtensilsCrossed } from 'lucide-react';

export default function App() {
  const [recipes, setRecipes] = useState<Recipe[]>(INITIAL_RECIPES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  // Filter recipes based on search
  const filteredRecipes = recipes.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleRecipeGenerated = (newRecipe: Recipe) => {
    setRecipes(prev => [newRecipe, ...prev]);
    setIsAIModalOpen(false);
    setSelectedRecipe(newRecipe); // Automatically open the new recipe
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-emerald-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <UtensilsCrossed size={32} />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wide">Dapur Lydia</h1>
                <p className="text-emerald-100 text-xs md:text-sm font-medium">Resep Masakan Rumahan & Modern</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-grow md:flex-grow-0">
                <input
                  type="text"
                  placeholder="Cari resep..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 pl-10 pr-4 py-2.5 rounded-full bg-emerald-700/50 text-white placeholder-emerald-200 focus:bg-emerald-700 border border-transparent focus:border-emerald-400 focus:outline-none transition-all text-sm"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-200" size={18} />
              </div>
              
              <button 
                onClick={() => setIsAIModalOpen(true)}
                className="flex-shrink-0 bg-white text-emerald-700 hover:bg-emerald-50 px-4 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 shadow-md transition-all active:scale-95"
              >
                <Sparkles size={18} />
                <span className="hidden sm:inline">AI Chef</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-emerald-100 rounded-full mb-4">
              <Search size={48} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">Resep tidak ditemukan</h3>
            <p className="text-gray-500">Coba kata kunci lain atau minta AI Chef membuatkannya!</p>
            <button 
              onClick={() => setIsAIModalOpen(true)}
              className="mt-6 text-emerald-600 font-semibold hover:underline"
            >
              Tanya AI Chef Lydia &rarr;
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800 font-serif border-l-4 border-emerald-500 pl-4">
                Daftar Menu
              </h2>
              <span className="text-gray-500 text-sm">
                {filteredRecipes.length} Resep tersedia
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map((recipe) => (
                <RecipeCard 
                  key={recipe.id} 
                  recipe={recipe} 
                  onClick={setSelectedRecipe} 
                />
              ))}
            </div>
          </>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-emerald-800 text-emerald-200 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4 font-serif text-xl text-white">
            <ChefHat /> Resep Dapur Lydia
          </div>
          <p className="text-sm opacity-80 mb-6 max-w-md mx-auto">
            Menyajikan resep terbaik untuk keluarga tercinta. Dimasak dengan cinta, disajikan dengan rasa.
          </p>
          <div className="text-xs pt-4 border-t border-emerald-700/50">
            &copy; {new Date().getFullYear()} Dapur Lydia. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modals */}
      <RecipeDetailModal 
        recipe={selectedRecipe} 
        onClose={() => setSelectedRecipe(null)} 
      />
      
      {isAIModalOpen && (
        <AIChefModal 
          onClose={() => setIsAIModalOpen(false)}
          onRecipeGenerated={handleRecipeGenerated}
        />
      )}

    </div>
  );
}