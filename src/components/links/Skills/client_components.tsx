'use client'

import { Fragment, JSX, useMemo, useState } from 'react'
import {
  ExperienceDetails,
  SkillDetails,
  SkillsBox,
  SkillsBoxCategory,
  SkillsBoxCategoryDivider
} from './server_components'
import { Experience_Data_Types, Skill_Data_Types, Skill_Label_Types } from '.';

interface Skills_Main_Body_Props {
  experienceData: Experience_Data_Types;
  skillData: Skill_Data_Types[];
  skillLabels: Skill_Label_Types[][]
}

type tabTypes = 'skills' | 'experience'

export const SkillsMainBody = ({experienceData, skillData, skillLabels}: Skills_Main_Body_Props) => {
  const [tapType, setTapType] = useState<tabTypes>('skills');

  const memoizedSkillBoxes  = useMemo<JSX.Element[]>(() => (
    skillLabels.map((subSkills, index) => (
      <Fragment key={index}>
        <SkillsBoxCategory>
          {
            subSkills.map((skill, index2) => (
              <SkillsBox key={index+index2} name={skill} />
            ))
          }
        </SkillsBoxCategory>

        {index != skillLabels.length - 1 && <SkillsBoxCategoryDivider />}
      </Fragment>
    ))
  ), []);

  const memoizedExperienceDetails = useMemo<JSX.Element>(() => (
    <ExperienceDetails data={experienceData} />
  ), [experienceData])

  const memoizedSkillDetails = useMemo<JSX.Element>(() => (
    <SkillDetails data={skillData} />
  ), [skillData])

  return (
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

          <div className={`${tapType === 'experience' ? 'block' : 'hidden'} lg:block space-y-7`}>
            {memoizedExperienceDetails}
          </div>

          <div className={`${tapType === 'skills' ? 'block' : 'hidden'} lg:block`}>
            {memoizedSkillDetails}
          </div>

        </div>

        <div className={`${tapType === 'skills' ? 'block' : 'hidden'} lg:block order-1 lg:order-2 overflow-hidden w-full`}>
          { memoizedSkillBoxes }
        </div>

      </div>
    </div>
  );
}
