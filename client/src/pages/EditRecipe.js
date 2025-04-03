import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getRecipe, updateRecipe } from '../api/recipeAPI';
import { MealTypes } from '../interfaces/Recipe';
import { Button, Input, Textarea, Label, Card, CardHeader, CardTitle, CardContent } from '../components/ui';
export default function EditRecipe() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        instructions: '',
        mealType: MealTypes.LunchDinner,
        region: 'International',
        image: ''
    });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!user || !id) {
            navigate('/login');
            return;
        }
        fetchRecipe();
    }, [user, id, navigate]);
    const fetchRecipe = async () => {
        try {
            const recipe = await getRecipe(parseInt(id));
            setFormData({
                title: recipe.title,
                ingredients: recipe.ingredients,
                instructions: recipe.instructions,
                mealType: recipe.mealType,
                region: recipe.region,
                image: recipe.image || ''
            });
        }
        catch (error) {
            console.error('Error fetching recipe:', error);
        }
        finally {
            setLoading(false);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateRecipe(parseInt(id), {
                ...formData,
                userId: user.id
            });
            navigate('/recipes');
        }
        catch (error) {
            console.error('Error updating recipe:', error);
        }
    };
    if (loading) {
        return (_jsx("div", { className: "min-h-screen bg-dark-background flex items-center justify-center", children: _jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-dark-text" }) }));
    }
    return (_jsx("div", { className: "min-h-screen bg-dark-background", children: _jsx("div", { className: "main-content", children: _jsx("div", { className: "container mx-auto px-6 py-12", children: _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsx("h1", { className: "text-4xl font-bold mb-8 text-dark-text text-center", children: "Edit Recipe" }), _jsxs(Card, { className: "bg-dark-surface border-dark-border", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-2xl font-semibold text-dark-text text-center", children: "Recipe Details" }) }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "title", className: "text-dark-text", children: "Recipe Title" }), _jsx(Input, { id: "title", name: "title", value: formData.title, onChange: handleChange, required: true, className: "bg-dark-surface border-dark-border text-dark-text" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "image", className: "text-dark-text", children: "Image URL" }), _jsx(Input, { id: "image", name: "image", value: formData.image, onChange: handleChange, className: "bg-dark-surface border-dark-border text-dark-text", placeholder: "Enter image URL" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "mealType", className: "text-dark-text", children: "Meal Type" }), _jsx("select", { id: "mealType", name: "mealType", value: formData.mealType, onChange: handleChange, className: "w-full px-4 py-2 bg-dark-surface border border-dark-border text-dark-text rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-primary", children: Object.values(MealTypes).map((type) => (_jsx("option", { value: type, children: type }, type))) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "ingredients", className: "text-dark-text", children: "Ingredients" }), _jsx(Textarea, { id: "ingredients", name: "ingredients", value: formData.ingredients, onChange: handleChange, required: true, className: "bg-dark-surface border-dark-border text-dark-text" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "instructions", className: "text-dark-text", children: "Instructions" }), _jsx(Textarea, { id: "instructions", name: "instructions", value: formData.instructions, onChange: handleChange, required: true, className: "bg-dark-surface border-dark-border text-dark-text" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "region", className: "text-dark-text", children: "Region" }), _jsx(Input, { id: "region", name: "region", value: formData.region, onChange: handleChange, required: true, className: "bg-dark-surface border-dark-border text-dark-text" })] }), _jsxs("div", { className: "flex justify-end gap-4 pt-4", children: [_jsx(Button, { type: "button", onClick: () => navigate('/recipes'), className: "bg-dark-surface border-dark-border text-dark-text hover:bg-dark-surface/80", children: "Cancel" }), _jsx(Button, { type: "submit", className: "bg-dark-primary text-dark-text hover:bg-dark-primary/80", children: "Update Recipe" })] })] }) })] })] }) }) }) }));
}
