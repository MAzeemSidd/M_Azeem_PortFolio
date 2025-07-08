import { ReactNode } from "react";

interface Site_Link_Path_Prop { d: string; }
interface Site_Link_Circle_Prop { cx: string; cy: string; r: string; }
// interface Site_Link_Rect_Prop { width: number; height: number; x: number; y: number; rx: number; }
interface Site_Link_Btn_Prop { children: ReactNode; }

export const Contact_Btn = () => (
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

export const Site_Link_Path = ({ d }: Site_Link_Path_Prop) => (
  <path
    fill="currentColor" fillRule="evenodd" clipRule="evenodd" d={d}
    className="transition-all duration-500 text-blue-50 group-hover:text-[#030712]"
  />
)

export const Site_Link_Circle = ({ cx, cy, r }: Site_Link_Circle_Prop) => (
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

export const Site_Link_Btn = ({ children }: Site_Link_Btn_Prop) => (
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