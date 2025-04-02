import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getRecipes, deleteRecipe } from '../api/recipeAPI';
import { MealTypes, Recipe } from '../interfaces/Recipe';
import { useAuth } from '../context/AuthContext';

const REGIONS = [
  'All Regions',
  'Asian',
  'Mediterranean',
  'Mexican',
  'Italian',
  'Indian',
  'Middle Eastern',
  'Caribbean',
  'African',
  'Latin American',
  'European',
  'American',
  'Japanese',
  'Chinese',
  'Thai',
  'Greek',
  'Spanish',
  'French',
  'German',
  'British',
  'Fusion',
  'Other'
];

const YourRecipes = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [filterBy, setFilterBy] = useState<string>('all');

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchRecipes();
  }, [user, navigate]);

  const fetchRecipes = async () => {
    try {
      if (!user) {
        throw new Error('User not authenticated');
      }

      const data = await getRecipes();
      if (!data) {
        throw new Error('Failed to fetch recipes');
      }

      // Filter recipes by current user
      const userRecipes = data.filter(recipe => recipe.userId === user.id);
      setRecipes(userRecipes);
    } catch (err) {
      setError('Failed to fetch recipes');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this recipe?')) return;

    try {
      await deleteRecipe(id);
      setRecipes(recipes.filter(recipe => recipe.id !== id));
    } catch (err) {
      console.error('Delete error:', err);
      setError(err instanceof Error ? err.message : 'Failed to delete recipe');
    }
  };

  const sortedAndFilteredRecipes = [...recipes]
    .filter(recipe => {
      const mealTypeMatch = filterBy === 'all' || recipe.mealType === filterBy;
      const regionMatch = selectedRegion === 'All Regions' || recipe.region === selectedRegion;
      return mealTypeMatch && regionMatch;
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-background flex items-center justify-center">
        <div className="text-dark-text text-center">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-dark-background flex items-center justify-center">
        <div className="text-dark-text text-center">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-background">
      <div className="main-content">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
              <h1 className="text-4xl font-bold text-dark-text">Your Recipes</h1>
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-2 bg-dark-surface border border-dark-border text-dark-text rounded-lg flex-1 sm:flex-none text-base"
                >
                  {REGIONS.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="px-4 py-2 bg-dark-surface border border-dark-border text-dark-text rounded-lg flex-1 sm:flex-none text-base"
                >
                  <option value="all">All Types</option>
                  <option value={MealTypes.Breakfast}>Breakfast</option>
                  <option value={MealTypes.LunchDinner}>Lunch/Dinner</option>
                  <option value={MealTypes.Snack}>Snack</option>
                  <option value={MealTypes.Dessert}>Dessert</option>
                </select>
              </div>
            </div>

            {sortedAndFilteredRecipes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-dark-text text-lg">No recipes found. Start by creating a new recipe!</p>
                <Link to="/new-recipe" className="btn btn-primary mt-4">
                  Create New Recipe
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedAndFilteredRecipes.map((recipe) => (
                  <div key={recipe.id} className="bg-dark-surface rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-dark-text mb-2">{recipe.title}</h3>
                      <p className="text-dark-text-secondary mb-4">{recipe.region}</p>
                      <div className="flex justify-between items-center">
                        <Link
                          to={`/edit-recipe/${recipe.id}`}
                          className="btn btn-secondary"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(recipe.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourRecipes;


