'use client'
import React, { useState } from 'react'
import { SidebarSettings, SidebarBody, SidebarLink } from './SidebarSettings'
import {
	IconArrowLeft,
	IconBrandTabler,
	IconSettings,
	IconUserBolt,
} from '@tabler/icons-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/utils/cn'

export function SidebarDemo() {
	const links = [
		{
			label: 'Dashboard',
      count: '758',
			href: '#',
			icon: (
				<Image src={'/server-1.svg'} alt='server-1' width={32} height={32} className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
			),
		},
		{
			label: 'Profile',
      count: '112',
			href: '#',
			icon: (
				<Image src={'/server-2.svg'} alt='server-2' width={32} height={32} className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
			),
		},
		{
			label: 'Settings',
      count: '312',
			href: '#',
			icon: (
				<Image src={'/server-1.svg'} alt='server-1' width={32} height={32} className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
			),
		},
		{
			label: 'Logout',
      count: '94',
			href: '#',
			icon: (
				<Image src={'/server-2.svg'} alt='server-2' width={32} height={32} className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
			),
		},
	]
	const [open, setOpen] = useState(false)
	return (
		<div
			className={cn(
				'rounded-md flex absolute z-[50] right-0 top-[825px] flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-fit flex-1 border border-neutral-200 dark:border-neutral-700 overflow-hidden',
				'h-fit' // for your use case, use `h-screen` instead of `h-[60vh]`
			)}
		>
			<SidebarSettings open={open} setOpen={setOpen}>
				<SidebarBody className='justify-between gap-10'>
					<div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
						{open ? <Logo /> : <LogoIcon />}
						<div className='mt-8 flex flex-col gap-2'>
							{links.map((link, idx) => (
								<SidebarLink key={idx} link={link} />
							))}
						</div>
					</div>
					<div>
						{/* <SidebarLink
							link={{
								label: 'Manu Arora',
								href: '#',
								icon: (
									<Image
										src='/user.svg'
										className='h-7 w-7 flex-shrink-0 rounded-full'
										width={50}
										height={50}
										alt='Avatar'
									/>
								),
							}}
						/> */}
					</div>
				</SidebarBody>
			</SidebarSettings>
		</div>
	)
}
export const Logo = () => {
	return (
		<Link
			href='#'
			className='font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20'
		>
			<div className='h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0' />
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className='font-medium text-black dark:text-white whitespace-pre'
			>
				Текущий онлайн
			</motion.span>
		</Link>
	)
}
export const LogoIcon = () => {
	return (
		<Link
			href='#'
			className='font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20'
		>
			<div className='h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0' />
		</Link>
	)
}

// Dummy dashboard component with content
