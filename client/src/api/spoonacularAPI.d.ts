export interface SpoonacularRecipe {
    id: number;
    title: string;
    image: string;
    imageType: string;
    usedIngredientCount: number;
    missedIngredientCount: number;
    missedIngredients: Array<{
        id: number;
        amount: number;
        unit: string;
        unitLong: string;
        unitShort: string;
        aisle: string;
        name: string;
        original: string;
        originalName: string;
        meta: string[];
        image: string;
    }>;
    usedIngredients: Array<{
        id: number;
        amount: number;
        unit: string;
        unitLong: string;
        unitShort: string;
        aisle: string;
        name: string;
        original: string;
        originalName: string;
        meta: string[];
        image: string;
    }>;
    unusedIngredients: Array<{
        id: number;
        amount: number;
        unit: string;
        unitLong: string;
        unitShort: string;
        aisle: string;
        name: string;
        original: string;
        originalName: string;
        meta: string[];
        image: string;
    }>;
    likes: number;
}
export interface SpoonacularRecipeDetails {
    id: number;
    title: string;
    image: string;
    servings: number;
    readyInMinutes: number;
    sourceUrl: string;
    summary: string;
    instructions: string;
    extendedIngredients: Array<{
        id: number;
        aisle: string;
        image: string;
        consistency: string;
        name: string;
        nameClean: string;
        original: string;
        originalName: string;
        amount: number;
        unit: string;
        meta: string[];
        measures: {
            us: {
                amount: number;
                unitShort: string;
                unitLong: string;
            };
            metric: {
                amount: number;
                unitShort: string;
                unitLong: string;
            };
        };
    }>;
}
declare const searchRecipes: (query: string) => Promise<SpoonacularRecipe[]>;
declare const getRecipeDetails: (id: number) => Promise<SpoonacularRecipeDetails>;
export { searchRecipes, getRecipeDetails };
