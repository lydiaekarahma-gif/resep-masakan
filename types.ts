export interface Recipe {
  id: string;
  title: string;
  description: string; // Short summary
  ingredients: string[];
  instructions: string[];
  cookingTime?: string;
  difficulty?: 'Mudah' | 'Sedang' | 'Sulit';
  imageUrl?: string;
}

export interface AIState {
  isLoading: boolean;
  error: string | null;
}