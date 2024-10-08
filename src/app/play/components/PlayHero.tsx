'use client'

import { domAnimation, LazyMotion, m } from 'framer-motion'
import { slideInFromRight } from '@/utils/motion'
import Heading from '@/components/ui/Heading'

export default function PlayHero() {
	return (
		<LazyMotion features={domAnimation}>
			<m.div
				initial='hidden'
				animate='visible'
				className='w-full z-[20]'
			>
        <div className='bg-[url(/play-bg.png)] h-screen bg-no-repeat bg-cover bg-center'>

        </div>
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
