import type { Recipe } from '../interfaces/Recipe';
export declare const getRecipes: () => Promise<Recipe[]>;
export declare const createRecipe: (recipeData: Omit<Recipe, "id" | "createdAt" | "updatedAt">) => Promise<Recipe>;
export declare const updateRecipe: (id: number, recipeData: Partial<Recipe>) => Promise<Recipe>;
export declare const deleteRecipe: (id: number) => Promise<boolean>;
export declare const getRecipe: (id: number) => Promise<Recipe>;
