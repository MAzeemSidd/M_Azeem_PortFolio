import { FC, ReactNode } from "react";

interface SkillsBoxTypes { name: string; }

export const SkillsBox: FC<SkillsBoxTypes> = ({ name }) => {
  return (<div>

      <div className="group inline-block max-w-[200px] bg-gradient-to-r from-light-blue-300 to-blue-50 rounded-md p-[1px] hover:bg-[#020618] hover:from-transparent hover:to-transparent shadow-none transition-all duration-500 ease-out hover:shadow-[rgb(197,255,255)_0px_0px_15px_2px] cursor-default">
        <div className="bg-[#020618] text-white text-sm md:text-base group-hover:text-blue-gray-100 px-2.5 md:px-3 py-1.5 md:py-2 rounded-md whitespace-normal break-words text-center">
          { name }
        </div>
      </div>

  </div>)
}

interface SkillsBoxCategoryTypes { children: ReactNode; }

export const SkillsBoxCategory: FC<SkillsBoxCategoryTypes> = ({ children }) => {
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