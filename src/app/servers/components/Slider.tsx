'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { useRef, useEffect } from 'react'
import { Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Slider: React.FC = () => {
	const prevRef = useRef<HTMLDivElement>(null)
	const nextRef = useRef<HTMLDivElement>(null)

	const swiperRef = useRef<any>(null)

	useEffect(() => {
		if (swiperRef.current && prevRef.current && nextRef.current) {
			swiperRef.current.params.navigation.prevEl = prevRef.current
			swiperRef.current.params.navigation.nextEl = nextRef.current
			swiperRef.current.navigation.update()
		}
	}, [prevRef, nextRef])

	return (
		<div className='relative flex justify-center w-full select-none pt-16'>
			<div className='flex justify-center w-full relative'>
				<Swiper
					loop
					spaceBetween={20}
					slidesPerView={1}
					modules={[Navigation]}
					onSwiper={swiper => (swiperRef.current = swiper)}
					navigation={{
						prevEl: prevRef.current,
						nextEl: nextRef.current,
					}}
				>
					<SwiperSlide>
						<div className='flex justify-center items-center'>
							<div className='relative'>
								<Image
									src='/planet-3.png'
									alt='Планета 1'
									width={740}
									height={740}
									className='object-cover rounded-full'
								/>
								<div className='absolute inset-0 flex flex-col items-center justify-center px-4 md:px-0'>
									<h2 className='text-2xl md:text-3xl lg:text-4xl text-center Welcome-text font-bold'>
										Новый сервер
									</h2>
									<p className='mt-2.5 text-center text-sm md:text-base lg:text-lg xl:text-xl max-w-[490px]'>
										Присоединяйтесь к сообществу геймеров, которые уже оценили
										наш сервер.
									</p>
									<Button className='mt-6 bg-primary-purple'>Читать</Button>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex justify-center items-center'>
							<div className='relative'>
								<Image
									src='/planet-3.png'
									alt='Планета 2'
									width={740}
									height={740}
									className='object-cover rounded-full'
								/>
								<div className='absolute inset-0 flex flex-col items-center justify-center px-4 md:px-0'>
									<h2 className='text-2xl md:text-3xl lg:text-4xl text-center Welcome-text font-bold'>
										Новый сервер 2
									</h2>
									<p className='mt-2.5 text-center text-sm md:text-base lg:text-lg xl:text-xl max-w-[490px]'>
										Присоединяйтесь к сообществу геймеров, которые уже оценили
										наш сервер.
									</p>
									<Button className='mt-6 bg-primary-purple'>Читать</Button>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				<div
					ref={prevRef}
					className='absolute invisible md:visible top-1/2 left-4 transform -translate-y-1/2 bg-main-black border border-primary-pink rounded-full p-3 cursor-pointer shadow-lg hover:bg-primary-pink hover:border-main-black group transition duration-300 z-[50]'
				>
					<ArrowLeft className='group-hover:text-black' size={27} />
				</div>
				<div
					ref={nextRef}
					className='absolute invisible md:visible top-1/2 right-4 transform -translate-y-1/2 bg-main-black border border-primary-pink rounded-full p-3 cursor-pointer shadow-lg hover:bg-primary-pink hover:border-main-black group transition duration-300 z-[50]'
				>
					<ArrowRight className='group-hover:text-black' size={27} />
				</div>
			</div>
		</div>
	)
}

export default Slider
