'use client'

import Link from 'next/link'
import { FC, useState } from 'react'
import { HiHome } from 'react-icons/hi2'
import { FaGamepad } from 'react-icons/fa6'
import { IoHelpOutline, IoCloseSharp } from 'react-icons/io5'
import MobileMore from './MobileMore'
import { MdLocalGroceryStore } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useAtom } from 'jotai'
import { toggleMenu } from '@/store/menu-store'

const MobileNavItems: FC = () => {
	const [isMenuOpen, setMenuOpen] = useAtom(toggleMenu)
	const [isClosing, setIsClosing] = useState(false)
	
	const toggleMorePanel = () => {
		if (isMenuOpen) {
			setIsClosing(true)
			setTimeout(() => {
				setMenuOpen(false)
				setIsClosing(false)
			}, 300)
		} else {
			setMenuOpen(true)
		}
	}

	const closeMenu = () => {
		setMenuOpen(false)
	}

	const pathname = usePathname()

  return (
		<>
			<nav className='fixed bottom-0 left-0 right-0 px-4 sm:px-8 md:px-10 h-20 border-t border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B] z-[10]'>
				<ul className='flex justify-between w-full items-center h-full'>
					<Link
						href={'/'}
						onClick={closeMenu}
						className={`text-sm sm:text-base flex items-center justify-center flex-col transition-colors duration-500 gap-y-1.5 group cursor-pointer ${
							pathname === '/' ? 'text-[#cbacf9]' : ''
						}`}
					>
						<HiHome className='w-5 h-5 sm:w-6 sm:h-7 md:w-7 md:h-7' />
						<li>Главная</li>
					</Link>
					<Link
						href={'/servers'}
						onClick={closeMenu}
						className={`text-sm sm:text-base flex items-center justify-center flex-col transition-colors duration-500 gap-y-1.5 group cursor-pointer ${
							pathname === '/servers' ? 'text-[#cbacf9]' : ''
						}`}
					>
						<FaGamepad className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' />
						<li>Серверы</li>
					</Link>
					<Link
						href={'/donate'}
						onClick={closeMenu}
						className={`text-sm sm:text-base flex items-center justify-center flex-col transition-colors duration-500 gap-y-1.5 group cursor-pointer ${
							pathname === '/donate' ? 'text-primary-pink' : ''
						}`}
					>
						<MdLocalGroceryStore className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-active:text-[#cbacf9] transition-colors duration-500' />
						<li>Донат</li>
					</Link>
					<Link
						href={'/'}
						onClick={closeMenu}
						className='text-sm sm:text-base flex items-center justify-center flex-col gap-y-1.5 group cursor-pointer'
					>
						<IoHelpOutline className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-active:text-[#cbacf9] transition-colors duration-500' />
						<li>Помощь</li>
					</Link>
					<li
						className='flex items-center justify-center flex-col gap-y-1.5 group cursor-pointer'
						onClick={toggleMorePanel}
					>
						{!isMenuOpen ? (
							<Menu className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-active:text-[#cbacf9] transition-colors duration-500' />
						) : (
							<IoMdClose className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-active:text-[#cbacf9] transition-colors duration-500' />
						)}
						<p className='text-sm sm:text-base select-none'>Меню</p>
					</li>
				</ul>
			</nav>
			{isMenuOpen && (
				<div
					className={`fixed inset-0 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B] ${
						isClosing ? 'animate-slide-down' : 'animate-slide-up'
					}`}
				>
					<MobileMore closeMenu={() => setMenuOpen(false)} />
				</div>
			)}
		</>
	)
}

export default MobileNavItems