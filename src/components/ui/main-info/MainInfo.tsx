'use client'

import { FC } from 'react'
import News from './news/News'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Heading from '../Heading'

const MainInfo: FC = () => {
	const router = useRouter()
	
	const handleClick = () => {
		router.push('/news')
	}

  return (
		<motion.section
			id='news'
			className='flex flex-col items-center justify-center relative pt-16'
			initial='hidden'
			animate='visible'
		>
			<motion.div
				variants={slideInFromLeft(0.8)}
			>
				<Heading
					title='Новости'
					className='text-5xl md:text-6xl font-semibold'
				></Heading>
			</motion.div>
			<motion.div variants={slideInFromLeft(0.8)}>
				<News />
			</motion.div>
			<Link
				href={'/news'}
				onClick={handleClick}
				className='mt-8 py-3 px-6 md:py-4 md:text-px-16 md:text-xl text-base text-center rounded-lg cursor-pointer bg-[#8951ff] hover:bg-[#b68ef1] transition-all duration-300 hover:-translate-y-1.5'
			>
				Смотреть все новости
			</Link>
		</motion.section>
	)
}

export default MainInfo