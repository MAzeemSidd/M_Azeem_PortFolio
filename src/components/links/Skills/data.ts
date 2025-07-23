type skillsLabelNames = 'JavaScript' | 'Python'
  | 'NextJS' | 'ReactJS' | 'React-NativeJS' | 'Redux'
  | 'CSS' | 'TailwindCSS' | 'Bootstrap' | 'Ant Design'
  | 'NodeJS' | 'ExpressJS' | 'GraphQL'
  | 'MySQL' | 'MongoDB'
  | 'GIT' | 'Linux CLI' | 'Docker' | 'Jenkins';

export const skillsLabel: skillsLabelNames[][] = [
  ['JavaScript', 'Python'],
  ['NextJS', 'ReactJS', 'React-NativeJS', 'Redux'],
  ['CSS', 'TailwindCSS', 'Bootstrap', 'Ant Design'],
  ['NodeJS', 'ExpressJS', 'GraphQL'],
  ['MySQL', 'MongoDB'],
  ['GIT', 'Linux CLI', 'Docker', 'Jenkins']
]

interface skillsDetailedListType {
  category: string;
  skills: { title: string; text?: string; }[];
}

export const skillsDetailedList: skillsDetailedListType[] = [
  {
    category: 'Programming Languages',
    skills: [
      {title: 'Javascript'},
      {title: 'Python'},
    ]
  },
  {
    category: 'Frontend Development',
    skills: [
      {title: 'ReactJS', text: 'Primary expertise in React.'},
      {title: 'Styling', text: 'Tailwind CSS, Bootstrap and other UI libraries.'},
      {title: 'Core Web', text: 'JavaScript (ES6+), HTML5, CSS3.'},
    ]
  },
  {
    category: 'Backend & Databases',
    skills: [
      {title: 'Backend', text: 'Academic project experience in Node.js, Express.js.'},
      {title: 'RDBM', text: 'Knowledge of Rational Database specially MySQL.'},
      {title: 'NoSQL', text: 'Hands-on experience of MongoDB in my FYP.'},
    ]
  },
  {
    category: 'Tools & DevOps',
    skills: [
      {title: 'Version Control', text: 'Git, GitHub'},
      {title: 'Containerization', text: 'containerization knowledge and hands-on practices with Docker.'},
      {title: 'Command-line', text: 'Knowledge of Linux CLI commands.'},
      {title: 'CI/CD', text: 'Practical experience and knowledge of Jenkins.'},
    ]
  }
];