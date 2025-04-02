import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { createRecipe } from '../api/recipeAPI';
import { type Recipe, MealTypes } from '../interfaces/Recipe';
import { Button, Input, Card, CardContent, CardHeader, CardTitle, Textarea, Label } from '../components/ui';

const REGIONS = [
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

type CreateRecipeInput = Omit<Recipe, 'id' | 'createdAt' | 'updatedAt'>;

export default function NewRecipe() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CreateRecipeInput>({
    title: '',
    ingredients: '',
    instructions: '',
    mealType: MealTypes.LunchDinner,
    region: 'International',
    userId: user?.id || 0,
    image: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      if (!user) {
        throw new Error('You must be logged in to create a recipe');
      }

      const recipeData = {
        ...formData,
        userId: user.id
      };

      await createRecipe(recipeData);
      navigate('/recipes');
    } catch (err) {
      console.error('Submit error:', err);
      setError(err instanceof Error ? err.message : 'Failed to create recipe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/recipes');
  };

  return (
    <div className="min-h-screen bg-dark-background">
      <div className="main-content">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-dark-text text-center">Create New Recipe</h1>

            {error && (
              <div className="p-4 mb-8 bg-red-900/50 border-l-4 border-red-600 text-dark-text rounded-lg">
                {error}
              </div>
            )}

            <Card className="bg-dark-surface border-dark-border">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-dark-text text-center">
                  Recipe Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6 new-recipe-form">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-dark-text">Recipe Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="bg-dark-surface border-dark-border text-dark-text"
                      placeholder="Enter recipe title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ingredients" className="text-dark-text">Ingredients</Label>
                    <Textarea
                      id="ingredients"
                      name="ingredients"
                      value={formData.ingredients}
                      onChange={handleChange}
                      required
                      className="bg-dark-surface border-dark-border text-dark-text"
                      placeholder="Enter ingredients (one per line)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instructions" className="text-dark-text">Instructions</Label>
                    <Textarea
                      id="instructions"
                      name="instructions"
                      value={formData.instructions}
                      onChange={handleChange}
                      required
                      className="bg-dark-surface border-dark-border text-dark-text"
                      placeholder="Enter cooking instructions"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mealType" className="text-dark-text">Meal Type</Label>
                    <select
                      id="mealType"
                      name="mealType"
                      value={formData.mealType}
                      onChange={handleChange}
                      required
                      className="w-full p-2 bg-dark-surface border border-dark-border text-dark-text rounded"
                    >
                      <option value={MealTypes.Breakfast}>Breakfast</option>
                      <option value={MealTypes.LunchDinner}>Lunch/Dinner</option>
                      <option value={MealTypes.Snack}>Snack</option>
                      <option value={MealTypes.Dessert}>Dessert</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="region" className="text-dark-text">Region</Label>
                    <select
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      required
                      className="w-full p-2 bg-dark-surface border border-dark-border text-dark-text rounded"
                    >
                      {REGIONS.map((region) => (
                        <option key={region} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image" className="text-dark-text">Image URL</Label>
                    <Input
                      id="image"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      className="bg-dark-surface border-dark-border text-dark-text"
                      placeholder="Enter image URL (optional)"
                    />
                  </div>

                  <div className="flex justify-end gap-4 mt-6">
                    <Button
                      type="button"
                      onClick={handleCancel}
                      variant="secondary"
                      className="z-10"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="success"
                      className="z-10"
                    >
                      {isSubmitting ? 'Saving...' : 'Save Recipe'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 