'use client'

import { FC, ReactNode } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { NavDrawer } from '@/components/navbar/nav_drawer'
import { Navbar } from '@/components/navbar/Navbar'
import { setToggle, toggleDrawer } from '@/redux/feature/nav_drawer/toggle_drawer'

interface MainBodyType { children: ReactNode }

export const MainBody: FC<MainBodyType> = ({ children }) => {
  const drawer = useSelector((state: RootState) => state.drawer.value);
  const dispatch = useDispatch();

  console.log(drawer)

  return (
    <>
      {
        drawer === true ? <NavDrawer /> : <Navbar />
      }
      <div
        onClick={() => drawer === true && dispatch(setToggle(false))}
        className="flex-1 pt-[80px]"
      >
        {children}
      </div>
      {/* <Footer /> */}
    </>
  )
}