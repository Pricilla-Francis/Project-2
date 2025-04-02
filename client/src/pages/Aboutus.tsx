import React from "react";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>We are a team of six passionate food lovers and tech enthusiasts who came together to create MunchMap! A social media platform dedicated to all things food! Our mission is to connect foodies worldwide, helping them discover new flavors, share their favorite eats, and engage with a vibrant community that celebrates the joy of dining. With a blend of creativity, innovation, and a shared love for good food, we’ve built MunchMap to be the ultimate space for sharing mouthwatering moments, finding hidden gems, and making every meal an experience worth remembering. Join us and start mapping your foodie adventures today!</p>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default AboutUs;
