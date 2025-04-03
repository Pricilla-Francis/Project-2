import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';
const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(formData.username, formData.password);
            navigate('/recipes');
        }
        catch (err) {
            console.error('Login error:', err);
            setError('Invalid username or password');
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-dark-background px-4", children: _jsxs("div", { className: "max-w-md w-full space-y-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "welcome", children: "Welcome Back" }), _jsx("p", { className: "sign-in", children: "Please sign in to your account" })] }), error && (_jsx("div", { className: "p-4 mb-8 bg-red-900/50 border-l-4 border-red-600 text-dark-text rounded-lg", children: error })), _jsx(Card, { className: "bg-dark-surface border-dark-border", children: _jsx(CardContent, { className: "pt-6", children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "username", className: "text-dark-text", children: "Username" }), _jsx(Input, { id: "username", name: "username", type: "text", required: true, value: formData.username, onChange: handleChange, className: "bg-dark-surface border-dark-border text-dark-text", placeholder: "Enter your username" })] }), _jsxs("div", { className: 'password', children: [_jsx("label", { htmlFor: "password", className: "block text-dark-text font-medium mb-2", children: "Password" }), _jsx("input", { id: "password", name: "password", type: "password", required: true, value: formData.password, onChange: handleChange, className: "w-full p-3 rounded bg-dark-surface border border-dark-border text-dark-text placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-dark-primary", placeholder: "Enter your password" })] })] }), _jsx("div", { children: _jsx("button", { type: "submit", className: "signin-btn", children: "Sign In" }) }), _jsxs("div", { className: "text-center", children: [_jsxs("p", { className: "sign-up", children: ["Don't have an account?", ' ', _jsx(Link, { to: "/signup", className: "text-light-primary hover:underline", children: "Sign up" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "password", className: "text-dark-text", children: "Password" }), _jsx(Input, { id: "password", name: "password", type: "password", required: true, value: formData.password, onChange: handleChange, className: "bg-dark-surface border-dark-border text-dark-text", placeholder: "Enter your password" })] })] }), _jsx(Button, { type: "submit", className: "w-full bg-dark-primary text-dark-text hover:bg-dark-primary/80", children: "Sign In" }), _jsx("div", { className: "text-center", children: _jsxs("p", { className: "text-dark-text-muted", children: ["Don't have an account?", ' ', _jsx(Link, { to: "/signup", className: "text-dark-primary hover:underline", children: "Sign up" })] }) })] }) }) })] }) }));
};
div >
;
div >
;
;
;
export default Login;
