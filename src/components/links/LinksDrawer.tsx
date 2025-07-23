import { FC } from 'react'

const LinksDrawer: FC<{}> = () => {
  return (
    <div className="w-[200px] h-[100vh] block lg:hidden absolute top-0 right-0 z-20 bg-slate-800/60">
      Drawer
    </div>
  )
}

export default LinksDrawer