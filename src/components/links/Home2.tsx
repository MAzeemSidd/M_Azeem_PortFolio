import IntroCarousel from "../IntroCarousel"
import Image from 'next/image'
import dp from '../../../public/pictures/my_dp_bg_transparent.png'
import '@/app/globals.css'
import { FC, ReactNode } from "react";

interface Site_Link_Path_Prop { d: string; }
interface Site_Link_Circle_Prop { cx: string; cy: string; r: string; }
// interface Site_Link_Rect_Prop { width: number; height: number; x: number; y: number; rx: number; }
interface Site_Link_Btn_Prop { children: ReactNode; }

const Contact_Btn = () => (
  <button className="group relative font-medium rounded-full p-[2px] transition-all duration-500 ease-in-out bg-gradient-to-r from-light-blue-300 to-blue-50">
    <span className="relative inline-flex items-center gap-2 text-lg rounded-full py-2 px-5 transition-all duration-500 ease-in-out bg-[#030712] group-hover:bg-[length:200%_100%] bg-gradient-to-r from-light-blue-300/0 via-light-blue-300/0 to-light-blue-300/0 group-hover:from-light-blue-300 group-hover:to-light-blue-50">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-blue-200 via-light-blue-200 to-light-blue-50 group-hover:text-[#030712] transition-colors duration-500 ease-in-out">
        Contact
      </span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className="size-5 transition-colors duration-500 ease-in-out"
      >
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#bae6fd" className="transition-[stop-color] duration-500 ease-in-out" />
            <stop offset="100%" stopColor="#bae6fd" className="transition-[stop-color] duration-500 ease-in-out" />
          </linearGradient>
          <linearGradient id="iconGradientHover" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#030712" className="transition-[stop-color] duration-500 ease-in-out" />
            <stop offset="100%" stopColor="#030712" className="transition-[stop-color] duration-500 ease-in-out" />
          </linearGradient>
        </defs>
        <path 
          fill="url(#iconGradient)"
          className="group-hover:fill-[url(#iconGradientHover)] transition-[fill] duration-500 ease-in-out"
          fillRule="evenodd" 
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" 
          clipRule="evenodd" 
        />
      </svg>
    </span>
  </button>
)

const Site_Link_Path = ({ d }: Site_Link_Path_Prop) => (
  <path
    fill="currentColor" fillRule="evenodd" clipRule="evenodd" d={d}
    className="transition-all duration-500 text-blue-50 group-hover:text-[#030712]"
  />
)

const Site_Link_Circle = ({ cx, cy, r }: Site_Link_Circle_Prop) => (
  <circle
    cx={cx} cy={cy} r={r} fill="currentColor"
    className="transition-all duration-500 text-blue-50 group-hover:text-[#030712]"
  />
)

// const Site_Link_Rect = ({ width, height, x, y, rx }: Site_Link_Rect_Prop) => (
//   <circle
//     width={width} height={height} x={x} y={y} rx={rx} fill="currentColor"
//     className="transition-all duration-500 text-blue-50 group-hover:text-[#030712]"
//   />
// )

const Site_Link_Btn = ({ children }: Site_Link_Btn_Prop) => (
  <button className='group rounded-full p-2 ring-1 ring-blue-50 hover:bg-blue-50'>
    <svg
      xmlns="http://www.w3.org/2000/svg" fill="currentColor"
      data-name="Layer 1" viewBox="0 0 24 24"
      className='size-5 transition-colors duration-500 ease-in-out text-blue-50'
    >
      {children}
    </svg>
  </button>
)

const Home2: FC<{}> = () => {
  return (
    <div>
      <div className='grid grid-rows-6 grid-cols-5 gap-2 h-[calc(100vh-80px)]'>

        {/* left column with carousel */}
        <div className='h-full row-span-5 col-span-5 lg:col-span-3 lg:ml-20 lg:mt-7 justify-self-center place-content-center w-[40rem]'>
          
          <div className='grid grid-flow-row gap-2'>

            <div className="mx-7 py-0 my-0 text-3xl font-light">
              {'Hi, This is '}
              <span className="text-transparent bg-clip-text bg-light-blue-100 font-medium">Muhammad Azeem</span>
            </div>
            
            <div className='mt-0 pb-18 relative'>
              <div className='bg-blue-500/20 -z-10 w-[400px] h-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-40' />
              <IntroCarousel />
            </div>
            
            <div className='mx-7 flex items-center gap-7'>

              {/* Contact Button */}
              <Contact_Btn />

              <div className="flex items-center gap-4">
                {/* <Site_Link_Btn>
                  <Site_Link_Path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008" />
                  <Site_Link_Circle cx="16.806" cy="7.207" r="1.078" />
                  <Site_Link_Path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632a6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419a4.6 4.6 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688a3 3 0 0 1-1.712 1.711a5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311a3 3 0 0 1-1.719-1.711a5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311a3 3 0 0 1 1.712 1.712a5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z" />
                </Site_Link_Btn> */}

                <Site_Link_Btn>
                  <Site_Link_Circle cx="4.983" cy="5.009" r="2.188" />
                  <Site_Link_Path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z" />
                </Site_Link_Btn>

                <Site_Link_Btn>
                  <Site_Link_Path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336a9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2" />
                </Site_Link_Btn>

                {/* <Site_Link_Btn>
                  <Site_Link_Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2M4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2l1 1v1.931C7.061 19.436 4 16.072 4 12m14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.95 7.95 0 0 1-1.67 4.873" />
                </Site_Link_Btn> */}

                <Site_Link_Btn>
                  <g fill="currentColor">
                    <Site_Link_Path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <Site_Link_Path d="M20 4a2 2 0 0 1 1.995 1.85L22 6v12a2 2 0 0 1-1.85 1.995L20 20H4a2 2 0 0 1-1.995-1.85L2 18V6a2 2 0 0 1 1.85-1.995L4 4zm0 3.414l-6.94 6.94a1.5 1.5 0 0 1-2.12 0L4 7.414V18h16zM18.586 6H5.414L12 12.586z" />
                  </g>
                </Site_Link_Btn>
              </div>

            </div>

          </div>
        
        </div>
        
        {/* right column with display picture */}
        <div className='h-full row-span-5 col-span-5 lg:col-span-2 lg:mr-20 justify-self-center place-content-center'>

          <div className='relative flex justify-center items-start'>
            <div className='bg-blue-500/20 -z-10 size-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-40' />
            <Image
              src={dp}
              alt="DP of M.Azeem"
              width={280}
              height={280}
              className="rounded-full"
            />
          </div>
        
        </div>

      </div>

    </div>
  )
}

export default Home2