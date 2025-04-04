import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        setIsLoggedIn(!!user);
    }, [user]);
    const handleLogout = () => {
        logout();
        navigate('/');
    };
    return (_jsxs("nav", { className: "navbar", children: [_jsx("div", { className: "navbar-brand", children: _jsx(Link, { to: "/", className: "navbar-logo", children: _jsx("h1", { children: "MunchMap" }) }) }), _jsx("div", { className: "navbar-links", children: isLoggedIn ? (_jsxs(_Fragment, { children: [_jsx(Link, { to: "/recipes", className: 'nav-buttons', children: "Your Recipes" }), _jsx(Link, { to: "/new-recipe", className: 'nav-buttons', children: "New Recipe" }), _jsx(Link, { to: "/search", className: 'nav-buttons', children: "Search Recipes" }), _jsx("button", { className: "btn btn-logout", onClick: handleLogout, children: "Logout" })] })) : (_jsxs(_Fragment, { children: [_jsx(Link, { to: "/login", className: "btn btn-primary", children: "Login" }), _jsx(Link, { to: "/signup", className: "btn btn-secondary", children: "Sign Up" })] })) })] }));
};
export default Navbar;
