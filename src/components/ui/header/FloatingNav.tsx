'use client'

import React, { useState } from 'react'
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import More from './More'
import ToggleSwitcher from '../toggle-switcher/ToggleSwitcher'

export const FloatingNav = ({
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
	const { scrollYProgress } = useScroll()

	// set true for the initial state so that nav bar is visible in the hero section
	const [visible, setVisible] = useState(true)
	const [show, setShow] = useState(false)

	useMotionValueEvent(scrollYProgress, 'change', current => {
		// Check if current is not undefined and is a number
		if (typeof current === 'number') {
			let direction = current! - scrollYProgress.getPrevious()!

			if (scrollYProgress.get() < 0.2) {
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

	return (
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
					// change rounded-full to rounded-lg
					// remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
					// change  pr-2 pl-8 py-2 to px-10 py-5
					'max-w-fit md:min-w-[70vw] lg:min-w-[81vw] mx-auto fixed z-[5000] top-10 inset-x-0 px-10 py-4 rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]',
					className
				)}
				style={{
					backdropFilter: 'blur(16px) saturate(180%)',
					backgroundColor: 'rgba(17, 25, 40, 0.75)',
					borderRadius: '12px',
					border: '1px solid rgba(255, 255, 255, 0.125)',
				}}
			>
				<ul className='flex justify-between'>
					<div className='text-2xl font-bold Welcome-text'>Infinitum</div>
					<li className='flex justify-between gap-x-6 text-xl font-semibold'>
						{navItems.map((navItem: any, idx: number) => (
							<Link
								key={`link=${idx}`}
								href={navItem.link}
								className={cn(
									'relative dark:text-neutral-50 text-xl font-semibold cursor-pointer items-center  flex space-x-1 transition-colors duration-300 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700'
								)}
							>
								<span className='block sm:hidden'>{navItem.icon}</span>
								{/* add !cursor-pointer */}
								{/* remove hidden sm:block for the mobile responsive */}
								<span className='text-sm !cursor-pointer'>{navItem.name}</span>
							</Link>
						))}
						<div
							className='text-[14px] relative items-center  flex font-semibold transition-colors duration-300 dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700'
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
					<li className='flex justify-between items-center gap-x-6'>
						<ToggleSwitcher />
						<Link
							className={cn(
								'relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-700'
							)}
							href={'/'}
						>
							<Image src={'/user.svg'} alt='logo' width={20} height={20} />
						</Link>
					</li>
				</ul>
				{/* remove this login btn */}
				{/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
			</motion.div>
		</AnimatePresence>
	)
}
