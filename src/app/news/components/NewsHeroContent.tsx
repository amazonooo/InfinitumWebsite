import { FC } from 'react'
import { motion } from 'framer-motion'
import { slideInFromRight } from '@/utils/motion'

const NewsHeroContent: FC = () => {
  return (
		<motion.div
			initial='hidden'
			animate='visible'
			className='flex items-center justify-center px-44 mt-52 w-full z-[20]'
		>
			<div className='flex flex-col w-full h-full justify-center items-center text-start'>
				<motion.div
					variants={slideInFromRight(0.3)}
					className='Welcome-box py-2 px-[7px]'
				>
					<h1 className='Welcome-text text-7xl'>Новости</h1>
				</motion.div>
				
			</div>
		</motion.div>
	)
}

export default NewsHeroContent