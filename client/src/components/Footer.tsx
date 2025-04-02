import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

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

interface TeamMember {
    name: string;
    role: string;
    twitter: string;
    linkedin: string;
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            <div className="mt-4 flex justify-center gap-3">
                <a href={member.twitter} className="text-blue-500">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href={member.linkedin} className="text-blue-700">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <Link to="/team">Meet The Team</Link>
                    <Link to="/aboutus">About MunchMap</Link>
                    <Link to="/contactus">Contact Us</Link>
                    <Link to="/privacy">Privacy</Link>
                </div>
                <div className="footer-social">
                    <a href="https://twitter.com" className="social-link">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com" className="social-link">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://facebook.com" className="social-link">
                        <i className="fab fa-facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export const Privacy: React.FC = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Privacy Policy</h1>
            <p>
                Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
            </p>
            <h2>Information We Collect</h2>
            <p>
                We may collect personal information such as your name, email address, and other details you provide when using our services.
            </p>
            <h2>How We Use Your Information</h2>
            <p>
                We use your information to provide and improve our services, communicate with you, and ensure a better user experience.
            </p>
            <h2>Sharing Your Information</h2>
            <p>
                We do not share your personal information with third parties except as required by law or to provide our services.
            </p>
            <h2>Your Choices</h2>
            <p>
                You can choose not to provide certain information, but this may limit your ability to use some features of our services.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions about this privacy policy, please contact us at support@example.com.
            </p>
        </div>
    );
};

export default Footer;