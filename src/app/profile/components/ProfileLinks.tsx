'use client'

import { FC, useState } from 'react'
import { ILinks, links } from './links'
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'

interface IProfile {
	card?: ILinks
	currentPath?: string
	type?: 'Профиль' | 'Приобрести привелегию' | 'Пополнение' | 'Возможности' | 'История'
}

const ProfileLinks: FC<IProfile> = ({ currentPath, type }) => {
  const [active, setActive] = useState(currentPath)
	const [currentType, setCurrentType] = useState<typeof type>('Профиль')

  const handleClick = (href: string, name: IProfile['type']) => {
    setActive(href)
		setCurrentType(name)
  }

	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const [hoveredPosition, setHoveredPosition] = useState<number>(0)
	const [hoveredWidth, setHoveredWidth] = useState<number>(0)

  return (
		<motion.div initial='hidden' animate='visible'>
			<motion.h1 variants={slideInFromTop} className='mt-16 lg:mt-44 Welcome-text text-center text-4xl sm:text-5xl md:text-6xl font-semibold'>
				{currentType}
			</motion.h1>
			<motion.div variants={slideInFromLeft(0.25)} className='relative mt-10 rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'>
				<div
					className={clsx(
						'hidden lg:block absolute h-10 bg-neutral-800 rounded transition-all duration-300 ease-in-out',
						hoveredIndex !== null ? 'opacity-100' : 'opacity-0'
					)}
					style={{
						width: `${hoveredWidth}px`,
						transform: `translateX(${hoveredPosition}px)`,
					}}
				></div>
				<ul className='sm:flex grid grid-cols-2'>
					{links.map((card, index) => (
						<li
							key={index}
							className='relative px-3 py-2 text-white cursor-pointer'
							onMouseEnter={e => {
								const { offsetLeft, offsetWidth } = e.currentTarget
								setHoveredIndex(index)
								setHoveredPosition(offsetLeft)
								setHoveredWidth(offsetWidth)
							}}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<Link href={card.link} legacyBehavior>
								<a
									className={`${
										active === card.link ? 'text-[#cbacf9]' : ''
									} p-2 relative transition-colors duration-300`}
									onClick={() => handleClick(card.link, card.name as IProfile['type'])}
								>
									{card.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</motion.div>
		</motion.div>
	)
}

export default ProfileLinks