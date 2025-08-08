import { Ingredient } from './ingredient';

export const RecipeCategories = [
    'Appetizers',
    'Salads',
    'Soups',
    'Meats',
    'Pasta',
    'Fish',
    'Desserts',
    'Drinks',
    'Sauces',
    'Pastries',
    'Bread',
    'Vegetarian',
    'Vegan',
    'Preserved & Fermented',
] as const;
export type RecipeCategory = (typeof RecipeCategories)[number];

export interface RecipeInstructionSection {
    title: string;
    instructions: string[];
}

export interface Recipe {
    id: number;
    categories: RecipeCategory[];

    title: string;
    description: string;

    ingredients: Ingredient[];
    instructionSections: RecipeInstructionSection[];

    imageUrl?: string;
    createdAt: string;
    updatedAt: string;

    estimatedTime: string;
    servings: number;
}
