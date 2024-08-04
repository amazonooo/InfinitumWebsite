'use client'

import Link from 'next/link'
import { FC, useState } from 'react'
import { HiHome } from 'react-icons/hi2'
import { FaGamepad } from 'react-icons/fa6'
import { RiMenu3Line } from 'react-icons/ri'
import { IoHelpOutline, IoCloseSharp } from 'react-icons/io5'
import MobileMore from './MobileMore'
import { MdLocalGroceryStore } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'

const MobileNavItems: FC = () => {
	const [open, setOpen] = useState(false)
	const [isClosing, setIsClosing] = useState(false)

	const toggleMorePanel = () => {
		if(open) {
			setIsClosing(true)
			setTimeout(() => {
				setOpen(false)
				setIsClosing(false)
			}, 300)
		} else {
			setOpen(true)
		}
	}

  return (
		<>
			<nav className='fixed bottom-0 left-0 right-0 px-4 sm:px-8 md:px-10 h-20 border-t border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] z-[50]'>
				<ul className='flex justify-between w-full items-center h-full'>
					<li className='flex items-center justify-center flex-col gap-y-1.5 group cursor-pointer'>
						<HiHome className='w-5 h-5 sm:w-6 sm:h-7 md:w-7 md:h-7 group-active:text-[#cbacf9] transition-colors duration-500' />
						<Link href={'/'} className='text-sm sm:text-base'>
							Главная
						</Link>
					</li>
					<li className='flex items-center justify-center flex-col gap-y-1.5 group cursor-pointer'>
						<FaGamepad className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-active:text-[#cbacf9] transition-colors duration-500' />
						<Link href={'/servers'} className='text-sm sm:text-base'>
							Сервера
						</Link>
					</li>
					<li className='flex items-center justify-center flex-col gap-y-1.5 group cursor-pointer'>
						<MdLocalGroceryStore className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-active:text-[#cbacf9] transition-colors duration-500' />
						<Link href={'/'} className='text-sm sm:text-base'>
							Донат
						</Link>
					</li>
					<li className='flex items-center justify-center flex-col gap-y-1.5 group cursor-pointer'>
						<IoHelpOutline className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-active:text-[#cbacf9] transition-colors duration-500' />
						<Link href={'/'} className='text-sm sm:text-base'>
							Помощь
						</Link>
					</li>
					<li
						className='flex items-center justify-center flex-col gap-y-1.5 group cursor-pointer'
						onClick={toggleMorePanel}
					>
						{!open ? (
							<RiMenu3Line className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-active:text-[#cbacf9] transition-colors duration-500' />
						) : (
							<IoMdClose className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-active:text-[#cbacf9] transition-colors duration-500' />
						)}
						<p className='text-sm sm:text-base select-none'>Меню</p>
					</li>
				</ul>
			</nav>
			{open && (
				<div
					className={`fixed inset-0 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}
				>
					<MobileMore />
				</div>
			)}
		</>
	)
}

export default MobileNavItems