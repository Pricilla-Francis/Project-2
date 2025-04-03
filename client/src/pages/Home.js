import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
const Home = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    useEffect(() => {
        if (user) {
            navigate('/recipes');
        }
    }, [user, navigate]);
    return (_jsxs("div", { className: "container", children: [_jsx("h1", { children: "Welcome to Recipe Manager" }), _jsx("p", { children: "Please log in to manage your recipes." }), _jsx("p", { children: "Once logged in, you can view and manage your recipes." }), _jsx("p", { children: "Click the button to log in." })] }));
};
export default Home;
