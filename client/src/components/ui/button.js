import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ children, className = '', variant = 'primary', ...props }) => {
    const baseStyles = 'px-4 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
        success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500'
    };
    return (_jsx("button", { className: `${baseStyles} ${variantStyles[variant]} ${className}`, ...props, children: children }));
};
