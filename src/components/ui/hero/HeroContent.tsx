'use client'

import { FC } from 'react'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import Heading from '../Heading'
import { MainButton } from '../main-button/MainButton'

const HeroContent: FC = () => {
  return (
		<LazyMotion features={domAnimation}>
			<m.div
				initial='hidden'
				animate='visible'
				className='flex items-center justify-center px-44 mt-16 lg:mt-40 w-full z-[20]'
			>
				<div className='flex flex-col justify-center items-center'>
					<m.div
						variants={slideInFromTop}
						className='Welcome-box py-1.5 px-[6px]'
					>
						<Heading
							title='Infinitum'
							className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl'
						/>
					</m.div>

					<m.p
						variants={slideInFromLeft(0.5)}
						className='text-center mt-5 mb-7 text-base md:text-[18px] md:max-w-[750px]'
					>
						Испытай новый уровень удобства с инновационным лаунчером,
						объединяющим все игровые библиотеки одном интерфейсе
					</m.p>

					<m.div variants={slideInFromLeft(0.7)}>
						<MainButton text='Играть' className='px-8 py-3 md:px-12 md:py-4' />
					</m.div>
				</div>
			</m.div>
		</LazyMotion>
	)
}

export default HeroContent