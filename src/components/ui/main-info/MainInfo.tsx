'use client'

import { FC } from 'react'
import News from './news/News'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Heading from '../Heading'
import { Button } from "@/components/ui/button"

const MainInfo: FC = () => {
	const router = useRouter()
	
	const handleClick = () => {
		router.push('/news')
	}

  return (
		<LazyMotion features={domAnimation}>
			<m.section
				id='news'
				className='flex flex-col items-center justify-center relative pt-16'
				initial='hidden'
				animate='visible'
			>
				<m.div variants={slideInFromLeft(0.8)}>
					<Heading
						title='Новости'
						className='text-4xl md:text-6xl font-semibold'
					></Heading>
				</m.div>
				<m.div variants={slideInFromRight(0.8)}>
					<News />
				</m.div>
				<m.div className='my-8' variants={slideInFromLeft(0.8)}>
					<Link
						href={'/news'}
						onClick={handleClick}
					>
						<Button size={'lg'}>Все новости</Button>
					</Link>
				</m.div>
			</m.section>
		</LazyMotion>
	)
}

export default MainInfo