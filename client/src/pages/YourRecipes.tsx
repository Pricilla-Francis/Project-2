import { useState, useEffect } from 'react';
import { retrieveRecipes, createRecipe, updateRecipe, deleteRecipe } from '../api/recipeAPI';
import type { Recipe } from '../interfaces/Recipe';
import auth from '../utils/auth';

const YourRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    mealType: 'Breakfast',
    region: '',
    ingredients: '',
    instructions: ''
  });

  useEffect(() => {
    if (auth.loggedIn()) {
      fetchRecipes();
    }
  }, []);

  const fetchRecipes = async () => {
    try {
      const data = await retrieveRecipes();
      setRecipes(data);
    } catch (err) {
      console.error('Failed to fetch recipes:', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingRecipe) {
        await updateRecipe(editingRecipe.id, {
          ...formData,
          mealType: formData.mealType as "Breakfast" | "Lunch/Dinner" | "Dessert"
        });
      } else {
        await createRecipe({
          ...formData,
          mealType: formData.mealType as "Breakfast" | "Lunch/Dinner" | "Dessert"
        });
      }
      setShowForm(false);
      setEditingRecipe(null);
      setFormData({
        title: '',
        mealType: 'Breakfast',
        region: '',
        ingredients: '',
        instructions: ''
      });
      fetchRecipes();
    } catch (err) {
      console.error('Failed to save recipe:', err);
    }
  };

  const handleEdit = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setFormData({
      title: recipe.title,
      mealType: recipe.mealType,
      region: recipe.region,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      try {
        await deleteRecipe(id);
        fetchRecipes();
      } catch (err) {
        console.error('Failed to delete recipe:', err);
      }
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingRecipe(null);
    setFormData({
      title: '',
      mealType: 'Breakfast',
      region: '',
      ingredients: '',
      instructions: ''
    });
  };

  if (!auth.loggedIn()) {
    return <div>Please log in to view your recipes.</div>;
  }

  return (
    <div className="container">
      <h1>Your Recipes</h1>
      
      <button 
        className="btn btn-primary mb-4"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : 'Add New Recipe'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="card mb-4">
          <div className="card-body">
            <h2>{editingRecipe ? 'Edit Recipe' : 'Add New Recipe'}</h2>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mealType">Meal Type</label>
              <select
                id="mealType"
                name="mealType"
                value={formData.mealType}
                onChange={handleInputChange}
                className="form-input"
                required
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch/Dinner">Lunch/Dinner</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="region">Region</label>
              <input
                type="text"
                id="region"
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleInputChange}
                className="form-input"
                rows={5}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="instructions">Instructions</label>
              <textarea
                id="instructions"
                name="instructions"
                value={formData.instructions}
                onChange={handleInputChange}
                className="form-input"
                rows={5}
                required
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {editingRecipe ? 'Update Recipe' : 'Save Recipe'}
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="flex justify-between items-start mb-4">
                  <h3>{recipe.title}</h3>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEdit(recipe)}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(recipe.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p><strong>Meal Type:</strong> {recipe.mealType}</p>
                <p><strong>Region:</strong> {recipe.region}</p>
                <h4>Ingredients:</h4>
                <p>{recipe.ingredients}</p>
                <h4>Instructions:</h4>
                <p>{recipe.instructions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourRecipes; 