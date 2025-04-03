import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Motto from './components/Motto';
function App() {
    return (_jsxs("div", { className: "flex flex-col min-h-screen", children: [_jsx(Navbar, {}), _jsx(Motto, {}), _jsx("main", { className: "flex-grow container mx-auto px-4 py-8", children: _jsx(Outlet, {}) }), _jsx("div", { children: _jsx(Footer, {}) })] }));
}
export default App;
