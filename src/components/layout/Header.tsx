'use client'

import React, { useEffect, useRef, useState } from 'react'
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
import { usePathname, useRouter } from 'next/navigation'
import { CircleUserRound, LogOut, User } from 'lucide-react'

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

	if (isLoggedLogin) return null
	if (isLoggedRegister) return null



	const { scrollYProgress } = useScroll()

	// set true for the initial state so that nav bar is visible in the hero section
	const [visible, setVisible] = useState(true)
	const [show, setShow] = useState(false)

	useMotionValueEvent(scrollYProgress, 'change', current => {
		// Check if current is not undefined and is a number
		if (typeof current === 'number') {
			let direction = current! - scrollYProgress.getPrevious()!

			if (scrollYProgress.get() < 0.05) {
				// also set true for the initial state
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

	const [dropdownOpen, setDropdownOpen] = useState(false)
	
	const dropdownRef = useRef<HTMLDivElement>(null)
	const buttonRef = useRef<HTMLDivElement>(null)

	const handleClickOutside = (event: any) => {
		if(
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target) &&
			buttonRef.current &&
			!buttonRef.current.contains(event.target)
		) {
			setDropdownOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

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
							opacity: visible ? 1 : 0,
						}}
						transition={{
							duration: 0.2,
						}}
						className={cn(
							'max-w-fit md:min-w-[40vw] lg:min-w-[70vw] 2xl:min-w-[81vw] mx-auto fixed z-[5000] top-6 inset-x-0 xl:px-10 lg:px-5 py-4 rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]',
							className
						)}
						style={{
							backdropFilter: 'blur(16px) saturate(180%)',
							backgroundColor: 'rgba(26, 26, 30, 1.6)',
							borderRadius: '12px',
							border: '1px solid rgba(255, 255, 255, 0.125)',
						}}
					>
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
											'relative dark:text-neutral-50 font-semibold cursor-pointer items-center  flex space-x-1 transition-colors duration-300 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700'
										)}
									>
										<span className='block sm:hidden'>{navItem.icon}</span>
										{/* add !cursor-pointer */}
										{/* remove hidden sm:block for the mobile responsive */}
										<span className='xl:text-base font-medium lg:text-sm !cursor-pointer'>
											{navItem.name}
										</span>
									</Link>
								))}
								<div
									className='xl:text-base lg:text-sm font-medium relative items-center  flex transition-colors duration-300 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700'
									onMouseEnter={() => setShow(true)}
									onMouseLeave={() => setShow(false)}
								>
									<Link className='z-[10]' href={'/'}>
										Дополнительно
									</Link>
									{show && (
										<div className='w-[250px] absolute left-0 top-0'>
											<More />
										</div>
									)}
								</div>
							</li>
							<li className='flex justify-between items-center lg:gap-x-4 xl:gap-x-6'>
								<Link
									className={cn(
										'relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700'
									)}
									href={'/'}
								>
									<Image
										src={'/discord.png'}
										alt='logo'
										width={22}
										height={22}
									/>
								</Link>
								<div
									ref={buttonRef}
									onClick={() => setDropdownOpen(!dropdownOpen)}
									className={cn('relative items-center flex')}
								>
									<User
										className={`cursor-pointer ${
											dropdownOpen ? 'text-[#cbacf9]' : 'text-neutral-50'
										}`}
									/>
									<div
										ref={dropdownRef}
										className={`absolute right-0 top-[3.22rem] border border-[#cbacf9]/50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] flex flex-col justify-between rounded-lg text-base w-52 opacity-0 transition-opacity duration-300 ${
											dropdownOpen ? 'opacity-100' : ''
										}`}
									>
										<div className='p-4 flex flex-col gap-y-4'>
											<Link
												href={'/register'}
												className='relative inline-flex transition-opacity border-none outline-none bg-transparent p-0 cursor-pointer whitespace-nowrap group items-center'
											>
												{/* <CircleUser
													size={15}
													className='absolute opacity-0 transition-all duration-300 group-hover:opacity-100'
												/> */}
												<span className='relative transition-all duration-300 after:content-[""] after:absolute after:top-[105%] after:h-[1.5px] after:left-0 after:w-0 after:transition-all after:duration-300 after:bg-white group-hover:opacity-100 visible group-hover:after:w-[100%]'>
													Личный кабинет
												</span>
											</Link>
											<Link
												href={'/profile'}
												className='relative inline-flex transition-opacity border-none outline-none bg-transparent p-0 cursor-pointer whitespace-nowrap group items-center'
											>
												<CircleUserRound
													size={15}
													className='absolute opacity-0 transition-all duration-300 group-hover:opacity-100'
												/>
												<span className='relative transition-all duration-300 after:content-[""] after:absolute after:top-[105%] after:h-[1.5px] after:left-0 after:w-0 after:transition-all after:duration-300 after:bg-white group-hover:opacity-100 visible group-hover:after:w-[100%] group-hover:ml-5'>
													Профиль
												</span>
											</Link>
											<Link
												href={'/'}
												className='relative inline-flex transition-opacity border-none outline-none bg-transparent p-0 cursor-pointer whitespace-nowrap group items-center'
											>
												<LogOut
													size={15}
													className='absolute opacity-0 transition-all duration-300 group-hover:opacity-100'
												/>
												<span className='relative transition-all duration-300 after:content-[""] after:absolute after:top-[105%] after:h-[1.5px] after:left-0 after:w-0 after:transition-all after:duration-300 after:bg-white group-hover:opacity-100 visible group-hover:after:w-[100%] group-hover:ml-5'>
													Выйти
												</span>
											</Link>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</motion.div>
				</AnimatePresence>
			)}
			{isMobile && <MobileNav />}
		</header>
	)
}
