import { FC } from "react";
import Image from 'next/image'
import dp from '../../../../public/pictures/my_dp_bg_transparent.png'

export const DisplayPicture: FC<{}> = () => (
  <div className='relative flex justify-center items-start'>
    <div className='bg-blue-500/20 -z-10 size-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-40' />
    <Image
        src={dp}
        alt="Muhammad Azeem's display picture"
        className="rounded-full size-48 sm:size-52 lg:size-64 place-self-center"
    />
  </div>
)