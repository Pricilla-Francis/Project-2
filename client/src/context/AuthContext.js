import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        // Check for stored token
        const token = localStorage.getItem('token');
        if (token) {
            // Fetch user data using the token
            fetchUserData(token);
        }
    }, []);
    const fetchUserData = async (token) => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                },
                credentials: 'include'
            });
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const userData = await response.json();
            setUser(userData);
        }
        catch (error) {
            console.error('Error fetching user data:', error);
            localStorage.removeItem('token');
            setUser(null);
        }
    };
    const login = async (username, password) => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
                credentials: 'include'
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            const data = await response.json();
            localStorage.setItem('token', data.token);
            setUser(data.user);
        }
        catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };
    const signup = async (data) => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                credentials: 'include'
            });
            if (!response.ok) {
                throw new Error('Signup failed');
            }
            const result = await response.json();
            localStorage.setItem('token', result.token);
            setUser(result.user);
        }
        catch (error) {
            console.error('Signup error:', error);
            throw error;
        }
    };
    return (_jsx(AuthContext.Provider, { value: { user, login, logout, signup }, children: children }));
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
