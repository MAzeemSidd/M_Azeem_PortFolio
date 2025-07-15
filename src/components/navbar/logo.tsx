import { FC } from "react";
import Link from 'next/link'

export const Logo: FC<{}> = () => (
    <Link href='/'>
        <div className="relative z-0 gap-0 h-[47px]">
            <div className="absolute z-10 top-0 w-full text-center text-2xl font-semibold uppercase tracking-widest text-transparent bg-clip-text bg-light-blue-100">
                M.Azeem
            </div>
            <div className="absolute z-10 bottom-0 w-full text-center text-sm font-normal capitalize tracking-[8px] px-[1px] text-transparent bg-clip-text bg-light-blue-200"> 
                Portfolio
                {/*** removing letter-spacing (tracking-[6.5px]) from the last letter ***/}
                {/* <span className="-mr-[6.5px]">o</span> */}
            </div>
        </div>
    </Link>
)