'use client'

import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from '../../../components/ui/main-info/news/3dCard'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

export function ServerCards() {
	return (
		<motion.div
			className='grid grid-cols-1 md:grid-cols-2 gap-12 py-8'
			initial='hidden'
			animate='visible'
		>
			<motion.div variants={slideInFromLeft(0.3)}>
				<CardContainer className='inter-var'>
					<CardBody className='relative group/card   dark:border-white/[0.2]  w-[330px] sm:w-[28rem] md:w-[350px] lg:w-[425px] xl:w-[550px] h-auto rounded-xl p-6 border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] transition-transform duration-550 hover:shadow-3xl hover:shadow-teal-100/[0.3] '>
						<CardItem
							translateZ='50'
							className='text-xl font-bold text-neutral-600 dark:text-[#cbacf9]'
						>
							Make things float in air
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
						>
							Hover over this card to unleash the power of CSS perspective
						</CardItem>
						<CardItem translateZ='100' className='w-full mt-4'>
							<Image
								src='/bg.png'
								height='1000'
								width='1000'
								className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<div className='flex justify-between items-center mt-20'>
							<CardItem
								translateZ={20}
								as={Link}
								href='https://twitter.com/mannupaaji'
								target='__blank'
								className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
							>
								Играть сейчас
							</CardItem>
							<CardItem
								translateZ={20}
								as='button'
								className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
							>
								Подробнее
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			</motion.div>
			<motion.div variants={slideInFromLeft(0.3)}>
				<CardContainer className='inter-var'>
					<CardBody className='relative group/card   dark:border-white/[0.2]  w-[330px] sm:w-[28rem] md:w-[350px] lg:w-[425px] xl:w-[550px] h-auto rounded-xl p-6 border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] transition-transform duration-550 hover:shadow-3xl hover:shadow-blue-700/[0.3] '>
						<CardItem
							translateZ='50'
							className='text-xl font-bold text-neutral-600 dark:text-[#cbacf9]'
						>
							Make things float in air
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
						>
							Hover over this card to unleash the power of CSS perspective
						</CardItem>
						<CardItem translateZ='100' className='w-full mt-4'>
							<Image
								src='/bg.png'
								height='1000'
								width='1000'
								className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<div className='flex justify-between items-center mt-20'>
							<CardItem
								translateZ={20}
								as={Link}
								href='https://twitter.com/mannupaaji'
								target='__blank'
								className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
							>
								Играть сейчас
							</CardItem>
							<CardItem
								translateZ={20}
								as='button'
								className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
							>
								Подробнее
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			</motion.div>
			<motion.div variants={slideInFromLeft(0.3)}>
				<CardContainer className='inter-var'>
					<CardBody className='relative group/card   dark:border-white/[0.2]  w-[330px] sm:w-[28rem] md:w-[350px] lg:w-[425px] xl:w-[550px] h-auto rounded-xl p-6 border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] transition-transform duration-550 hover:shadow-3xl hover:shadow-purple-500/[0.3] '>
						<CardItem
							translateZ='50'
							className='text-xl font-bold text-neutral-600 dark:text-[#cbacf9]'
						>
							Make things float in air
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
						>
							Hover over this card to unleash the power of CSS perspective
						</CardItem>
						<CardItem translateZ='100' className='w-full mt-4'>
							<Image
								src='/bg.png'
								height='1000'
								width='1000'
								className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<div className='flex justify-between items-center mt-20'>
							<CardItem
								translateZ={20}
								as={Link}
								href='https://twitter.com/mannupaaji'
								target='__blank'
								className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
							>
								Играть сейчас
							</CardItem>
							<CardItem
								translateZ={20}
								as='button'
								className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
							>
								Подробнее
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			</motion.div>
			<motion.div variants={slideInFromLeft(0.3)}>
				<CardContainer className='inter-var'>
					<CardBody className='relative group/card   dark:border-white/[0.2]  w-[330px] sm:w-[28rem] md:w-[350px] lg:w-[425px] xl:w-[550px] h-auto rounded-xl p-6 border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#161616] transition-transform duration-550 hover:shadow-3xl hover:shadow-cyan-400/[0.3] '>
						<CardItem
							translateZ='50'
							className='text-xl font-bold text-neutral-600 dark:text-[#cbacf9]'
						>
							Make things float in air
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
						>
							Hover over this card to unleash the power of CSS perspective
						</CardItem>
						<CardItem translateZ='100' className='w-full mt-4'>
							<Image
								src='/bg.png'
								height='1000'
								width='1000'
								className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<div className='flex justify-between items-center mt-20'>
							<CardItem
								translateZ={20}
								as={Link}
								href='https://twitter.com/mannupaaji'
								target='__blank'
								className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
							>
								Играть сейчас
							</CardItem>
							<CardItem
								translateZ={20}
								as='button'
								className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
							>
								Подробнее
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			</motion.div>
		</motion.div>
	)
}
