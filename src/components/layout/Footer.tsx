'use client'

import { FC } from 'react'
import FooterNav from '../ui/footer/FooterNav'
import { motion } from 'framer-motion'
import { slideInFromRight } from '@/utils/motion'

const Footer: FC = () => {
  return (
		<motion.footer
			className='max-w-7xl w-full px-5 sm:px-10 xl:px-0 mx-auto overflow-x-clip pt-12 pb-10'
			initial='hidden'
			animate='visible'
		>
			<motion.div variants={slideInFromRight(0.8)}>
				<FooterNav />
			</motion.div>
		</motion.footer>
	)
}

export default Footer