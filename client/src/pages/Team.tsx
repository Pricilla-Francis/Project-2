const teamMembers = [
    {
        name: <h1>Timothy Strauch</h1>,
        role: "Role: Software Engineer - HTML Stylist",
        description: "I'm from Mcdonough, Georgia. I am a software engineer with a passion for building web applications and learning new technologies.",

    },
    {
        name: <h1>Edward Oreilly</h1>,
        role: "Role: Software Engineer - Back End Developer",
        description: "I'm from the Houston, Texas. I am a software engineer with a passion for building web applications and learning new technologies.",

    },
    {
        name: <h1>Scott King</h1>,
        role: "Role: Software Engineer - Back End Developer",
        description: "I'm from Detriot, Michigan. I am a software engineer with a passion for building web applications and learning new technologies.",

    },
    {
        name: <h1>Lexus Nealy</h1>,
        role: "Role: Software Engineer - CSS Stylist",
        description: "I'm from Vicksburg, Mississippi. I am a software engineer with a passion for building web applications and learning new technologies.",


    },
    {
        name: <h1>Pricilla Francis</h1>,
        role: "Role: Software Engineer - CSS Stylist",
        description: "I'm from Toronto, Canada. I am a software engineer with a passion for building web applications and learning new technologies.",

    },
    {
        name: <h1>Danah Ballard</h1>,
        role: "Role: Software Engineer - HTML Stylist",
        description: "I'm from Miami, Florida. I am a software engineer with a passion for building web applications and learning new technologies.",

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