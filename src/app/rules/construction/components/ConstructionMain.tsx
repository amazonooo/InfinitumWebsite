'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

const ConstructionMain: FC = () => {
	return (
		<motion.section initial='hidden' animate='visible'>
			<motion.div
				variants={slideInFromLeft(0.3)}
				className='relative rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'
			>
				<div className='p-6'></div>
			</motion.div>
		</motion.section>
	)
}

export default ConstructionMain