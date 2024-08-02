import { FC } from 'react'
import MobileNavItems from './MobileNavItems'

const MobileNav: FC = () => {
  return (
    <div className='h-20 w-full fixed bottom-0 left-0 z-[500] border-t border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'>
      <MobileNavItems />
    </div>
  )
}

export default MobileNav