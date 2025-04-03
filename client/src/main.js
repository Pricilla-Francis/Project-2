import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { AuthProvider } from './context/AuthContext';
import './Styles/Navbar.css';
import './Styles/Footer.css';
import "@fortawesome/fontawesome-free/css/all.css";
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import YourRecipes from './pages/YourRecipes';
import NewRecipe from './pages/NewRecipe';
import EditRecipe from './pages/EditRecipe';
import SearchRecipes from './pages/SearchRecipes';
import Team from './pages/Team';
import Privacy from './pages/Privacy';
import AboutUs from './pages/Aboutus';
import ContactUs from './pages/Contactus';
const router = createBrowserRouter([
    {
        path: '/',
        element: (_jsx(AuthProvider, { children: _jsx(App, {}) })),
        errorElement: _jsx(ErrorPage, {}),
        children: [
            {
                index: true,
                element: _jsx(Home, {})
            },
            {
                path: '/login',
                element: _jsx(Login, {})
            },
            {
                path: '/signup',
                element: _jsx(Signup, {})
            },
            {
                path: '/recipes',
                element: _jsx(YourRecipes, {})
            },
            {
                path: "/team",
                element: _jsx(Team, {})
            },
            {
                path: "/privacy",
                element: _jsx(Privacy, {})
            },
            {
                path: "/aboutus",
                element: _jsx(AboutUs, {})
            },
            {
                path: "/contactus",
                element: _jsx(ContactUs, {})
            },
            {
                path: "/new-recipe",
                element: _jsx(NewRecipe, {})
            },
            {
                path: "/edit-recipe/:id",
                element: _jsx(EditRecipe, {})
            },
            {
                path: "/search",
                element: _jsx(SearchRecipes, {})
            }
        ]
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
