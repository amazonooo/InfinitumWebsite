'use client'

import Link from 'next/link'
import { FC, useState } from 'react'
import { HiHome } from 'react-icons/hi2'
import { FaGamepad } from 'react-icons/fa6'
import { RiVipDiamondFill, RiMenu3Line } from 'react-icons/ri'
import { IoHelpOutline } from 'react-icons/io5'
import MobileMore from './MobileMore'

const MobileNavItems: FC = () => {
  const [open, setOpen] = useState(false)

  return (
		<>
			<nav className='px-6 h-20 w-full flex items-center'>
				<ul className='flex w-full h-full justify-between items-center'>
					<li className='flex items-center justify-center flex-col gap-y-1.5 group'>
						<HiHome className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-active:translate-y-2 transition-transform duration-500' />
						<Link href={'/'} className='text-xs sm:text-base'>
							Главная
						</Link>
					</li>
					<li className='flex items-center justify-center flex-col gap-y-1.5 group'>
						<FaGamepad className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-active:translate-y-2 transition-transform duration-500' />
						<Link href={'/'} className='text-xs sm:text-base'>
							Сервера
						</Link>
					</li>
					<li className='flex items-center justify-center flex-col gap-y-1.5 group'>
						<RiVipDiamondFill className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-active:translate-y-2 transition-transform duration-500' />
						<Link href={'/'} className='text-xs sm:text-base'>
							Донат
						</Link>
					</li>
					<li className='flex items-center justify-center flex-col gap-y-1.5 group'>
						<IoHelpOutline className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-active:translate-y-2 transition-transform duration-500' />
						<Link href={'/'} className='text-xs sm:text-base'>
							Помощь
						</Link>
					</li>
					<li className='flex items-center justify-center flex-col gap-y-1.5 group'>
						<RiMenu3Line className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-active:translate-y-2 transition-transform duration-500' />
						<Link onClick={() => setOpen(true)} href={'/'} className='text-xs sm:text-base'>
							Меню
						</Link>
					</li>
				</ul>
			</nav>
			{open && (
				<div className=''>
					<MobileMore />
				</div>
			)}
		</>
	)
}

export default MobileNavItems