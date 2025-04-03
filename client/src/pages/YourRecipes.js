import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getRecipes, deleteRecipe } from '../api/recipeAPI';
import { MealTypes } from '../interfaces/Recipe';
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
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('All Regions');
    const [filterBy, setFilterBy] = useState('all');
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
        }
        catch (err) {
            setError('Failed to fetch recipes');
            console.error('Fetch error:', err);
        }
        finally {
            setLoading(false);
        }
    };
    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this recipe?'))
            return;
        try {
            await deleteRecipe(id);
            setRecipes(recipes.filter(recipe => recipe.id !== id));
        }
        catch (err) {
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
        return (_jsx("div", { className: "min-h-screen bg-dark-background flex items-center justify-center", children: _jsx("div", { className: "text-dark-text text-center", children: "Loading..." }) }));
    }
    if (error) {
        return (_jsx("div", { className: "min-h-screen bg-dark-background flex items-center justify-center", children: _jsx("div", { className: "text-dark-text text-center", children: error }) }));
    }
    return (_jsx("div", { className: "min-h-screen bg-dark-background", children: _jsx("div", { className: "main-content", children: _jsx("div", { className: "container mx-auto px-6 py-12", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12", children: [_jsx("h1", { className: "text-4xl font-bold text-dark-text", children: "Your Recipes" }), _jsxs("div", { className: "flex flex-wrap items-center gap-4 w-full sm:w-auto", children: [_jsx("select", { value: selectedRegion, onChange: (e) => setSelectedRegion(e.target.value), className: "px-4 py-2 bg-dark-surface border border-dark-border text-dark-text rounded-lg flex-1 sm:flex-none text-base", children: REGIONS.map((region) => (_jsx("option", { value: region, children: region }, region))) }), _jsxs("select", { value: filterBy, onChange: (e) => setFilterBy(e.target.value), className: "px-4 py-2 bg-dark-surface border border-dark-border text-dark-text rounded-lg flex-1 sm:flex-none text-base", children: [_jsx("option", { value: "all", children: "All Types" }), _jsx("option", { value: MealTypes.Breakfast, children: "Breakfast" }), _jsx("option", { value: MealTypes.LunchDinner, children: "Lunch/Dinner" }), _jsx("option", { value: MealTypes.Dessert, children: "Dessert" })] })] })] }), sortedAndFilteredRecipes.length === 0 ? (_jsxs("div", { className: "text-center py-12", children: [_jsx("p", { className: "text-dark-text text-lg", children: "No recipes found. Start by creating a new recipe!" }), _jsx(Link, { to: "/new-recipe", className: "btn btn-primary mt-4", children: "Create New Recipe" })] })) : (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: sortedAndFilteredRecipes.map((recipe) => (_jsxs("div", { className: "bg-dark-surface rounded-lg overflow-hidden shadow-lg", children: [_jsx("img", { src: recipe.image, alt: recipe.title, className: "w-full h-48 object-cover" }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-xl font-semibold text-dark-text mb-2", children: recipe.title }), _jsx("p", { className: "text-dark-text-secondary mb-4", children: recipe.region }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx(Link, { to: `/edit-recipe/${recipe.id}`, className: "btn btn-secondary", children: "Edit" }), _jsx("button", { onClick: () => handleDelete(recipe.id), className: "btn btn-danger", children: "Delete" })] })] })] }, recipe.id))) }))] }) }) }) }));
};
export default YourRecipes;
