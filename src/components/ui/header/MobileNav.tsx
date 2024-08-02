import { FC } from 'react'
import MobileNavItems from './MobileNavItems'

const MobileNav: FC = () => {
  return (
    <div className='z-[60] relative'>
      <MobileNavItems />
    </div>
  )
}

export default MobileNav