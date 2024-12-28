'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import More from '../ui/header/More'
import MobileNav from '../ui/header/MobileNav'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import Dropdown from '../ui/dropdown/Dropdown'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { PROJECT_NAME } from '@/constants/api.constants'

export const Header = ({
	navItems,
	className,
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

	if (typeof window === 'undefined') return null

	const isRecoveryPage = pathname === '/reset-password'
	const isLoggedLogin = pathname === '/login'
	const isLoggedRegister = pathname === '/register'

	// const isNotFound =
	// 	pathname !== '/' &&
	// 	pathname !== '/account' &&
	// 	pathname !== '/news' &&
	// 	pathname !== '/profile' &&
	// 	pathname !== '/register' &&
	// 	pathname !== '/rules' &&
	// 	pathname !== '/servers' &&
	// 	pathname !== '/donate' &&
	// 	pathname !== '/download' &&
	// 	pathname !== '/profile/general' &&
	// 	pathname !== '/profile/history' &&
	// 	pathname !== '/profile/pay' &&
	// 	pathname !== '/profile/possibilities' &&
	// 	pathname !== '/profile/privilege' &&
	// 	pathname !== '/profile/statistics' &&
	// 	pathname !== '/rules/communication' &&
	// 	pathname !== '/rules/construction' &&
	// 	pathname !== '/rules/gameproc' &&
	// 	pathname !== '/rules/general' &&
	// 	pathname !== '/rules/serverrul' &&
	// 	pathname !== '/servers/server-info'

	const isNotFound = pathname === '/not-found'
	// TODO: убрать или поставить все, кроме not found
	if (isLoggedLogin) return null
	if (isLoggedRegister) return null
	if (isNotFound) return null
	if (isRecoveryPage) return null

	const scrollDirection = useScrollDirection()
	const [isVisible, setIsVisible] = useState(true)
	const [show, setShow] = useState(false)

	useEffect(() => {
		if (scrollDirection === 'up') {
			setIsVisible(true)
		} else if (scrollDirection === 'down') {
			setIsVisible(false)
		}
	}, [scrollDirection])

	const [isDesktop, setIsDesktop] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		setIsDesktop(window.innerWidth > 950)
		setIsMobile(window.innerWidth <= 950)
	}, [])

	return (
		<>
			{isDesktop && (
				<header
					className={cn(
						`max-w-fit md:min-w-[40vw] lg:min-w-[62vw] 2xl:min-w-[67vw] mx-auto fixed z-50 top-5 inset-x-0 p-[1px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[linear-gradient(130deg,#b2d8f1,#e7b4f6)] rounded-full transition-transform duration-300 ${
							isVisible ? '-translate-y-0' : '-translate-y-24'
						}`,
						className
					)}
				>
					<nav className='xl:px-10 lg:px-5 py-4 bg-main-black rounded-full'>
						<ul className='flex justify-between items-center'>
							<li className='text-2xl font-bold Welcome-text relative'>
								<Link href={'/'}>{PROJECT_NAME}</Link>
								{/* <TbChristmasBall className='absolute -right-3 top-6' /> */}
							</li>
							<ul className='flex justify-between lg:gap-x-4 xl:gap-x-6 font-semibold'>
								{navItems.map((navItem: any, idx: number) => (
									<Link
										key={`link=${idx}`}
										href={navItem.link}
										className={cn(
											'relative text-neutral-50 font-semibold cursor-pointer items-center  flex space-x-1 transition-colors duration-300'
										)}
									>
										<span className='block sm:hidden'>{navItem.icon}</span>
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
									<div className='z-[10] group-hover:text-primary-pink transition-colors duration-300 flex items-center gap-x-1.5 cursor-pointer select-none'>
										Дополнительно
										<ChevronDown
											className={`${
												show ? 'rotate-180' : ''
											} transition-transform duration-300`}
											size={15}
										/>
									</div>
									{show && (
										<div className='w-[250px] absolute left-0 top-0'>
											<More />
										</div>
									)}
								</div>
							</ul>
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
										width={23}
										height={23}
									/>
								</Link>
								<Dropdown />
							</li>
						</ul>
					</nav>
				</header>
			)}
			{isMobile && <MobileNav />}
		</>
	)
}
