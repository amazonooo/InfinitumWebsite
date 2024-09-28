'use client'

import { domAnimation, LazyMotion, m } from 'framer-motion'
import { slideInFromRight } from '@/utils/motion'
import Heading from '@/components/ui/Heading'

export default function DonateHero() {
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
							title='Донат'
							className='text-4xl md:text-6xl font-semibold'
						/>
					</m.div>
				</div>
			</m.div>
		</LazyMotion>
	)
}
