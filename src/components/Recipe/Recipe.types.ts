export interface IngredientProps {
  quantity: string;
  name: string;
}

export interface RecipeProps {
  id: number;
  title: string;
  category?: ICategory;
  ingredients: IngredientProps[];
  description: string;
  directions: string[];
  imageUrl?: string;
  nutrition?: INutrition;
}

export interface RecipeListProps {
  recipes?: RecipeProps[];
}

export interface ICategory {
  id: number;
  name: string;
}

export interface INutrition {
  serving: number;
  calories: number;
  fat?: number;
  protein: number;
  carbs?: number;
}
