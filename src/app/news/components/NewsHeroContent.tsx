import { FC } from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'

const NewsHeroContent: FC = () => {
  return (
		<motion.div
			initial='hidden'
			animate='visible'
			className='flex items-center justify-center px-44 mt-52 w-full z-[20]'
		>
			<div className='flex flex-col w-full h-full justify-center items-center m-auto text-start'>
				<motion.div
					variants={slideInFromTop}
					className='Welcome-box py-2 px-[7px]'
				>
					<h1 className='Welcome-text text-9xl'>Новости</h1>
				</motion.div>

				<motion.a
					variants={slideInFromLeft(0.8)}
					className='py-4 px-16 text-xl text-center rounded-lg cursor-pointer max-w-[200px] button-primary'
				>
					Играть
				</motion.a>
			</div>
		</motion.div>
	)
}

export default NewsHeroContent