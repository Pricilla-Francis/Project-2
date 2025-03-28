import React from "react";

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

const MeetTheTeam = () => {
    return (
        <section className="py-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Meet the Team</h2>
            <p className="text-gray-600 mb-8">Our talented professionals making things happen.</p>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard key={index} member={member} />
                ))}
            </div>
        </section>
    );
};

export default MeetTheTeam;