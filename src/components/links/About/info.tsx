import Link from "next/link";
import { FC, ReactNode } from "react";

interface durationType { from: string; to: string; }
interface InfoDivType { heading: string; subHeading: string, duration: durationType, description: string; svg: ReactNode, link?: string }
interface InfoSectionType { children: ReactNode; heading: string}

export const InfoDiv: FC<InfoDivType> = ({ heading, subHeading, duration,  description, svg, link }) => (
  <div className='group relative h-auto bg-gradient-to-r from-light-blue-300 to-blue-50 rounded-xl p-[1px] hover:bg-[#020618] hover:from-transparent hover:to-transparent shadow-none transition-all duration-500 ease-out hover:shadow-[rgb(197,255,255)_0px_0px_15px_2px]'>
    <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full min-w-full max-w-[500px] bg-light-blue-300/85 blur-2xl opacity-20 rounded-full' />
    <div className='z-30 bg-[#020618] group-hover:bg-[#171717] rounded-xl px-5 md:px-10 lg:px-20 py-8 sm:py-12 flex flex-col gap-5'>
      <div className='flex flex-col gap-1'>
        <div className='py-1 text-4xl inline-block tracking-[.1rem] text-wrap text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-light-blue-100'>{heading}</div>
        <div className='flex flex-row gap-3 items-baseline'>
          <svg className='w-5 h-5 self-center' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">{svg}</svg>
          <div className='text-xl text-light-blue-100 font-light'>{subHeading}</div>
        </div>
        <div className='text-xs text-blue-50/85 ml-8 tracking-wider'>{`(${duration.from} – ${duration.to})`}</div>
      </div>
      <div className='text-sm pt-2  tracking-wider leading-[1.3rem] text-justify font-light text-white sm:text-white/85 group-hover:text-white'>{description}</div>
      {
        link &&
        <div className='flex justify-end px-5 text-base font-light underline text-light-blue-100 hover:text-light-blue-300'>
          <Link href={link}>{"click for more details >>"}</Link>
        </div>
      }
    </div>
  </div>
)

export const InfoSection: FC<InfoSectionType> = ({ children, heading }) => (
  <div className='w-full max-w-[1440px] mx-auto px-3 md:px-10 lg:px-20 py-7 sm:py-10'>
    <div className='text-md sm:text-lg lg:text-xl tracking-[.1rem] sm:tracking-[.2rem] lg:tracking-[.3rem] text-[#949cab] mb-10'>
      <span className='relative'>
        <span className='z-10'>{heading}</span>
        <div className='absolute z-0 top-0 right-0 h-[6px] w-[30%] bg-light-blue-300 rounded-full blur-md opacity-80' />
        <div className='absolute z-0 top-1/4 right-0 h-[6px] w-[50%] bg-light-blue-300 rounded-full blur-md opacity-80' />
        <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[6px] w-[50%] bg-light-blue-300 rounded-full blur-md opacity-80' />
        <div className='absolute z-0 bottom-1/4 left-0 h-[6px] w-[50%] bg-light-blue-300 rounded-full blur-md opacity-80' />
        <div className='absolute z-0 bottom-0 left-0 h-[6px] w-[30%] bg-light-blue-300 rounded-full blur-md opacity-80' />
        {/* <div className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[6px] w-full bg-blue-gray-300 rounded-full blur-lg' /> */}
      </span>
    </div>
    <div className='flex flex-col justify-center items-center gap-14'>
      {children}
    </div>
  </div>
)