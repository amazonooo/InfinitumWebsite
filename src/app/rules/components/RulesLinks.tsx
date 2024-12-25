import { FC, useState } from 'react'
import clsx from 'clsx'
import { LazyMotion, m, domAnimation } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { rules } from '@/app/profile/components/ui/links'

interface IProfile {
	currentType: string
	setCurrentType: (type: string) => void
}

const RulesLinks: FC<IProfile> = ({ currentType, setCurrentType }) => {
	const handleCurrentType = (name: string) => {
		setCurrentType(name)
	}
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const [hoveredPosition, setHoveredPosition] = useState<number>(0)
	const [hoveredWidth, setHoveredWidth] = useState<number>(0)

	return (
		<LazyMotion features={domAnimation}>
			<m.div
				initial='hidden'
				animate='visible'
				className='flex flex-col items-center'
			>
				<m.h1
					variants={slideInFromTop}
					className='mt-16 lg:mt-40 Welcome-text text-center text-3xl sm:text-6xl font-semibold'
				>
					{currentType}
				</m.h1>
				<m.div
					variants={slideInFromLeft(0.5)}
					className='relative mt-8 md:mt-10 rounded-lg border border-white/[0.2] shadow bg-[#09090B]'
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
								className='relative px-4 py-2 cursor-pointer text-white lg:text-neutral-300/80 hover:text-white whitespace-nowrap'
								onMouseEnter={e => {
									const { offsetLeft, offsetWidth } = e.currentTarget
									setHoveredIndex(index)
									setHoveredPosition(offsetLeft)
									setHoveredWidth(offsetWidth)
								}}
								onMouseLeave={() => setHoveredIndex(null)}
								onClick={() => handleCurrentType(card.name)}
							>
								<button
									className={clsx(
										'relative transition-all duration-300',
										currentType === card.name
											? 'Welcome-text font-extrabold border-none'
											: ''
									)}
								>
									{card.name}
								</button>
							</li>
						))}
					</ul>
				</m.div>
			</m.div>
		</LazyMotion>
	)
}

export default RulesLinks
