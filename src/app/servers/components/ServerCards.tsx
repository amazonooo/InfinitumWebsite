'use client'

import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from '../../../components/ui/main-info/news/3dCard'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'
import { Meteors } from '@/components/ui/meteor/MeteorEffect'

export function ServerCards() {
	return (
		<motion.div
			className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 py-8'
			initial='hidden'
			animate='visible'
		>
			<motion.div variants={slideInFromLeft(0.3)}>
				<CardContainer className='inter-var'>
					<CardBody className='relative group/card   dark:border-white/[0.2] w-[21rem] sm:w-[28rem] md:w-[21.5rem] lg:w-[28rem] h-auto rounded-xl p-6 border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] transition-transform duration-550 hover:shadow-3xl hover:shadow-teal-100/[0.3]'>
						<CardItem className='text-xl font-bold text-neutral-600 dark:text-[#cbacf9]'>
							Server 1
						</CardItem>
						<CardItem as='p' className='text-neutral-300 text-sm max-w-sm mt-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
							ab sint. Voluptates!
						</CardItem>
						<CardItem className='w-full mt-4'>
							<Image
								src='/news-1.png'
								height='1000'
								width='1000'
								className='pointer-events-none h-40 sm:h-48 md:h-56 lg:h-60 xl:h-64 w-full object-contain rounded-xl'
								// object-cover!!!
								alt='thumbnail'
							/>
						</CardItem>
						<div className='flex justify-between items-center mt-12 md:mt-14 lg:mt-16'>
							<CardItem
								as={Link}
								href='/'
								className='rounded-xl text-xs md:text-base bg-[#8153ff] py-2 px-4 font-normal dark:text-white'
							>
								Играть сейчас
							</CardItem>
							<CardItem
								as={Link}
								href='/servers/1'
								className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
							>
								Подробнее
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			</motion.div>
			<motion.div variants={slideInFromLeft(0.3)}>
				<CardContainer id='in-develop' className='inter-var'>
					<CardBody className='relative group/card   dark:border-white/[0.2] w-[21rem] sm:w-[28rem] md:w-[21.5rem] lg:w-[28rem] h-auto rounded-xl p-6 border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] transition-transform duration-550 hover:shadow-3xl hover:shadow-blue-700/[0.3] '>
						<CardItem className='text-xl font-bold text-neutral-600 dark:text-[#cbacf9]'>
							Server 2
						</CardItem>
						<CardItem
							as='p'
							className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
							ab sint. Voluptates!
						</CardItem>
						<CardItem className='relative w-full mt-4'>
							<Image
								src='/news-1.png'
								height='1000'
								width='1000'
								className='pointer-events-none h-40 sm:h-48 md:h-56 lg:h-60 xl:h-64 w-full object-contain rounded-xl'
								// object-cover!!!
								alt='thumbnail'
							/>
						</CardItem>
						<div className='flex justify-between items-center mt-12 md:mt-14 lg:mt-16'>
							<CardItem
								as='div'
								className='text-xs md:text-base font-normal Welcome-text Welcome-box px-3 py-1.5 cursor-default'
							>
								В разработке
							</CardItem>
							<CardItem
								as='div'
								className='px-4 py-2 rounded-xl bg-neutral-600 cursor-not-allowed text-black text-xs font-bold'
							>
								Подробнее
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			</motion.div>
			{/* <motion.div variants={slideInFromLeft(0.3)}>
				<CardContainer id='in-develop' className='inter-var'>
					<CardBody className='relative group/card   dark:border-white/[0.2] w-[21rem] sm:w-[28rem] md:w-[21.5rem] lg:w-[28rem] h-auto rounded-xl p-6 border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] transition-transform duration-550 hover:shadow-3xl hover:shadow-purple-500/[0.3] '>
						<CardItem className='text-xl font-bold text-neutral-600 dark:text-[#cbacf9]'>
							Server 3
						</CardItem>
						<CardItem
							as='p'
							className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
							ab sint. Voluptates!
						</CardItem>
						<CardItem className='w-full mt-4'>
							<Image
								src='/news-1.png'
								height='1000'
								width='1000'
								className='pointer-events-none h-40 sm:h-48 md:h-56 lg:h-60 xl:h-64 w-full object-contain rounded-xl'
								// object-cover!!!
								alt='thumbnail'
							/>
						</CardItem>
						<div className='flex justify-between items-center mt-12 md:mt-14 lg:mt-16'>
							<CardItem
								as='div'
								className='text-xs md:text-base font-normal Welcome-text Welcome-box px-3 py-1.5 cursor-default'
							>
								В разработке
							</CardItem>
							<CardItem
								as='div'
								className='px-4 py-2 rounded-xl bg-neutral-600 cursor-not-allowed text-black text-xs font-bold'
							>
								Подробнее
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			</motion.div>
			<motion.div variants={slideInFromLeft(0.3)}>
				<CardContainer id='in-develop' className='inter-var'>
					<CardBody className='relative group/card   dark:border-white/[0.2] w-[21rem] sm:w-[28rem] md:w-[21.5rem] lg:w-[28rem] h-auto rounded-xl p-6 border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] transition-transform duration-550 hover:shadow-3xl hover:shadow-cyan-400/[0.3] '>
						<CardItem className='text-xl font-bold text-neutral-600 dark:text-[#cbacf9]'>
							Server 4
						</CardItem>
						<CardItem
							as='p'
							className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
							ab sint. Voluptates!
						</CardItem>
						<CardItem className='w-full mt-4'>
							<Image
								src='/news-1.png'
								height='1000'
								width='1000'
								className='pointer-events-none h-40 sm:h-48 md:h-56 lg:h-60 xl:h-64 w-full object-contain rounded-xl'
								// object-cover!!!
								alt='thumbnail'
							/>
						</CardItem>
						<div className='flex justify-between items-center mt-12 md:mt-14 lg:mt-16'>
							<CardItem
								as='div'
								className='text-xs md:text-base font-normal Welcome-text Welcome-box px-3 py-1.5 cursor-default'
							>
								В разработке
							</CardItem>
							<CardItem
								as='div'
								className='px-4 py-2 rounded-xl bg-neutral-600 cursor-not-allowed text-black text-xs  font-bold'
							>
								Подробнее
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			</motion.div> */}
		</motion.div>
	)
}