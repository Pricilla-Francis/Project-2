import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";
import '../Styles/Footer.css'

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