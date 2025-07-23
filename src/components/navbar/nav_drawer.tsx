'use client'

import { FC } from "react";
import Link from 'next/link'
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Logo } from "./logo";
import { NavLinkSVG } from "./nav_link_svgs";
import { setToggle } from "@/redux/feature/nav_drawer/toggle_drawer";

type NavDrawerLinkTitle = 'home' | 'about' | 'skills' | 'project' | 'contact';

interface NavDrawerLinkType { title: NavDrawerLinkTitle, href: string }

const NavDrawerLink: FC<NavDrawerLinkType> = ({ title, href } ) => {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()

        // Close drawer
        dispatch(setToggle(false))

        // If not already on the same path, navigate
        if (pathname !== href) {
            router.push(href)
        }
    }

    return (
        <Link
            href={href}
            onClick={handleClick}
            className="flex flex-row items-center gap-4"
        >
            <NavLinkSVG type={title} />
            <span className="text-lg capitalize">{title}</span>
        </Link>
    )
}

export function NavDrawer () {
    const dispatch = useDispatch();

    return (
        <div className="lg:hidden">
            <div className="fixed z-[100] top-0 left-0 bg-black/50 backdrop-blur-sm w-44 sm:w-48 h-full">
                <div className="absolute -top-5 right-0 h-full max-h-[80px] place-content-center text-light-blue-100/50">
                    <button
                        onClick={() => dispatch(setToggle(false))}
                        className="bg-black/50 text-light-blue-100/50 rounded-md p-1 m-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="grid grid-cols-1 place-content-start gap-14 py-12">
                    <div>
                        <Logo />
                    </div>
                    <div className="grid grid-rows-[min-content_auto] place-content-center gap-5">
                        <NavDrawerLink title='home' href="/" />
                        <NavDrawerLink title='about' href="/about" />
                        <NavDrawerLink title='skills' href="/skills" />
                        {/* <NavDrawerLink title="projects" href="/projects" /> */}
                        <NavDrawerLink title='contact' href="/contact" />
                    </div>
                </div>
            </div>
        </div>
    )
}