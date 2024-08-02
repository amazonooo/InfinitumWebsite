'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import Heading from '../Heading'

const HeroContent: FC = () => {
  return (
		<motion.div
			initial='hidden'
			animate='visible'
			className='flex items-center justify-center px-44 mt-16 lg:mt-52 w-full z-[20]'
		>
			<div className='flex flex-col justify-center items-center'>
				<motion.div
					variants={slideInFromTop}
					className='Welcome-box py-1.5 px-[6px]'
				>
					<Heading title='Infinitum' className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl'  />
				</motion.div>

				<motion.p
					variants={slideInFromLeft(0.5)}
					className='text-center mt-5 mb-7 text-base md:text-[18px] md:max-w-[750px]'
				>
					Испытай новый уровень удобства с инновационным лаунчером, объединяющим
					все игровые библиотеки одном интерфейсе
				</motion.p>

				<motion.a
					variants={slideInFromLeft(0.7)}
					className='py-3 px-12 md:py-4 md:text-px-16 text-xl text-center rounded-lg cursor-pointer max-w-[200px] bg-[#8951ff] hover:bg-[#b68ef1] transition-colors duration-300'
				>
					Играть
				</motion.a>
			</div>
		</motion.div>
	)
}

export default HeroContent