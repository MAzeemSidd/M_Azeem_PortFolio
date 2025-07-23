'use client'

import { FC, ReactNode } from "react";

interface Site_Link_Btn_Prop { children: ReactNode; href: string; }

export const Site_Link_Btn: FC<Site_Link_Btn_Prop> = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => {
      e.preventDefault();
      window.open(href, '_blank');
    }}
    className='group rounded-full p-2 ring-1 ring-blue-50 hover:bg-blue-50'
  >
    <svg
      xmlns="http://www.w3.org/2000/svg" fill="currentColor"
      data-name="Layer 1" viewBox="0 0 24 24"
      className='size-5 transition-colors duration-500 ease-in-out text-blue-50'
    >
      {children}
    </svg>
  </a>
)