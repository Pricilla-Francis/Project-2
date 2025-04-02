import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const Signup = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            await signup({
                username: formData.username,
                email: formData.email,
                password: formData.password
            });
            navigate('/recipes');
        }
        catch (err) {
            console.error('Signup error:', err);
            setError('Failed to create account. Please try again.');
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-dark-background px-4", children: _jsxs("div", { className: "max-w-md w-full space-y-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-4xl font-bold text-dark-text", children: "Create Account" }), _jsx("p", { className: "mt-2 text-dark-text-muted", children: "Sign up to start saving your favorite recipes" })] }), error && (_jsx("div", { className: "p-4 bg-red-900/50 border-l-4 border-red-600 text-dark-text rounded", children: error })), _jsxs("form", { onSubmit: handleSubmit, className: "mt-8 space-y-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "username", className: "block text-dark-text font-medium mb-2", children: "Username" }), _jsx("input", { id: "username", name: "username", type: "text", required: true, value: formData.username, onChange: handleChange, className: "w-full p-3 rounded bg-dark-surface border border-dark-border text-dark-text placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-dark-primary", placeholder: "Choose a username" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-dark-text font-medium mb-2", children: "Email" }), _jsx("input", { id: "email", name: "email", type: "email", required: true, value: formData.email, onChange: handleChange, className: "w-full p-3 rounded bg-dark-surface border border-dark-border text-dark-text placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-dark-primary", placeholder: "Enter your email" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-dark-text font-medium mb-2", children: "Password" }), _jsx("input", { id: "password", name: "password", type: "password", required: true, value: formData.password, onChange: handleChange, className: "w-full p-3 rounded bg-dark-surface border border-dark-border text-dark-text placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-dark-primary", placeholder: "Create a password" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "confirmPassword", className: "block text-dark-text font-medium mb-2", children: "Confirm Password" }), _jsx("input", { id: "confirmPassword", name: "confirmPassword", type: "password", required: true, value: formData.confirmPassword, onChange: handleChange, className: "w-full p-3 rounded bg-dark-surface border border-dark-border text-dark-text placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-dark-primary", placeholder: "Confirm your password" })] })] }), _jsx("div", { children: _jsx("button", { type: "submit", className: "w-full py-3 bg-dark-primary text-dark-text rounded hover:bg-opacity-80 transition-colors", children: "Create Account" }) }), _jsx("div", { className: "text-center", children: _jsxs("p", { className: "text-dark-text-muted", children: ["Already have an account?", ' ', _jsx(Link, { to: "/login", className: "text-dark-primary hover:underline", children: "Sign in" })] }) })] })] }) }));
};
export default Signup;
