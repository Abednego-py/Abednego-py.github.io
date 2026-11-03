export type Kind = 'software' | 'data' | 'finance'

export const nav: [string, string][] = [
  ['Work', '/#build'],
  ['Toolbox', '/#tools'],
  ['Recognition', '/#along'],
  ['Classroom', '/classroom'],
  ['News', '/#news'],
  ['Contact', '/#contact'],
]

export const where = ['Lagos', 'Nigeria', 'Fintech', 'Payments', 'POS', 'Data']
export const rotating = ['payments', 'user experience', 'data analysis', 'data science']

export const marquee = [
  'Interswitch', 'Qore', 'AppZone Group', 'GetBundi', 'GoMyCode', 'Pluralcode', 'Verve', 'PrepClass', 'BinCom', 'Forage'
]

export const heroNotes = [
  { title: 'Right now', text: 'Verve value-added services for partner banks, the Loyalty Engine frontend and the SmartPOS app at Interswitch.' },
  { title: 'Before this', text: 'SmartPOS EMV flows, multi-bank app flavors and a shared API architecture at Qore.' },
  { title: 'Alongside this', text: 'Mentoring the next generation of data analysts and scientists at Pluralcode.' },
]

export const inProgress = [
  { title: 'Verve VAS for partner banks', text: 'React and Redux features that let partner banks offer Verve’s value-added services directly to their own customers.', stack: 'React · Redux · Interswitch' },
  { title: 'Loyalty Engine', text: 'Leading the frontend of a loyalty and value-added-services platform.', stack: 'React · RTK Query · Ant Design · Tailwind CSS' },
  { title: 'Interswitch POS app', text: 'New features for in-person transaction and merchant workflows.', stack: 'Android · Kotlin · XML' },
]

export const shipped: { tag: string; title: string; text: string; stack: string; kind: Kind }[] = [
  { tag: 'Qore · Android', title: 'SmartPOS at Qore', text: 'EMV card transactions and POS SDK integrations, with app flavors for each partner institution.', stack: 'Kotlin · Jetpack Compose · EMV', kind: 'software' },
  { tag: 'Qore · Web', title: 'Shared API architecture', text: 'A base API factory and custom base query that normalise backend responses, with global error handling.', stack: 'RTK Query · TypeScript', kind: 'software' },
  { tag: 'AppZone · Full-stack', title: 'Core banking apps', text: 'Applications built to client specifications for financial institutions.', stack: 'Banking', kind: 'software' },
  { tag: 'Envivo · Web', title: 'Pixel-perfect web apps', text: 'Complex Figma designs turned into responsive sites.', stack: 'JavaScript · HTML5 · CSS3', kind: 'software' },
  { tag: 'Data · Banks', title: 'Data for banks', text: 'Data science and analysis projects that helped banks make data-driven decisions and prevent fraud.', stack: 'Python · Pandas · Analytics', kind: 'data' },
  { tag: 'Data · Machine learning', title: 'ML toolkit', text: 'Machine learning work in Python with Pandas, Keras and TensorFlow.', stack: 'Pandas · Keras · TensorFlow', kind: 'data' },
  { tag: 'Data · 2021', title: 'Applied Data Science', text: 'Certificate from WorldQuant University, January to March 2021.', stack: 'WorldQuant University', kind: 'data' },
  { tag: 'Data · Courses', title: 'AI and data courses', text: 'Curriculum and video courses on core data science and AI, plus training for aspiring analysts.', stack: 'GetBundi · Pluralcode', kind: 'data' },
]

export const tools = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript ES6+', 'Redux Toolkit', 'RTK Query', 'HTML5', 'CSS3', 'Tailwind CSS', 'Ant Design', 'ReactStrap', 'MUI'] },
  { title: 'Mobile', items: ['Android', 'Kotlin', 'Jetpack Compose', 'EMV / POS SDK integration', 'Multi-flavor architecture'] },
  { title: 'Backend and data', items: ['Python', 'Flask', 'C#', 'ASP.NET', 'SQL', 'PostgreSQL'] },
  { title: 'Data science and ML', items: ['Data analysis', 'Machine learning', 'Pandas', 'Keras', 'TensorFlow'] },
  { title: 'Tools', items: ['Git', 'Docker', 'Firebase', 'Jenkins', 'CI/CD', 'Vite'] },
]

