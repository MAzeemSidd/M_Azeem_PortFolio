import { ReactNode } from "react";
import { Experience_Data_Types, Skill_Data_Types } from ".";

interface Experience_Details_Props {
  data: Experience_Data_Types
}

export const ExperienceDetails = ({ data }: Experience_Details_Props) => (
  <>
    <div className='relative z-10 grid grid-flow-row grid-cols-1 gap-3 mt-3 lg:mt-0'>
      <div className='text-3xl text-light-blue-200'>Frontend React Developer</div>

      <div className='text-sm text-justify text-blue-50/85'>{data.intro}</div>
    </div>

    <div className='grid grid-flow-row grid-cols-1 gap-3'>

      <div className='text-xl text-light-blue-100'>Key Contributions & Expertise:</div>

      <ul className='list-disc list-outside ml-3 md:ml-7 lg:mr-9 mt-1 space-y-2 text-justify text-sm text-blue-50/85'>
        {
          data.contributions.map((item: string, index: number) => (
            <li key={data._id+index}>{item}</li>
          ))
        }
      </ul>

    </div>
  </>
)

export const SkillDetails = ({ data }: { data: Skill_Data_Types[] }) => (
  <div className='relative z-10 grid grid-flow-row grid-cols-1 gap-3'>
  
    <div className='text-xl text-light-blue-100'>Technical Expertise:</div>

    <ul className='list-disc list-outside ml-3 mr-2 md:ml-7 lg:mr-9 mt-1 space-y-2 text-justify text-sm text-blue-50/85'>
      {
        data.map((item: Skill_Data_Types) => (
          <NestedList
            key={item._id}
            id={item._id}
            category={item.category}
            subCategory={item.sub_category}
          />
        ))
      }
    </ul>

  </div>
)

interface Sub_Category_Types {
  title: string;
  desc?: string;
}

interface Nested_List_Props {
  id: string;
  category: string;
  subCategory?: Sub_Category_Types[];
}

export const NestedList = ({id, category, subCategory}: Nested_List_Props) => (
  <li className='pb-3 flex flex-col justify-start gap-3'>
    <div>{category}:</div>
    <ul className='list-[square] list-outside ml-3 mr-2 md:ml-7 lg:mr-9 space-y-3 text-sm text-blue-50/75'>
      {subCategory?.map((item: Sub_Category_Types, index: number) => (
        <li key={id+index}>
          <div className='flex flex-col gap-1'>
            {item.title && <span className='font-medium'>{item.title}:</span>}
            <span className='inline-block font-light break-words text-justify'>{item?.desc}</span>
          </div>
        </li>
      ))}
    </ul>
  </li>
);

interface SkillsBoxTypes { name: string; }

export const SkillsBox = ({ name }: SkillsBoxTypes) => {
  return (<div>

      <div className="group inline-block max-w-[200px] bg-gradient-to-r from-light-blue-300 to-blue-50 rounded-md p-[1px] hover:bg-[#020618] hover:from-transparent hover:to-transparent shadow-none transition-all duration-500 ease-out hover:shadow-[rgb(197,255,255)_0px_0px_15px_2px] cursor-default">
        <div className="bg-[#020618] text-white text-sm md:text-base group-hover:text-blue-gray-100 px-2.5 md:px-3 py-1.5 md:py-2 rounded-md whitespace-normal break-words text-center">
          { name }
        </div>
      </div>

  </div>)
}

interface SkillsBoxCategoryTypes { children: ReactNode; }

export const SkillsBoxCategory = ({ children }: SkillsBoxCategoryTypes) => {
  return (
    <div className='flex flex-wrap gap-6 p-5 w-full'>
      { children }
    </div>
  )
}

export const SkillsBoxCategoryDivider = () => (
  <div className='w-[calc(100%-35px)] h-[.5px] rounded-full bg-blue-gray-800/70 mx-auto shadow-[rgb(197,255,255)_0px_0px_60px_3px]'>
    <div className='w-[30%] h-[.5px] rounded-full bg-blue-gray-800/70 mx-auto shadow-[rgb(002,119,189)_0px_0px_50px_4px]' />
  </div>
)