// @ts-check
const present = new Date().getFullYear();

/**
 * A number, or a string containing a number.
 * @typedef {('Language' | 'Framework' | 'Library' | 'Other')} SkillType
 */

/**
 * @type {{
 *      title: string;
 *      subtitle: string;
 *      contactLinks: { title: string; href: string }[];
 *      introduction: string;
 *      skills: { title: string; progress: number; years: number; type: SkillType }[];
 *      experience: {
 *          companyName: string;
 *          title: string;
 *          description: string[];
 *          location: string;
 *          startedOn: number;
 *          finishedOn?: number;
 *          page?: number;
 *          volunteer?: boolean;
 *      }[];
 *      skillTypes: SkillType[];
 *      certifications: { title: string; source: string; issuedYear: number; expiresYear?: number }[];
 * }}
 *
 */
const data = {
    title: 'Brian S. Reed',
    subtitle: 'Senior Software Engineer',
    contactLinks: [
        {
            title: 'me@iambrian.com',
            href: 'mailto:me@iambrian.com',
        },
        {
            title: '757-447-4777',
            href: 'tel:+1-757-447-4777',
        },
        {
            title: 'iambrian.com',
            href: 'https://iambrian.com',
        },
    ],
    introduction:
        'Senior Software Engineer with over 15 years of software development experience in local Government, large corporations, and start-ups. ' +
        'Self-taught, autodidact with passion for learning and exploration. ' +
        'An Army veteran with the resourcefulness to overcoming any design and engineering challenge.',
    skillTypes: ['Language', 'Framework', 'Library'],
    skills: [
        { title: 'React', progress: 80, years: present - 2015, type: 'Framework' },
        { title: 'React Relay', progress: 50, years: 3, type: 'Framework' },
        { title: 'Redux', progress: 75, years: 5, type: 'Library' },
        { title: 'React Native', progress: 50, years: 0.5, type: 'Framework' },
        { title: 'HTML', progress: 60, years: present - 2007, type: 'Language' },
        { title: 'CSS', progress: 85, years: present - 2007, type: 'Language' },
        { title: 'Tailwind', progress: 70, years: 4, type: 'Library' },
        { title: 'SASS', progress: 65, years: 6, type: 'Library' },
        { title: 'JavaScript', progress: 87, years: present - 2009, type: 'Language' },
        { title: 'Angular', progress: 65, years: 3, type: 'Framework' },
        { title: 'Node.js', progress: 70, years: present - 2015, type: 'Framework' },
        { title: 'GraphQL', progress: 85, years: 7, type: 'Language' },
        { title: 'TypeScript', progress: 80, years: present - 2015, type: 'Language' },
        { title: 'Sass/SCSS', progress: 85, years: present - 2013, type: 'Language' },
        { title: 'C#', progress: 55, years: 6, type: 'Language' },
        { title: 'PHP', progress: 70, years: 7, type: 'Language' },
        { title: 'SQL', progress: 45, years: 8, type: 'Language' },
        //  { title: 'Java', progress: 1, years: 0.1, type: 'Language' },
        { title: 'Settlers of Catan', progress: 65, years: 18, type: 'Other' },
        //  { title: 'Next.js', progress: 5, years: 0.1, type: 'Language' },
    ],
    certifications: [
        {
            title: 'Certified Scrum Master',
            source: 'Scrum Alliance',
            issuedYear: 2021,
        },
        {
            title: 'EMT - Specialist',
            source: 'NREMT',
            issuedYear: 2023,
            expiresYear: 2025,
        },
    ],
    experience: [
        {
            volunteer: true,
            companyName: 'VB Rescue',
            title: 'Emergency Medical Technician (Volunteer)',
            description: [
                'Conducted patient assessments, administered treatments, and monitored vital signs during transport.',
                'Collaborated with emergency response teams and communicated effectively with medical personnel.',
                'Delivered compassionate patient care and support to individuals and families during emergencies.',
            ],
            location: '',
            startedOn: 1662004800000,
        },
        {
            page: 1,
            companyName: 'Butterfly Network, Inc.',
            title: 'Senior Software Engineer',
            description: [
                'Collaborated with product managers, designers, and other stakeholders, to create technical specifications and manageable user stories with detailed acceptance criteria and anticipated QA effort.',
                'Led cloud frontend development including maintenance and expansion of internal design system and React Component Library and cloud frontend SAAS.',
                'Attained Certified Scrum Master and led scrum ceremonies and encouraged agile practices, improving team productivity by documenting dependency chains and removing road blocks for team members.',
            ],
            location: '',
            startedOn: 1630468800000,
        },
        {
            page: 1,
            companyName: 'CoStar Group',
            title: 'Senior Software Engineer',
            description: [
                'Spearheaded the improvement and expansion of a comprehensive shared React components library, enhancing reusability and efficiency.',
                'Ensured optimal front-end performance for both desktop and mobile web applications, delivering a seamless and responsive user experience.',
            ],
            location: 'Norfolk, Virginia Area',
            startedOn: 1561953600000,
            finishedOn: 1630468800000,
        },
        {
            page: 1,
            companyName: 'Anthem, Inc.',
            title: 'Developer Advisor',
            description: [
                'United multiple teams to successfully rebuild an internal React Native framework, scaling it across multiple mobile applications and significantly enhancing performance and maintainability.',
                'Architected high-level React components to ensure scalability and reusability, facilitating consistent development across various mobile applications and client regions.',
            ],
            location: 'Norfolk, Virginia Area',
            startedOn: 1548997200000,
            finishedOn: 1561953600000,
        },
        {
            page: 1,
            companyName: 'ADP',
            title: 'Senior Application Developer',
            description: [
                'Led the team in code reviews, providing best practice recommendations to ensure high-quality code standards.',
                'Collaborated with Product Managers, the UX team, and Business Managers to discuss, analyze, and strategize product design.',
                'Interviewed prospective employees and mentored junior software developers, fostering a culture of continuous learning and development.',
            ],
            location: 'Norfolk, Virginia Area',
            startedOn: 1506830400000,
            finishedOn: 1548997200000,
        },
        {
            page: 2,
            companyName: '80/20 Software Consulting - Array Digital, LLC.',
            title: 'Software Developer',
            description: [
                'Consulted with a finance company and built dynamic front-end web applications using Angular, ensuring a seamless user experience.',
                'Built robust back-end systems with ASP.NET Web API, Node.js, and PHP to support diverse application needs.',
                'Created, published mobile hybrid applications using Ionic/Cordova and Angular, providing cross-platform functionality.',
                'Maintained, upgraded, and enhanced legacy ASP.NET WebForms applications, adding new features and improving performance.',
            ],
            location: 'Chesapeake, Virginia',
            startedOn: 1422766800000,
            finishedOn: 1506830400000,
        },
        {
            page: 2,
            companyName: 'City of Virginia Beach',
            title: 'Web Designer / Developer',
            description: [
                'Developed sophisticated mapping applications utilizing Google Maps and ESRI Map APIs, providing advanced geospatial solutions.',
                'Built a custom content management system (CMS) leveraging SharePoint APIs, streamlining content creation and management processes.',
                'Designed visually appealing websites in line with existing branding and marketing materials, ensuring a cohesive and professional appearance.',
                'Created custom SharePoint web parts, and SharePoint site templates including photo galleries, video libraries, and calendars, enhancing site functionality.',
            ],
            location: '',
            startedOn: 1246420800000,
            finishedOn: 1422766800000,
        },
    ],
};

export default data;
