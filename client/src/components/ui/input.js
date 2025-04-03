import { jsx as _jsx } from "react/jsx-runtime";
export const Input = ({ className = '', ...props }) => {
    return (_jsx("input", { className: `px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`, ...props }));
};
