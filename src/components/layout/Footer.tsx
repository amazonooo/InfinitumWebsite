'use client'

import { FC } from 'react'
import FooterNav from '../ui/footer/FooterNav'
import { motion } from 'framer-motion'
import { slideInFromRight } from '@/utils/motion'

const Footer: FC = () => {
  return (
		<motion.footer
			className='max-w-7xl w-full px-5 sm:px-10 xl:px-0 mx-auto overflow-x-clip mt-7 mb-32 py-4 rounded-lg border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616]'
			initial='hidden'
			animate='visible'
			style={{
				backdropFilter: 'blur(16px) saturate(180%)',
				backgroundColor: 'rgba(26, 26, 30, 1.6)',
				borderRadius: '12px',
				border: '1px solid rgba(255, 255, 255, 0.125)',
			}}
		>
			<motion.div variants={slideInFromRight(0.8)}>
				<FooterNav />
			</motion.div>
		</motion.footer>
	)
}

export default Footer