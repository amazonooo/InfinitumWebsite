'use client'

import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from '../../../components/ui/main-info/news/3dCard'
import Link from 'next/link'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'
import { Meteors } from '@/components/ui/meteor/MeteorEffect'
import { Button } from '@/components/ui/button'
import { MainButton } from '@/components/ui/main-button/MainButton'

export function ServerCards() {
	return (
		<LazyMotion features={domAnimation}>
			<m.div
				className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 py-8'
				initial='hidden'
				animate='visible'
			>
				<m.div variants={slideInFromLeft(0.3)}>
					<CardContainer className='inter-var'>
						<CardBody className='relative group/card   dark:border-white/[0.2] w-[21rem] sm:w-[28rem] md:w-[21.5rem] lg:w-[28rem] h-auto rounded-xl border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B] transition-all duration-150 hover:shadow-3xl hover:shadow-primary-pink/[0.5] py-[60px] px-12'>
							<Image
								src='/server-3.png'
								height='1000'
								width='1000'
								className='pointer-events-none h-40 sm:h-48 md:h-56 lg:h-60 xl:h-64 w-full object-contain rounded-xl mb-10'
								alt='thumbnail'
							/>
							<div className='flex flex-col items-center justify-center mb-4'>
								<CardItem
									as={'h1'}
									className='text-2xl md:text-3xl font-bold text-primary-pink'
								>
									Server 1
								</CardItem>
							</div>
							<CardItem
								as='p'
								className='text-neutral-300 text-sm max-w-sm text-center'
							>
								Планета, состоящая целиком и полностью из радиоактивного урана,
								а yстойчивое будущее требует изменений на системном уровне...
							</CardItem>
							<div className='flex justify-center items-center mt-10'>
								<CardItem as={Link} href='/servers/1'>
									<MainButton className='py-2.5 px-8'>Подробнее</MainButton>
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				</m.div>
				<m.div variants={slideInFromLeft(0.3)}>
					<CardContainer id='in-develop' className='inter-var'>
						<CardBody className='relative group/card   dark:border-white/[0.2] w-[21rem] sm:w-[28rem] md:w-[21.5rem] lg:w-[28rem] h-auto rounded-xl border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B] transition-all duration-150 hover:shadow-3xl hover:shadow-gray-500 py-[60px] px-12'>
							<CardItem className='relative w-full'>
								<Image
									src='/server-4.png'
									height='1000'
									width='1000'
									className='pointer-events-none h-40 sm:h-48 md:h-56 lg:h-60 xl:h-64 w-full object-contain rounded-xl mb-10'
									// object-cover!!!
									alt='thumbnail'
								/>
							</CardItem>
							<div className='flex flex-col items-center justify-center mb-4'>
								<CardItem className='text-2xl md:text-3xl font-bold text-primary-pink'>
									Server 2
								</CardItem>
							</div>
							<CardItem
								as='p'
								className='text-neutral-300 text-sm max-w-sm text-center'
							>
								Планета, состоящая целиком и полностью из радиоактивного урана,
								а yстойчивое будущее требует изменений на системном уровне...
							</CardItem>
							<div className='flex justify-between items-center mt-10'>
								<CardItem
									as='div'
									className='text-xs md:text-base font-normal Welcome-text Welcome-box px-3 py-1.5 cursor-default'
								>
									В разработке
								</CardItem>
								<CardItem
									as='div'
									className='px-4 py-2 rounded-md bg-neutral-600 cursor-not-allowed text-black text-xs font-bold'
								>
									Подробнее
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				</m.div>
			</m.div>
		</LazyMotion>
	)
}
