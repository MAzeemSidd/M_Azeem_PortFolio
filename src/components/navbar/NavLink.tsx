'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: FC<NavLinkProps> = ({ href, title }) => {
    const pathname = usePathname()
    const isActive = pathname === href

  return (
    <div className="relative group">
        <div className={`bg-light-blue-50 -z-10 transition-all duration-200 h-0 w-0 group-hover:h-[10px] group-hover:w-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg opacity-40`} />
        <div className={`z-0 transition-all duration-300 ${isActive ? 'h-[.2rem] w-[.5rem]' : 'size-0'} rounded-full bg-blue-300 absolute top-6 left-1/2 -translate-x-1/2`} />
        <Link href={href} className={`${isActive ? 'text-light-blue-100' : 'text-blue-50'} capitalize`}>{title}</Link>
    </div>
  )
}

export default NavLink