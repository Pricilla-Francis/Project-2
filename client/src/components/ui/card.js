import { jsx as _jsx } from "react/jsx-runtime";
export const Card = ({ children, className = '', onClick }) => {
    return (_jsx("div", { className: `bg-white rounded-lg shadow-md p-4 ${className}`, onClick: onClick, children: children }));
};
export const CardHeader = ({ children, className = '' }) => {
    return (_jsx("div", { className: `mb-4 ${className}`, children: children }));
};
export const CardTitle = ({ children, className = '' }) => {
    return (_jsx("h3", { className: `text-xl font-semibold ${className}`, children: children }));
};
export const CardContent = ({ children, className = '' }) => {
    return (_jsx("div", { className: className, children: children }));
};
