export interface IngredientSection {
  title?: string;
  items: string[];
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: IngredientSection[];
  steps: string[];
  cookingTime: string;
  difficulty: 'Mudah' | 'Sedang' | 'Sulit';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}