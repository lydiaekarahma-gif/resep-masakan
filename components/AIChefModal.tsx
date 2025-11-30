import React, { useState } from 'react';
import { X, Sparkles, Loader2, ChefHat } from 'lucide-react';
import { generateRecipeWithGemini } from '../services/geminiService';
import { Recipe } from '../types';

interface AIChefModalProps {
  onClose: () => void;
  onRecipeGenerated: (recipe: Recipe) => void;
}

const AIChefModal: React.FC<AIChefModalProps> = ({ onClose, onRecipeGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const recipe = await generateRecipeWithGemini(prompt);
      onRecipeGenerated(recipe);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan.');
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-emerald-900/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl p-6 md:p-8 animate-in fade-in scale-95 duration-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg rotate-3">
            <Sparkles className="text-white w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 font-serif">Koki AI Lydia</h2>
          <p className="text-gray-500 mt-2">
            Bingung mau masak apa? Beritahu saya bahan yang kamu punya atau makanan yang kamu inginkan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Permintaan Masakan</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Contoh: Saya punya telur, tahu, dan kecap. Masakin apa ya yang enak?"
              className="w-full p-4 rounded-xl border-2 border-emerald-100 focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 transition-all outline-none resize-none h-32 text-gray-700 placeholder-gray-400"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white rounded-xl font-semibold shadow-lg shadow-emerald-200 hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" /> Sedang Meracik Resep...
              </>
            ) : (
              <>
                <ChefHat /> Buat Resep Baru
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChefModal;