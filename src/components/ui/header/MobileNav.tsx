import { FC } from 'react'
import MobileNavItems from './MobileNavItems'

const MobileNav: FC = () => {
  return (
    <header className='z-[60] relative'>
      <MobileNavItems />
    </header>
  )
}

export default MobileNav