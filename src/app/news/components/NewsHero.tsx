'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { slideInFromRight } from '@/utils/motion'
import Heading from '@/components/ui/Heading'

const NewsHero: FC = () => {
	return (
		<motion.div
			initial='hidden'
			animate='visible'
			className='flex items-center justify-center px-44 mt-16 lg:mt-48 w-full z-[20]'
		>
			<div className='flex flex-col w-full h-full justify-center items-center text-start'>
				<motion.div variants={slideInFromRight(0.3)}>
					<Heading
						title='Новости'
						className='text-5xl md:text-6xl font-semibold'
					/>
					{/* <h1 className='Welcome-text text-7xl'>Новости</h1> */}
				</motion.div>
			</div>
		</motion.div>
	)
}

export default NewsHero
