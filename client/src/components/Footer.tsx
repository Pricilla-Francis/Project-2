import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";







const Footer = () => {
    return (
        <>
            {/* <TeamSection /> */}
            <footer style={{ border: "1px solid black", width: "100%", position: "fixed", height: "4rem", bottom: 0, display: "flex", justifyContent: "center" }}>
                <div className="links" style={{ display: "flex", justifyContent: "space-between", width: "70%", color: "orange" }}>
                    <Link to="/team">Meet The Team</Link>
                    <Link to="/aboutus">About MunchMap</Link>
                    <Link to="/contactus">Contact Us</Link>
                    <Link to="/privacy" className="text-blue-600">Privacy</Link>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <a href="https://twitter.com" className="text-blue-500">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" className="text-blue-700">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://facebook.com" className="text-blue-600">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </footer >
        </>
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
                If you have any questions aexporty policy, please contact us at support@example.com.
            </p>
        </div>
    );
};

export default Footer;