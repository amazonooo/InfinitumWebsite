'use client'

import React, { useEffect, useState } from 'react'
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import More from '../ui/header/More'
import { useMediaQuery } from 'react-responsive'
import MobileNav from '../ui/header/MobileNav'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import Dropdown from '../ui/dropdown/Dropdown'
import { truncate } from 'fs'

export const Header = ({
	navItems,
	className,
	navButtons,
}: {
	navItems: {
		name: string
		link: string
		icon?: JSX.Element
	}[]
	navButtons: {
		src: string
		icon?: JSX.Element
	}[]
	className?: string
}) => {
	const pathname = usePathname()

	const isLoggedLogin = pathname === '/login'
	const isLoggedRegister = pathname === '/register'

	const isNotFound =
		pathname !== '/' &&
		pathname !== '/account' &&
		pathname !== '/news' &&
		pathname !== '/profile' &&
		pathname !== '/register' &&
		pathname !== '/rules' &&
		pathname !== '/servers' &&
		pathname !== '/donate' &&
		pathname !== '/play' &&
		pathname !== '/profile/general' &&
		pathname !== '/profile/history' &&
		pathname !== '/profile/pay' &&
		pathname !== '/profile/possibilities' &&
		pathname !== '/profile/privilege' &&
		pathname !== '/profile/statistics' &&
		pathname !== '/rules/communication' &&
		pathname !== '/rules/construction' &&
		pathname !== '/rules/gameproc' &&
		pathname !== '/rules/general' &&
		pathname !== '/rules/serverrul' &&
		pathname !== '/servers/server-info'

	if (isNotFound) return null
	if (isLoggedLogin) return null
	if (isLoggedRegister) return null

	const { scrollYProgress } = useScroll()

	const [visible, setVisible] = useState(true)
	const [show, setShow] = useState(false)

	useEffect(() => {
		setVisible(true)
	}, [pathname])

	useMotionValueEvent(scrollYProgress, 'change', current => {
		if (typeof current === 'number') {
			let direction = current! - scrollYProgress.getPrevious()!

			if (scrollYProgress.get() < 0.1) {
				setVisible(true)
			} else {
				if (direction < 0) {
					setVisible(true)
				} else {
					setVisible(false)
				}
			}
		}
	})

	const isDesktop = useMediaQuery({ minWidth: 951 })
	const isMobile = useMediaQuery({ maxWidth: 950 })


	return (
		<header>
			{isDesktop && (
				<AnimatePresence mode='wait'>
					<motion.div
						initial={{
							opacity: 1,
							y: -100,
						}}
						animate={{
							y: visible ? 0 : -100,
						}}
						transition={{
							duration: 0.2,
						}}
						className={cn(
							'max-w-fit md:min-w-[40vw] lg:min-w-[70vw] 2xl:min-w-[81vw] mx-auto fixed z-[15] top-6 inset-x-0 p-[1px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[linear-gradient(130deg,#b2d8f1,#e7b4f6)] rounded-lg',
							className
						)}
					>
						<div className='xl:px-10 lg:px-5 py-4 bg-main-black rounded-lg'>
							<ul className='flex justify-between'>
								<div className='text-2xl font-bold Welcome-text'>
									<Link href={'/'}>Infinitum</Link>
								</div>
								<li className='flex justify-between lg:gap-x-4 xl:gap-x-6 font-semibold'>
									{navItems.map((navItem: any, idx: number) => (
										<Link
											key={`link=${idx}`}
											href={navItem.link}
											className={cn(
												'relative text-neutral-50 font-semibold cursor-pointer items-center  flex space-x-1 transition-colors duration-300'
											)}
										>
											<span className='block sm:hidden'>{navItem.icon}</span>
											{/* add !cursor-pointer */}
											{/* remove hidden sm:block for the mobile responsive */}
											<span
												className={`xl:text-base lg:text-sm !cursor-pointer hover:text-primary-pink transition-colors duration-300 ${
													pathname === navItem.link
														? 'Welcome-text font-extrabold'
														: 'text-neutral-50 font-medium'
												}`}
											>
												{navItem.name}
											</span>
										</Link>
									))}
									<div
										className='xl:text-base lg:text-sm font-medium relative items-center  flex group transition-colors duration-300 text-neutral-50'
										onMouseEnter={() => setShow(true)}
										onMouseLeave={() => setShow(false)}
									>
										<Link
											className='z-[10] group-hover:text-primary-pink transition-colors duration-300 flex items-center gap-x-1.5'
											href={'/'}
										>
											Дополнительно
											<ChevronDown
												className={`${
													show ? 'rotate-180' : ''
												} transition-transform duration-300`}
												size={15}
											/>
										</Link>
										{show && (
											<div className='w-[250px] absolute left-0 top-0'>
												<More />
											</div>
										)}
									</div>
								</li>
								<div className='flex justify-between items-center lg:gap-x-4 xl:gap-x-6'>
									<Link
										className={cn(
											'relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700'
										)}
										href={'/'}
									>
										<Image
											src={'/discord.png'}
											alt='logo'
											width={23}
											height={23}
										/>
									</Link>
									<Dropdown />
								</div>
							</ul>
						</div>
					</motion.div>
				</AnimatePresence>
			)}
			{isMobile && <MobileNav />}
		</header>
	)
}
