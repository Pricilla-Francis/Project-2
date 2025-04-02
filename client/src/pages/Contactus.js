import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
        setFormData({ name: '', email: '', message: '' });
    };
    return (_jsxs("div", { style: { padding: '20px', maxWidth: '600px', margin: '0 auto' }, children: [_jsx("h1", { children: "Contact Us" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { style: { marginBottom: '15px' }, children: [_jsx("label", { htmlFor: "name", style: { display: 'block', marginBottom: '5px' }, children: "Name:" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, style: { width: '100%', padding: '8px', boxSizing: 'border-box' }, required: true })] }), _jsxs("div", { style: { marginBottom: '15px' }, children: [_jsx("label", { htmlFor: "email", style: { display: 'block', marginBottom: '5px' }, children: "Email:" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, style: { width: '100%', padding: '8px', boxSizing: 'border-box' }, required: true })] }), _jsxs("div", { style: { marginBottom: '15px' }, children: [_jsx("label", { htmlFor: "message", style: { display: 'block', marginBottom: '5px' }, children: "Message:" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, style: { width: '100%', padding: '8px', boxSizing: 'border-box' }, rows: 5, required: true })] }), _jsx("button", { type: "submit", style: { padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }, children: "Submit" })] })] }));
};
export default ContactUs;
