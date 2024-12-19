'use client'

import { FC } from 'react'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { slideInFromRight } from '@/utils/motion'
import Heading from '@/components/ui/Heading'

const NewsHero: FC = () => {
	return (
		<LazyMotion features={domAnimation}>
			<m.div
				initial='hidden'
				animate='visible'
				className='flex items-center justify-center mt-16 lg:mt-40 w-full z-[20]'
			>
				<div className='flex flex-col w-full h-full justify-center items-center text-start'>
					<m.div variants={slideInFromRight(0.3)}>
						<Heading
							title='Новости'
							className='text-4xl md:text-6xl font-semibold'
						/>
					</m.div>
				</div>
			</m.div>
		</LazyMotion>
	)
}

export default NewsHero
