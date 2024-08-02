'use client'

import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './3dCard'

export default function News() {
	return (
		<CardContainer className='inter-var'>
			<CardBody className='relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:bg-[#161616]  '>
				<CardItem
					translateZ='50'
					className='text-xl font-bold text-neutral-600 dark:text-white'
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
				<CardItem
					translateZ='100'
					rotateX={20}
					rotateZ={-1}
					className='w-full mt-4'
				>
					<Image
						src='/news-1.png'
						height='1000'
						width='1000'
						className='h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl'
						alt='thumbnail'
					/>
				</CardItem>
				<div className='flex justify-between items-center mt-20'>
					<CardItem
						translateZ={20}
						translateX={-10}
						as='button'
						className='px-4 py-2 rounded-xl text-sm font-normal dark:text-white'
					>
						Try now →
					</CardItem>
					<CardItem
						translateZ={20}
						translateX={10}
						as='button'
						className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold'
					>
						Sign up
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	)
}
