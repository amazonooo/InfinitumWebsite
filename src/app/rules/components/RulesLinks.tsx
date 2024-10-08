'use client'

import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ILinks, rules } from '@/app/profile/components/links'

interface IProfile {
	card?: ILinks
	currentPath?: string
	type?: 'Общие правила' | 'Игровой процесс' | 'Общение' | 'Строительство в мире' | 'Правила серверов'
}

const RulesLinks: FC<IProfile> = ({ currentPath, type }) => {
	const [active, setActive] = useState(currentPath)
	const [currentType, setCurrentType] = useState<typeof type>(type)

	const pathname = usePathname()
	const searchParams = useSearchParams()
	const router = useRouter()

	const handleClick = (href: string, name: IProfile['type']) => {
		setActive(href)
		setCurrentType(name)
		router.push(`${href}?section=${name}`)
	}

	useEffect(() => {
		const querySection = searchParams.get('section') as IProfile['type']
		if (querySection) {
			setCurrentType(querySection)
		} else {
			const section = determineSectionFromPath(pathname)
			setCurrentType(section)
		}
	}, [pathname, searchParams])

	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const [hoveredPosition, setHoveredPosition] = useState<number>(0)
	const [hoveredWidth, setHoveredWidth] = useState<number>(0)

	return (
		<LazyMotion features={domAnimation}>
			<m.div
				initial='hidden'
				animate='visible'
				className='flex flex-col items-center px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'
			>
				<m.h1
					variants={slideInFromTop}
					className='mt-16 lg:mt-40 Welcome-text text-center text-3xl sm:text-6xl font-semibold'
				>
					{currentType}
				</m.h1>
				<m.div
					variants={slideInFromLeft(0.5)}
					className='relative mt-8 md:mt-10 rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B]'
				>
					<div
						className={clsx(
							'hidden lg:block absolute h-10 bg-neutral-800 rounded transition-all duration-200 ease-in-out',
							hoveredIndex !== null ? 'opacity-100' : 'opacity-0'
						)}
						style={{
							width: `${hoveredWidth}px`,
							transform: `translateX(${hoveredPosition}px)`,
						}}
					></div>
					<ul className='grid grid-cols-1 md:grid-cols-2 lg:flex'>
						{rules.map((card, index) => (
							<li
								key={index}
								className='relative px-3 py-2 cursor-pointer text-white lg:text-neutral-300/80 hover:text-white whitespace-nowrap'
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
											pathname === card.link
												? 'Welcome-text font-extrabold border-none'
												: ''
										} p-2 relative transition-all duration-300`}
										onClick={() =>
											handleClick(card.link, card.name as IProfile['type'])
										}
									>
										{card.name}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</m.div>
			</m.div>
		</LazyMotion>
	)
}

function determineSectionFromPath(path: string): IProfile['type'] {
	if (path.includes('/rules/gameproc')) return 'Игровой процесс'
	if (path.includes('/rules/communication')) return 'Общение'
	if (path.includes('/rules/construction')) return 'Строительство в мире'
	if (path.includes('/rules/serverrul')) return 'Правила серверов'
	return 'Общие правила'
}

export default RulesLinks
