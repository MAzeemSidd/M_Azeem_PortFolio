'use client'; // Add this since we need client-side interactivity

import Link from "next/link"
import NavLink from '@/components/navbar/NavLink'
import { FC, useState, useEffect } from 'react'
import { Logo } from './logo'
import { useDispatch } from "react-redux";
import { setToggle, toggleDrawer } from "@/redux/feature/nav_drawer/toggle_drawer";

export const Navbar: FC<{}> = () => {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/40 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="h-[80px] px-4 sm:px-8 md:px-16 lg:px-32 mx-auto flex items-center justify-center lg:justify-between">

        <div className="w-full max-w-[124px]">
          <Logo />
        </div>
        <div className="hidden lg:flex gap-14 justify-end">
            <NavLink href='/' title='home' />
            <NavLink href='/about' title='about' />
            <NavLink href='/skills' title='skills' />
            {/* <NavLink href='/projects' title='projects' /> */}
            <NavLink href='/contact' title='contact' />
        </div>


        <div className="lg:hidden">
          <div className="absolute top-0 left-5 h-full max-h-[80px] place-content-center">
            <button
              onClick={() => dispatch(setToggle(true))}
              className="ring-[.5px] ring-light-blue-100/50 text-light-blue-100/50 rounded-md p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
