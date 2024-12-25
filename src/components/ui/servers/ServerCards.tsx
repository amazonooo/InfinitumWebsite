import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { CardBody, CardContainer, CardItem } from '../../../components/ui/main-info/news/3dCard'

import { MainButton } from '@/components/ui/main-button/MainButton'
import { ClientObject } from '@/types/client.types'

interface IClients {
	clients: ClientObject[]
}

export function ServerCards({ clients }: IClients) {
	return (
		<div className='flex items-center justify-center py-8'>
			<div>
				<CardContainer className='inter-var'>
					<CardBody className='relative group/card   dark:border-white/[0.2] w-[21rem] sm:w-[28rem] md:w-[21.5rem] lg:w-[28rem] h-auto rounded-xl border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B] transition-all duration-150 hover:shadow-3xl hover:shadow-primary-pink/[0.5] py-[60px] px-12'>
						<Image
							src={clients[0]?.imageUrl || ''}
							height='1000'
							width='1000'
							className='pointer-events-none w-full object-contain rounded-xl mb-10'
							alt='thumbnail'
						/>
						<div className='flex flex-col items-center justify-center mb-4'>
							<CardItem
								as={'h1'}
								className='text-2xl md:text-3xl font-bold text-primary-pink'
							>
								{clients[0]?.title || ''}
							</CardItem>
						</div>
						<CardItem
							as='p'
							className='text-neutral-300 text-sm max-w-sm text-center'
						>
							{clients[0]?.description || ''}
						</CardItem>
						<div className='flex justify-center items-center mt-10'>
							<CardItem as={'button'}>
								<MainButton className='py-2.5 px-8'>Подробнее</MainButton>
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			</div>
			{/* <div>
				<CardContainer id='in-develop' className='inter-var'>
					<CardBody className='relative group/card   dark:border-white/[0.2] w-[21rem] sm:w-[28rem] md:w-[21.5rem] lg:w-[28rem] h-auto rounded-xl border border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-[#09090B] transition-all duration-150 hover:shadow-3xl hover:shadow-gray-500 py-[60px] px-12'>
						<CardItem className='relative w-full'>
							<Image
								src={clients[0]?.imageUrl || ''}
								height='1000'
								width='1000'
								className='pointer-events-none w-full object-contain rounded-xl mb-10'
								alt='thumbnail'
							/>
						</CardItem>
						<div className='flex flex-col items-center justify-center mb-4'>
							<CardItem className='text-2xl md:text-3xl font-bold text-primary-pink'>
								{clients[0]?.title || ''}
							</CardItem>
						</div>
						<CardItem
							as='p'
							className='text-neutral-300 text-sm max-w-sm text-center'
						>
							{clients[0]?.description || ''}
						</CardItem>
						<div className='flex justify-between items-center mt-10'>
							<CardItem
								as='div'
								className='text-xs md:text-base font-normal Welcome-text Welcome-box items-center px-3 py-1.5 cursor-default'
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
			</div> */}
		</div>
	)
}
