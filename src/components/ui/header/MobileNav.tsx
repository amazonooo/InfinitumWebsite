'use client'

import { FC } from 'react'
import MobileNavItems from './MobileNavItems'

const MobileNav: FC = () => {
  return (
    <header className='z-[600] relative'>
      <MobileNavItems />
    </header>
  )
}

export default MobileNav