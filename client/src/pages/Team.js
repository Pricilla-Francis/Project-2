import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const teamMembers = [
    {
        name: _jsx("h1", { children: "Timothy Strauch" }),
        role: "Role: Software Engineer - HTML Stylist",
        description: "I'm from Mcdonough, Georgia. I am a software engineer with a passion for building web applications and learning new technologies.",
    },
    {
        name: _jsx("h1", { children: "Edward Oreilly" }),
        role: "Role: Software Engineer - Back End Developer",
        description: "I'm from the Houston, Texas. I am a software engineer with a passion for building web applications and learning new technologies.",
    },
    {
        name: _jsx("h1", { children: "Scott King" }),
        role: "Role: Software Engineer - Back End Developer",
        description: "I'm from Detriot, Michigan. I am a software engineer with a passion for building web applications and learning new technologies.",
    },
    {
        name: _jsx("h1", { children: "Lexus Nealy" }),
        role: "Role: Software Engineer - CSS Stylist",
        description: "I'm from Vicksburg, Mississippi. I am a software engineer with a passion for building web applications and learning new technologies.",
    },
    {
        name: _jsx("h1", { children: "Pricilla Francis" }),
        role: "Role: Software Engineer - CSS Stylist",
        description: "I'm from Toronto, Canada. I am a software engineer with a passion for building web applications and learning new technologies.",
    },
    {
        name: _jsx("h1", { children: "Danah Ballard" }),
        role: "Role: Software Engineer - HTML Stylist",
        description: "I'm from Miami, Florida. I am a software engineer with a passion for building web applications and learning new technologies.",
    },
];
const Team = () => {
    return (_jsx("div", { children: teamMembers.map(member => {
            return (_jsxs("div", { children: [_jsx("p", { children: member.name }), _jsx("p", { children: member.role }), _jsx("p", { children: member.description })] }));
        }) }));
};
export default Team;
