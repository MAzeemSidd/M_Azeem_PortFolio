import { FC } from 'react'
import { SkillsMainBody } from './client_components'

export interface Experience_Data_Types {
  _id: string;
  intro: string;
  contributions: string[];
}

type Skill_Labels = string[] | string[][]

export interface Skill_Data_Types {
  _id: string;
  category: string;
  sub_category: {
    title: string;
    desc: string;
  }[];
  skill_labels: Skill_Labels;
}

interface Data_Types {
  working_exp: Experience_Data_Types[];
  skills: Skill_Data_Types[];
}

export type Skill_Label_Types =
    'ReactJS' | 'NextJS' | 'RemixJS' | 'Redux'
  | 'CSS' | 'TailwindCSS' | 'Bootstrap' | 'Ant Design'
  | 'NodeJS' | 'ExpressJS' | 'GraphQL'
  | 'MySQL' | 'MongoDB'
  | 'GIT' | 'Linux CLI' | 'Docker' | 'Jenkins' | 'AWS';

const Skills: FC<{}> = async () => {
  const response = await fetch("http://localhost:3000/api/collections/working_exp,skills?multiple=true",
    { cache: 'no-store' }
  );
  const data: Data_Types = await response.json();

  const skillLabels: Skill_Label_Types[][] = data.skills.flatMap((item: Skill_Data_Types) => {
    const skills: Skill_Labels = item.skill_labels;
    return Array.isArray(skills[0]) 
      ? (skills as Skill_Label_Types[][]) 
      : [skills as Skill_Label_Types[]];
  });

  return (
    <div className='h-auto min-w-screen py-10 lg:py-14 px-5 sm:px-10 md:px-20 lg:px-28 grid grid-flow-row grid-cols-1 gap-14'>
      
      <div className='place-items-center'>
        <div className=' grid grid-flow-row grid-cols-1 gap-2 place-items-center text-4xl font-medium
          text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-light-blue-100'>
          <span>Skill &</span>
          <span>Experience</span>
        </div>
      </div>

      <SkillsMainBody experienceData={data['working_exp'][0]} skillData={data['skills']} skillLabels={skillLabels} />
      
    </div>
  )
}

export default Skills