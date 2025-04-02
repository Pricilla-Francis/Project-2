import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { createRecipe } from '../api/recipeAPI';
import { MealTypes } from '../interfaces/Recipe';
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
export default function NewRecipe() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
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
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
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
        }
        catch (err) {
            console.error('Submit error:', err);
            setError(err instanceof Error ? err.message : 'Failed to create recipe. Please try again.');
        }
        finally {
            setIsSubmitting(false);
        }
    };
    const handleCancel = () => {
        navigate('/recipes');
    };
    return (_jsx("div", { className: "min-h-screen bg-dark-background", children: _jsx("div", { className: "main-content", children: _jsx("div", { className: "container mx-auto px-6 py-12", children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsx("h1", { className: "text-4xl font-bold mb-8 text-dark-text text-center", children: "Create New Recipe" }), error && (_jsx("div", { className: "p-4 mb-8 bg-red-900/50 border-l-4 border-red-600 text-dark-text rounded-lg", children: error })), _jsxs(Card, { className: "bg-dark-surface border-dark-border", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-2xl font-semibold text-dark-text text-center", children: "Recipe Details" }) }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6 new-recipe-form", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "title", className: "text-dark-text", children: "Recipe Title" }), _jsx(Input, { id: "title", name: "title", value: formData.title, onChange: handleChange, required: true, className: "bg-dark-surface border-dark-border text-dark-text", placeholder: "Enter recipe title" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "ingredients", className: "text-dark-text", children: "Ingredients" }), _jsx(Textarea, { id: "ingredients", name: "ingredients", value: formData.ingredients, onChange: handleChange, required: true, className: "bg-dark-surface border-dark-border text-dark-text", placeholder: "Enter ingredients (one per line)" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "instructions", className: "text-dark-text", children: "Instructions" }), _jsx(Textarea, { id: "instructions", name: "instructions", value: formData.instructions, onChange: handleChange, required: true, className: "bg-dark-surface border-dark-border text-dark-text", placeholder: "Enter cooking instructions" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "mealType", className: "text-dark-text", children: "Meal Type" }), _jsxs("select", { id: "mealType", name: "mealType", value: formData.mealType, onChange: handleChange, required: true, className: "w-full p-2 bg-dark-surface border border-dark-border text-dark-text rounded", children: [_jsx("option", { value: MealTypes.Breakfast, children: "Breakfast" }), _jsx("option", { value: MealTypes.LunchDinner, children: "Lunch/Dinner" }), _jsx("option", { value: MealTypes.Snack, children: "Snack" }), _jsx("option", { value: MealTypes.Dessert, children: "Dessert" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "region", className: "text-dark-text", children: "Region" }), _jsx("select", { id: "region", name: "region", value: formData.region, onChange: handleChange, required: true, className: "w-full p-2 bg-dark-surface border border-dark-border text-dark-text rounded", children: REGIONS.map((region) => (_jsx("option", { value: region, children: region }, region))) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "image", className: "text-dark-text", children: "Image URL" }), _jsx(Input, { id: "image", name: "image", value: formData.image, onChange: handleChange, className: "bg-dark-surface border-dark-border text-dark-text", placeholder: "Enter image URL (optional)" })] }), _jsxs("div", { className: "flex justify-end gap-4 mt-6", children: [_jsx(Button, { type: "button", onClick: handleCancel, variant: "secondary", className: "z-10", children: "Cancel" }), _jsx(Button, { type: "submit", disabled: isSubmitting, variant: "success", className: "z-10", children: isSubmitting ? 'Saving...' : 'Save Recipe' })] })] }) })] })] }) }) }) }));
}
