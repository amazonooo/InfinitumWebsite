'use client'
import { cn } from '@/utils/cn'
import Link, { LinkProps } from 'next/link'
import React, { useState, createContext, useContext } from 'react'
import { AnimatePresence, motion, m } from 'framer-motion'
import { IconX } from '@tabler/icons-react'
import { PanelTopClose } from 'lucide-react'

interface Links {
	label: string
  count: string
	href: string
	icon: React.JSX.Element | React.ReactNode
}

interface SidebarContextProps {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	animate: boolean
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)

export const useSidebar = () => {
	const context = useContext(SidebarContext)
	if (!context) {
		throw new Error('useSidebar must be used within a SidebarProvider')
	}
	return context
}

export const SidebarProvider = ({
	children,
	open: openProp,
	setOpen: setOpenProp,
	animate = true,
}: {
	children: React.ReactNode
	open?: boolean
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>
	animate?: boolean
}) => {
	const [openState, setOpenState] = useState(false)

	const open = openProp !== undefined ? openProp : openState
	const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState

	return (
		<SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
			{children}
		</SidebarContext.Provider>
	)
}

export const SidebarSettings = ({
	children,
	open,
	setOpen,
	animate,
}: {
	children: React.ReactNode
	open?: boolean
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>
	animate?: boolean
}) => {
	return (
		<SidebarProvider open={open} setOpen={setOpen} animate={animate}>
			{children}
		</SidebarProvider>
	)
}

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
	return (
		<>
			<DesktopSidebar {...props} />
			<MobileSidebar {...(props as React.ComponentProps<'div'>)} />
		</>
	)
}

export const DesktopSidebar = ({
	className,
	children,
	...props
}: React.ComponentProps<typeof motion.div>) => {
	const { open, setOpen, animate } = useSidebar()
	return (
		<>
			<motion.div
				className={cn(
					'h-full px-4 py-4 hidden  lg:flex lg:flex-col w-[300px] flex-shrink-0',
					className
				)}
				animate={{
					width: animate ? (open ? '300px' : '60px') : '300px',
				}}
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
				{...props}
			>
				{children}
			</motion.div>
		</>
	)
}

export const MobileSidebar = ({
	className,
	children,
	...props
}: React.ComponentProps<'div'>) => {
	const { open, setOpen } = useSidebar()
	return (
		<>
			<div
				className={cn(
					'h-10 px-1.5 py-1.5 sm:px-2 sm:py-2 md:px-2.5 md:py-2.5 flex flex-row md:hidden  items-center justify-between bg-neutral-900 w-full'
				)}
				{...props}
			>
				<div className='flex justify-end z-20 w-full'>
					<PanelTopClose
						size={20}
						className='text-neutral-200'
						onClick={() => setOpen(!open)}
					/>
				</div>
				<AnimatePresence>
					{open && (
						<m.div
							initial={{ y: '100%' }}
							animate={{ y: 0 }}
							exit={{ y: '100%' }}
							transition={{ type: 'spring', stiffness: 150, damping: 18 }}
							className={cn(
								'fixed h-full w-full inset-0 bg-[#09090B] p-8 z-[1000] flex flex-col justify-between',
								className
							)}
						>
							<div
								className='absolute right-8 top-8 z-50'
								onClick={() => setOpen(!open)}
							>
								<IconX />
							</div>
							{children}
						</m.div>
					)}
				</AnimatePresence>
			</div>
		</>
	)
}

export const SidebarLink = ({
	link,
	className,
	...props
}: {
	link: Links
	className?: string
	props?: LinkProps
}) => {
	const { open, animate } = useSidebar()
	return (
		<Link
			href={link.href}
			className={cn(
				'flex items-center justify-between gap-2  group/sidebar py-7',
				className
			)}
			{...props}
		>
			<div className='flex items-center justify-between w-full'>
				<div className='flex items-center gap-x-2'>
					{link.icon}

					<motion.span
						animate={{
							display: animate
								? open
									? 'inline-block'
									: 'none'
								: 'inline-block',
							opacity: animate ? (open ? 1 : 0) : 1,
						}}
						className='text-neutral-200 text-base group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0'
					>
						{link.label}
					</motion.span>
				</div>
				<motion.span
					animate={{
						display: animate
							? open
								? 'inline-block'
								: 'none'
							: 'inline-block',
						opacity: animate ? (open ? 1 : 0) : 1,
					}}
					className='bg-[#8159ff] rounded-md flex items-center p-1 justify-center w-[40px]'
				>
					<div className='flex items-center justify-center'>{link.count}</div>
				</motion.span>
			</div>
		</Link>
	)
}
