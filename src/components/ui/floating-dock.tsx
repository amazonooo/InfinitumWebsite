/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from '@/lib/utils'
import { IconLayoutNavbarCollapse } from '@tabler/icons-react'
import {
	AnimatePresence,
	MotionValue,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'

export const FloatingDock = ({
	items,
	desktopClassName,
	mobileClassName,
}: {
	items: { title: string; icon: React.ReactNode; href: string }[]
	desktopClassName?: string
	mobileClassName?: string
}) => {
	return (
		<>
			<FloatingDockDesktop items={items} className={desktopClassName} />
			<FloatingDockMobile items={items} className={mobileClassName} />
		</>
	)
}

const FloatingDockMobile = ({
	items,
	className,
}: {
	items: { title: string; icon: React.ReactNode;}[]
	className?: string
}) => {
	const [open, setOpen] = useState(false)
	return (
		<div className={cn('block md:hidden', className)}>
			<div
			className='flex gap-x-8'
			>
				{items.map((item) => (
					<div
						key={item.title}
						className='flex items-center justify-center'
					>
						<div
							key={item.title}
							className='h-12 w-12 rounded-full bg-zinc-300 flex items-center justify-center'
						>
							<div className='h-5 w-5'>{item.icon}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

const FloatingDockDesktop = ({
	items,
	className,
}: {
	items: { title: string; icon: React.ReactNode; }[]
	className?: string
}) => {
	let mouseX = useMotionValue(Infinity)
	return (
		<motion.div
			onMouseMove={e => mouseX.set(e.pageX)}
			onMouseLeave={() => mouseX.set(Infinity)}
			className={cn(
				'mx-auto hidden md:flex h-16 gap-7 items-end  rounded-2xl bg-main-black border border-white/[0.2] px-10 pb-3',
				className
			)}
		>
			{items.map(item => (
				<IconContainer mouseX={mouseX} key={item.title} {...item} />
			))}
		</motion.div>
	)
}

function IconContainer({
	mouseX,
	title,
	icon,
}: {
	mouseX: MotionValue
	title: string
	icon: React.ReactNode
}) {
	let ref = useRef<HTMLDivElement>(null)

	let distance = useTransform(mouseX, val => {
		let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

		return val - bounds.x - bounds.width / 2
	})

	let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
	let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

	let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])
	let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])

	let width = useSpring(widthTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	})
	let height = useSpring(heightTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	})

	let widthIcon = useSpring(widthTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	})
	let heightIcon = useSpring(heightTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	})

	const [hovered, setHovered] = useState(false)

	return (
		<div className='cursor-pointer'>
			<motion.div
				ref={ref}
				style={{ width, height }}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				className='aspect-square rounded-full isolate backdrop-blur-[6px] shadow-[inset_0_-7px_11px_rgba(164,143,255,0.125)] flex border border-white/20 items-center justify-center relative'
			>
				<AnimatePresence>
					{hovered && (
						<motion.div
							initial={{ opacity: 0, y: 10, x: '-50%' }}
							animate={{ opacity: 1, y: 0, x: '-50%' }}
							exit={{ opacity: 0, y: 2, x: '-50%' }}
							className='px-2.5 py-1 whitespace-pre rounded-md border bg-primary-pink border-white/20 text-black font-bold absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs'
						>
							{title}
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div
					style={{ width: widthIcon, height: heightIcon }}
					className='flex items-center justify-center'
				>
					{icon}
				</motion.div>
			</motion.div>
		</div>
	)
}
