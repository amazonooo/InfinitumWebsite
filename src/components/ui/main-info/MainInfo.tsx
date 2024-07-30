'use client'

import { FC } from 'react'
import Online from './online/Online'
import News from './news/News'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'

const MainInfo: FC = () => {
  return (
		<motion.section
			id='news'
			className='grid grid-cols-4 relative'
			initial='hidden'
			animate='visible'
		>
			<motion.div variants={slideInFromLeft(0.8)} className='col-span-3'>
				<News />
			</motion.div>
			{/* <motion.div variants={slideInFromRight(0.8)} className='col-span-1' aria-label='sidebar'>
				<Online />
			</motion.div> */}
		</motion.section>
	)
}

export default MainInfo