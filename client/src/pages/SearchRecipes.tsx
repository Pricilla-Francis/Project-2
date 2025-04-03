import { useState, useEffect } from 'react';
import { searchRecipes, getRecipeDetails } from '../api/spoonacularAPI';
import { createRecipe } from '../api/recipeAPI';
import { useAuth } from '../context/AuthContext.js';
import { MealTypes } from '../interfaces/Recipe.js';
import { useNavigate } from 'react-router-dom';

interface SpoonacularRecipe {
  id: number;
  title: string;
  image: string;
  missedIngredientCount: number;
  usedIngredientCount: number;
}

const STORAGE_KEY = 'lastSearchResults';

const SearchRecipes = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState<SpoonacularRecipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Load last search results on component mount
  useEffect(() => {
    const savedResults = localStorage.getItem(STORAGE_KEY);
    if (savedResults) {
      const { query, results } = JSON.parse(savedResults);
      setSearchQuery(query);
      setRecipes(results);
    }
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const results = await searchRecipes(searchQuery);
      setRecipes(results);
      // Save search results to local storage
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        query: searchQuery,
        results: results
      }));
    } catch (err) {
      setError('Failed to search recipes. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveRecipe = async (recipe: SpoonacularRecipe) => {
    try {
      if (!user) {
        navigate('/login');
        return;
      }

      // Fetch detailed recipe information
      const details = await getRecipeDetails(recipe.id);
      
      if (!details) {
        throw new Error('Failed to fetch recipe details');
      }

      // Create recipe with all required fields
      const newRecipe = {
        title: details.title || recipe.title,
        image: details.image || recipe.image,
        ingredients: details.extendedIngredients?.map(ing => ing.original).join('\n') || 'Ingredients not available',
        instructions: details.instructions || 'Instructions not available',
        mealType: MealTypes.LunchDinner,
        region: 'International',
        userId: user.id
      };

      const savedRecipe = await createRecipe(newRecipe);
      
      if (!savedRecipe) {
        throw new Error('Failed to save recipe');
      }

      alert('Recipe saved successfully!');
    } catch (err) {
      console.error('Save error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to save recipe. Please try again.';
      alert(errorMessage);
    }
  };

  return (
    <div className="container" style={{ marginTop: '4rem', minHeight: '100vh' }}>
      <h1 className="page-title">Search Recipes</h1>
      
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter ingredients (comma separated)"
            className="search-input"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {error && <div className="error-message">{error}</div>}

      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <button
              onClick={() => handleSaveRecipe(recipe)}
              className="btn btn-secondary"
            >
              Save Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRecipes; 