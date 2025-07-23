'use client'

import { FC, Fragment, JSX, useMemo, useState } from 'react'
import { NestedList } from './nested_list'
import { SkillsBox, SkillsBoxCategory, SkillsBoxCategoryDivider } from './skills_box'
import { skillsDetailedList, skillsLabel } from './data'

const ExperienceDetails: FC<{}> = () => (
  <>
    <div className='relative z-10 grid grid-flow-row grid-cols-1 gap-3 mt-3 lg:mt-0'>
      <div className='text-3xl text-light-blue-200'>Frontend React Developer</div>

      <div className='text-sm text-justify text-blue-50/85'>With 1.5 years of hands-on experience in frontend development, I specialize in building dynamic, high-performance web applications using React.js. My focus is on crafting responsive, user-centric interfaces with modern tools like Tailwind CSS, complemented by UI libraries such as Ant Design, Material UI, and Material Tailwind.</div>
    </div>

    <div className='grid grid-flow-row grid-cols-1 gap-3'>

      <div className='text-xl text-light-blue-100'>Key Contributions & Expertise:</div>

      <ul className='list-disc list-outside ml-3 md:ml-7 lg:mr-9 mt-1 space-y-2 text-justify text-sm text-blue-50/85'>
        <li>Developed and maintained three major projects as a React developer, ensuring seamless performance and cross-device compatibility.</li>
        <li>Collaborated with development teams to architect interactive, scalable, and accessible web applications.</li>
        <li>Translated design mockups into reusable, modular React components, optimizing both functionality and aesthetics.</li>
        <li>Advocated for UX improvements, contributing ideas to refine interfaces and elevate user engagement.</li>
      </ul>

    </div>
  </>
)

const SkillsDetailedList: FC<{}> = () => (
  <div className='relative z-10 grid grid-flow-row grid-cols-1 gap-3'>

    <div className='text-xl text-light-blue-100'>Technical Expertise:</div>

    <ul className='list-disc list-outside ml-3 mr-2 md:ml-7 lg:mr-9 mt-1 space-y-2 text-justify text-sm text-blue-50/85'>
      {
        skillsDetailedList.map(item => (
          <NestedList
            key={item.category}
            category={item.category}
            skills={item.skills}
          />
        ))
      }
    </ul>

  </div>
)

type tabTypes = 'skills' | 'experience'

const Skills: FC<{}> = () => {
  const [tapType, setTapType] = useState<tabTypes>('skills');

  const memoizedSkillsBoxes  = useMemo<JSX.Element[]>(() => (
    skillsLabel.map((subSkills, index) => (
      <Fragment key={index}>
        <SkillsBoxCategory>
          {
            subSkills.map(skill => (
              <SkillsBox key={skill} name={skill} />
            ))
          }
        </SkillsBoxCategory>

        <SkillsBoxCategoryDivider />
      </Fragment>
    ))
  ), [])

  return (
    <div className='h-auto min-w-screen py-10 lg:py-14 px-5 sm:px-10 md:px-20 lg:px-28 grid grid-flow-row grid-cols-1 gap-14'>
      
      <div className='place-items-center'>
        <div className=' grid grid-flow-row grid-cols-1 gap-2 place-items-center text-4xl font-medium
          text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-light-blue-100'>
          <span>Skill &</span>
          <span>Experience</span>
        </div>
      </div>

      <div className='flex flex-col gap-5'>

        <div className='inline-flex lg:hidden gap-4'>
          <button
            onClick={() => setTapType('skills')}
            className={`
              rounded-full px-3.5 py-1 outline-none ring-1 ring-light-blue-200
              ${tapType === 'skills' ? 'bg-light-blue-200 text-[#020618]' : 'bg-none text-light-blue-200'}
            `}
          >
            Skills
          </button>
          <button
            onClick={() => setTapType('experience')}
            className={`
              rounded-full px-3.5 py-1 outline-none ring-1 ring-light-blue-200
              ${tapType === 'experience' ? 'bg-light-blue-200 text-[#020618]' : 'bg-none text-light-blue-200'}
            `}
          >
            Experience
          </button>
        </div>

        <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-5'>

          <div className='relative grid grid-flow-row grid-cols-1 gap-6 order-2 lg:order-1'>

            <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[.5px] blur-xl opacity-60 bg-light-blue-200 shadow-[rgb(002,119,189)_0px_0px_500px_20px]' />

            <div className={`${tapType === 'experience' ? 'block' : 'hidden'} lg:block space-y-7`}><ExperienceDetails /></div>

            <div className={`${tapType === 'skills' ? 'block' : 'hidden'} lg:block`}><SkillsDetailedList /></div>

          </div>

          <div className={`${tapType === 'skills' ? 'block' : 'hidden'} lg:block order-1 lg:order-2 overflow-hidden w-full`}>
            { memoizedSkillsBoxes }
          </div>

        </div>
      </div>

      

    </div>
  )
}

export default Skills