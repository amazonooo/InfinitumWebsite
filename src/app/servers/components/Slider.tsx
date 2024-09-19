'use client'

import React, { useState } from 'react'
import { SLIDE_CARD } from './SLIDE_CARD'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Slider: React.FC = () => {
	return (
		<div className='relative flex items-center justify-center w-full'>
			<div className='flex items-center justify-center w-full'>
				<Swiper
					centeredSlides={true}
					loop={true}
					slidesPerView={1}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					modules={[Autoplay, Pagination, Navigation]}
				>
					<SwiperSlide>
						<div className='flex items-center justify-center relative'>
							<Image
								className='pointer-events-none'
								src={'/planet-3.png'}
								alt='planet'
								width={500}
								height={500}
							/>
							<div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white flex items-center justify-center flex-col'>
								<h2 className='text-3xl font-bold mb-4'>Планета 1</h2>
								<p className='text-lg mb-6'>
									Присоединяйтесь к сообществу геймеров, которые уже оценили наш
									лаунчер.
								</p>
								<Button className='px-6 py-2 bg-purple-600 rounded-lg shadow-lg'>
									Читать
								</Button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex items-center justify-center relative'>
							<Image
								className='pointer-events-none'
								src={'/planet-3.png'}
								alt='planet'
								width={500}
								height={500}
							/>
							<div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white flex items-center justify-center flex-col'>
								<h2 className='text-3xl font-bold mb-4'>Планета 2</h2>
								<p className='text-lg mb-6'>
									Присоединяйтесь к сообществу геймеров, которые уже оценили наш
									лаунчер.
								</p>
								<Button className='px-6 py-2 bg-purple-600 rounded-lg shadow-lg'>
									Читать
								</Button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex items-center justify-center relative'>
							<Image
								className='pointer-events-none'
								src={'/planet-3.png'}
								alt='planet'
								width={500}
								height={500}
							/>
							<div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white flex items-center justify-center flex-col'>
								<h2 className='text-3xl font-bold mb-4'>Планета 3</h2>
								<p className='text-lg mb-6'>
									Присоединяйтесь к сообществу геймеров, которые уже оценили наш
									лаунчер.
								</p>
								<Button className='px-6 py-2 bg-purple-600 rounded-lg shadow-lg'>
									Читать
								</Button>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default Slider
