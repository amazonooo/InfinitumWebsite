'use client'

import { FC } from 'react'
import News from './news/News'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const MainInfo: FC = () => {
	const router = useRouter()
	
	const handleClick = () => {
		router.push('/news')
	}

  return (
		<motion.section
			id='news'
			className='flex flex-col items-center justify-center relative'
			initial='hidden'
			animate='visible'
		>
			<motion.h1
				className='text-center text-6xl font-semibold'
				variants={slideInFromLeft(0.8)}
			>
				Новости
			</motion.h1>
			<motion.div variants={slideInFromLeft(0.8)}>
				<News />
			</motion.div>
			<Link
				href={'/news'}
				onClick={handleClick}
				className='py-4 px-16 text-xl text-center rounded-lg cursor-pointer bg-[#8951ff] hover:bg-[#b68ef1] transition-all duration-300 hover:-translate-y-1.5 mt-12'
			>
				Смотреть все новости
			</Link>
		</motion.section>
	)
}

export default MainInfo