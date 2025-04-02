import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import '../Styles/Footer.css';
const teamMembers = [
    {
        name: "Timothy Strauch",
        role: "Software Engineer",
        description: "#",
    },
    {
        name: "Edward Oreilly",
        role: "Software Engineer",
        description: "#",
    },
    {
        name: "Scott King",
        role: "Software Engineer",
        description: "#",
    },
    {
        name: "Lexus Nealy",
        role: "Software Engineer",
        description: "#",
    },
    {
        name: "Priscilla Francis",
        role: "Software Engineer",
        description: "#",
    },
    {
        name: "Danah Ballard",
        role: "Software Engineer",
        description: "#",
    },
];
const TeamMemberCard = ({ member }) => {
    return (_jsxs("div", { className: "bg-white shadow-lg rounded-lg p-6 text-center", children: [_jsx("img", { alt: member.name, className: "w-32 h-32 mx-auto rounded-full mb-4" }), _jsx("h3", { className: "text-xl font-semibold text-gray-700", children: member.name }), _jsx("p", { className: "text-gray-500", children: member.role }), _jsxs("div", { className: "mt-4 flex justify-center gap-3", children: [_jsx("a", { href: member.twitter, className: "text-blue-500", children: _jsx("i", { className: "fab fa-twitter" }) }), _jsx("a", { href: member.linkedin, className: "text-blue-700", children: _jsx("i", { className: "fab fa-linkedin" }) })] })] }));
};
const Footer = () => {
    return (_jsx("footer", { className: "footer", children: _jsxs("div", { className: "footer-content", children: [_jsxs("div", { className: "footer-links", children: [_jsx(Link, { to: "/team", children: "Meet The Team" }), _jsx(Link, { to: "/aboutus", children: "About MunchMap" }), _jsx(Link, { to: "/contactus", children: "Contact Us" }), _jsx(Link, { to: "/privacy", children: "Privacy" })] }), _jsxs("div", { className: "footer-social", children: [_jsx("a", { href: "https://twitter.com", className: "social-link", children: _jsx("i", { className: "fab fa-twitter" }) }), _jsx("a", { href: "https://linkedin.com", className: "social-link", children: _jsx("i", { className: "fab fa-linkedin" }) }), _jsx("a", { href: "https://facebook.com", className: "social-link", children: _jsx("i", { className: "fab fa-facebook" }) })] })] }) }));
};
export const Privacy = () => {
    return (_jsxs("div", { style: { padding: '20px', fontFamily: 'Arial, sans-serif' }, children: [_jsx("h1", { children: "Privacy Policy" }), _jsx("p", { children: "Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information." }), _jsx("h2", { children: "Information We Collect" }), _jsx("p", { children: "We may collect personal information such as your name, email address, and other details you provide when using our services." }), _jsx("h2", { children: "How We Use Your Information" }), _jsx("p", { children: "We use your information to provide and improve our services, communicate with you, and ensure a better user experience." }), _jsx("h2", { children: "Sharing Your Information" }), _jsx("p", { children: "We do not share your personal information with third parties except as required by law or to provide our services." }), _jsx("h2", { children: "Your Choices" }), _jsx("p", { children: "You can choose not to provide certain information, but this may limit your ability to use some features of our services." }), _jsx("h2", { children: "Contact Us" }), _jsx("p", { children: "If you have any questions about this privacy policy, please contact us at support@example.com." })] }));
};
export default Footer;
