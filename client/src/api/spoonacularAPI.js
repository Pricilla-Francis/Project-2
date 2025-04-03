const SPOONACULAR_API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';
if (!SPOONACULAR_API_KEY) {
    console.error('Spoonacular API key is not set. Please check your .env file.');
}
const searchRecipes = async (query) => {
    if (!SPOONACULAR_API_KEY) {
        console.error('Cannot search recipes: API key is not set');
        return [];
    }
    try {
        const response = await fetch(`${BASE_URL}/findByIngredients?apiKey=${SPOONACULAR_API_KEY}&ingredients=${encodeURIComponent(query)}&number=10&ranking=2&ignorePantry=true`);
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Spoonacular API error:', errorData);
            throw new Error(`Failed to fetch recipes: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    catch (err) {
        console.error('Error from recipe search:', err);
        return [];
    }
};
const getRecipeDetails = async (id) => {
    if (!SPOONACULAR_API_KEY) {
        throw new Error('Cannot fetch recipe details: API key is not set');
    }
    try {
        const response = await fetch(`${BASE_URL}/${id}/information?apiKey=${SPOONACULAR_API_KEY}`);
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Spoonacular API error:', errorData);
            throw new Error(`Failed to fetch recipe details: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    catch (err) {
        console.error('Error from recipe details:', err);
        throw err;
    }
};
export { searchRecipes, getRecipeDetails };
