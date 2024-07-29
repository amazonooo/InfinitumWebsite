'ues client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const HeroContent: FC = () => {
  return (
		<motion.div
			initial='hidden'
			animate='visible'
			className='flex flex-row items-center justify-center px-44 mt-52 w-full z-[20]'
		>
			<div className='flex flex-col w-full h-full justify-center items-center m-auto text-start'>
				<motion.div
					variants={slideInFromTop}
					className='Welcome-box py-2 px-[7px]'
				>
					<h1 className='Welcome-text text-9xl mb-3'>Infinitum</h1>
				</motion.div>

				<motion.p
					variants={slideInFromLeft(0.5)}
					className='flex flex-col text-2xl text-bold max-w-[900px] text-center w-auto h-auto mb-10'
				>
					Испытай новый уровень удобства с инновационным лаунчером,
					объединяющим все игровые библиотеки одном интерфейсе
				</motion.p>
        
        <motion.a
          variants={slideInFromLeft(1)}
          className='py-4 px-16 bg-[#8951ff] text-xl text-center rounded-lg cursor-pointer max-w-[200px]'
        >
          Играть
        </motion.a>
			</div>
		</motion.div>
	)
}

export default HeroContent