import React from "react";
import { Link } from "react-router-dom";

const teamMembers = [
    {
        name: "Timothy Strauch",
        role: "Software Engineer",
        twitter: "#",
        linkedin: "#",
    },
    {
        name: "Edward Oreilly",
        role: "Software Engineer",
        twitter: "#",
        linkedin: "#",
    },
    {
        name: "Scott King",
        role: "Software Engineer",
        twitter: "#",
        linkedin: "#",
    },
    {
        name: "Lexus Nealy",
        role: "Software Engineer",
        twitter: "#",
        linkedin: "#",
    },
    {
        name: "Priscilla Francis",
        role: "Software Engineer",
        twitter: "#",
        linkedin: "#",
    },
    {
        name: "Danah Ballard",
        role: "Software Engineer",
        twitter: "#",
        linkedin: "#",
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
        <footer style={{ border: "1px solid black", width: "100%", position: "fixed", height: "5rem", bottom: 0, display: "flex", "justifyContent": "center" }}>
            <div className="links" style={{ display: "flex", "justifyContent": "space-between", width: "70%", color: "orange" }}>
                <Link to="/team">Meet The Team</Link>
                <a href="">About MunchMap</a>
                <a href="">Contact Us</a>
                <a href="">Social Media</a>
            </div>
        </footer>
    );
};

export default Footer;