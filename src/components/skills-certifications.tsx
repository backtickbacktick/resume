import data from '../data';

export default function SkillsCertifications() {
    return (
        <section className="skills-certifications">
            <h2>Skills</h2>
            <ul>
                {data.skillTypes.map((skillType, index) => (
                    <li key={index}>
                        <h4>{skillType}</h4>
                        <ul>
                            {data.skills
                                .filter((s) => s.type === skillType)
                                .sort((a, b) => (a.years > b.years ? -1 : 1))
                                .map((skill, index) => (
                                    <li key={index}>
                                        <span className="title">{skill.title}</span>
                                        <span></span>
                                        <span className="time">{skill.years} yrs</span>
                                    </li>
                                ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <h2>Certifications</h2>
            <ul>
                {data.certifications.map((certification, index) => (
                    <li key={index}>
                        <h4>{certification.title}</h4>
                        <p className="source">{certification.source}</p>
                        <p className="issued"> Issued: ({certification.issuedYear})</p>
                        {certification.expiresYear && (
                            <p className="expires"> Expires: ({certification.expiresYear})</p>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}