export const tiles: {
  tag: string;
  title: string;
  text: string;
  count?: { to: number; decimals: number; suffix: string };
}[] = [
  {
    tag: "2019",
    title: "4.3/5.0",
    text: "B.Sc. Chemical Engineering, Obafemi Awolowo University",
    count: { to: 4.3, decimals: 1, suffix: "/5.0" },
  },
  {
    tag: "Mentoring",
    title: "150",
    text: "Number of students trained, April 2022 till date",
    count: { to: 150, decimals: 0, suffix: "" },
  },
  {
    tag: "Qore",
    title: "Engineer of the Month",
    text: "Recognition received while building at Qore",
  },
  {
    tag: "GoMyCode",
    title: "Instructor / Mentor Recognition",
    text: "Recognised for instructional quality and mentorship",
  },
  {
    tag: "2013",
    title: "Best Graduating Student",
    text: "Secondary school, June 2013",
  },
];

export const stories: { name: string; role: string; company: string; text: string }[] =
  [
    {
      name: "Jane Nwufo",
      role: "Data Analyst",
      company: "International Breweries",
      text: "Mr Abednego is calm and detailed in his approach to teaching. He takes time to ensure that each student understands the concepts before moving on. His mentorship has been invaluable in my career transition.",
    },
    {
      name: "Clinton John-Anozie",
      role: "Intern - Android Dev",
      company: "Qore",
      text: "I deeply appreciate the mentorship and encouragement I recieved from Mr Abednego. His guidance was invaluable",
    },
    {
      name: "Stephanie Dimson",
      role: "Career Switcher → Data Analyst",
      company: "Norland International",
      text: "I honestly enjoyed every bit of the mentorship program so much that I didn't notice we had done 9 classes already. He made it so easy to follow through that the fear I had literally faded away",
    },
    {
      name: "Kofoworola Shakioye",
      role: "Career Switcher → Data Analyst",
      company: "GT Bank",
      text: "A big shout out to my tutor - Abednego Aginam.",
    },
  ];

export const teachFeatured = [
  { n: 'i.', meta: 'GoMyCode · Sep 2022 – Mar 2023', title: 'Instructor / Mentor', text: 'Taught and mentored learners, guided hands-on projects and gave portfolio feedback to build job-ready skills.' },
  { n: 'ii.', meta: 'Pluralcode Institute · c. 2021 – 2022', title: 'Career Coach and Data Analysis and AI Trainer', text: 'Designed curriculum for the data school and trained aspiring data analysts and scientists.' },
  { n: 'iii.', meta: 'GetBundi · c. 2021', title: 'AI Course Creator', text: 'Designed a curriculum and produced video courses on core data science and AI concepts.' },
]

export const teachAll = [
  { date: 'Sep 2022 – Mar 2023', name: 'GoMyCode', role: 'Instructor / Mentor · Remote' },
  { date: 'c. 2021 – 2022', name: 'Pluralcode Institute', role: 'Career Coach · Remote' },
  { date: 'c. 2021', name: 'GetBundi', role: 'AI Course Creator · Remote' },
  { date: 'c. 2019 – 2020', name: 'Prepclass', role: 'Subject Matter Expert · Lagos' },
]

export const timeline = [
  { meta: 'Jan 2026 · Position', title: 'Frontend / Android Engineer, Interswitch', text: 'React/Redux features for Verve VAS, lead on the Loyalty Engine frontend, and Kotlin/XML features on the POS app.' },
  { meta: 'Oct 2023 · Position', title: 'Frontend / Android Engineer, Qore', text: 'Agency banking and merchant products on web and mobile, SmartPOS EMV flows and a shared API architecture, until Jan 2026. Named Employee of the Month/Quarter.' },
  { meta: 'Sep 2022 · Teaching', title: 'Instructor / Mentor, GoMyCode', text: 'Taught and mentored learners until Mar 2023 and was recognised for instructional quality.' },
  { meta: 'Jul 2022 · Certificate', title: 'Udacity Full-Stack Developer Nanodegree', text: 'Completed the programme after starting in April.' },
  { meta: 'Jun 2022 · Position', title: 'Full-Stack Developer, AppZone Group', text: 'Gathered requirements and built core banking applications for financial institutions, until Oct 2023.' },
  { meta: 'c. 2021 · Data', title: 'Data and AI trainer and course creator', text: 'Trained aspiring analysts at Pluralcode Institute and produced AI video courses for GetBundi.' },
  { meta: 'Jul 2021 · Certificate', title: 'Pluralsight Website Specialist', text: 'Completed in March 2022.' },
  { meta: 'Jan 2021 · Data', title: 'Applied Data Science, WorldQuant University', text: 'Completed the certificate in March 2021.' },
  { meta: 'Dec 2020 · Position', title: 'Front-End Developer, Envivo', text: 'Turned complex Figma designs into pixel-perfect responsive web apps, until Apr 2021.' },
]

export const links = {
  email: 'abednegoaginam@gmail.com',
  linkedin: 'https://linkedin.com/in/abednego-aginam',
  github: 'https://github.com/Abednego-py',
}
