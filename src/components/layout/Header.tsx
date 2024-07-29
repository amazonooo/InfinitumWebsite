import { FC } from 'react'
import { FloatingNav } from '../ui/header/FloatingNav'
import { navButtons, navItems } from '../ui/header/navItems'
import Hero from '../ui/hero/Hero'

const Header: FC = () => {
  return (
    <header className='relative'>
      {/* <div className='bg-cover bg-center bg-no-repeat w-full min-h-screen overflow-hidden' style={{
        backgroundImage: 'url(/header.png)'
      }}> */}
      <FloatingNav navButtons={navButtons} navItems={navItems} />
      {/* <Hero /> */}
    </header>
  )
}

export default Header