'use client'
import React, { useState } from 'react'
import { SidebarSettings, SidebarBody, SidebarLink } from './SidebarSettings'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import { usePathname } from 'next/navigation'

export function SidebarDemo() {
	const [open, setOpen] = useState(false)

	const pathname = usePathname()
	const isNotHeaderOrFooter = pathname !== '/'

	if (isNotHeaderOrFooter) return null

	const links = [
		{
			label: 'Killbichs',
			count: '624',
			href: '#',
			icon: (
				<Image
					src={'/server-1.svg'}
					alt='server-1'
					width={52}
					height={52}
					className={`text-neutral-700 dark:text-neutral-200 flex-shrink-0`}
				/>
			),
		},
		{
			label: 'Boomboobs',
			count: '112',
			href: '#',
			icon: (
				<Image
					src={'/server-2.svg'}
					alt='server-2'
					width={52}
					height={52}
					className={`text-neutral-700 dark:text-neutral-200 flex-shrink-0`}
				/>
			),
		},
		{
			label: 'Killbichs',
			count: '312',
			href: '#',
			icon: (
				<Image
					src={'/server-1.svg'}
					alt='server-1'
					width={52}
					height={52}
					className={`text-neutral-700 dark:text-neutral-200 flex-shrink-0`}
				/>
			),
		},
		{
			label: 'Boomboobs',
			count: '152',
			href: '#',
			icon: (
				<Image
					src={'/server-2.svg'}
					alt='server-2'
					width={52}
					height={52}
					className={`text-neutral-700 dark:text-neutral-200 flex-shrink-0`}
				/>
			),
		},
	]
	return (
		<div
			className={cn(
				'rounded-lg flex fixed lg:top-1/4 bottom-[80.3px] right-5 sm:right-[2.295rem] z-[500] lg:right-0 flex-col md:flex-row bg-neutral-900 flex-1 border border-[#cbacf9]/20 overflow-hidden w-fit h-fit'
			)}
		>
			<SidebarSettings open={open} setOpen={setOpen}>
				<SidebarBody className='justify-between'>
					<div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
						{open ? <Logo /> : <LogoIcon />}
						<div className='mt-8 flex flex-col gap-2'>
							{links.map((link) => (
								<SidebarLink key={link.href} link={link} />
							))}
						</div>
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
			<div className='h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0' />
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className='font-medium text-white'
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