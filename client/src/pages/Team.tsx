const teamMembers = [
    {
        name: "Timothy Strauch",
        role: "Software Engineer",
        description: "I'm from Atlanta, Georgia. I am a software engineer with a passion for building web applications and learning new technologies.",
        linkedin: "Project 2",
    },
    {
        name: "Edward Oreilly",
        role: "Software Engineer",
        description: "I'm from the West Coast. I am a software engineer with a passion for building web applications and learning new technologies.",
        linkedin: "Project 2",
    },
    {
        name: "Scott King",
        role: "Software Engineer",
        description: "I'm from Detriot, Michigan. I am a software engineer with a passion for building web applications and learning new technologies.",
        linkedin: "Project 2",
    },
    {
        name: "Lexus Nealy",
        role: "Software Engineer",
        description: "I'm from Mississippi. I am a software engineer with a passion for building web applications and learning new technologies.",
        linkedin: "Project 2",

    },
    {
        name: "Priscilla Francis",
        role: "Software Engineer",
        description: "I'm from the East Coast. I am a software engineer with a passion for building web applications and learning new technologies.",
        linkedin: "Project 2",
    },
    {
        name: "Danah Ballard",
        role: "Software Engineer",
        description: "I'm from Miami, Florida. I am a software engineer with a passion for building web applications and learning new technologies.",
        linkedin: "Project 2",
    },
];

const Team = () => {

    return (
        <div>
            {teamMembers.map(member => {
                return (
                    <div>
                        <p>{member.name}</p>
                        <p>{member.role}</p>
                        <p>{member.description}</p>
                    </div>
                )
            })}
        </div>
    )

}
export default Team