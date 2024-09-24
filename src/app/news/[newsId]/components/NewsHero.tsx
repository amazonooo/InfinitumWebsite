'use client'

import Heading from '@/components/ui/Heading'
import { slideInFromRight } from '@/utils/motion'
import { m, LazyMotion, domAnimation } from 'framer-motion'

export default function NewsHero() {
  return (
		<LazyMotion features={domAnimation}>
			<m.div
				initial='hidden'
				animate='visible'
				className='flex items-center justify-center px-44 mt-16 lg:mt-40 w-full z-[20]'
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