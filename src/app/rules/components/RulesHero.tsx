'use client'

import Heading from '@/components/ui/Heading'
import { slideInFromRight } from '@/utils/motion'
import { motion } from 'framer-motion'

export function RulesHero() {
  return (
		<motion.div
			initial='hidden'
			animate='visible'
			className='flex items-center justify-center mt-16 lg:mt-40 w-full z-[20]'
		>
			<div className='flex flex-col w-full h-full text-start'>
				<motion.div variants={slideInFromRight(0.3)}>
					<Heading
						title='Правила'
						className='text-4xl md:text-6xl font-semibold'
					/>
				</motion.div>
			</div>
		</motion.div>
	)
}