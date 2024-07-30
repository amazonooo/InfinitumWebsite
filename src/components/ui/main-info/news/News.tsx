'use client'

import { FC } from 'react'
import Card from './Card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { newsCard } from './newsCard'
import { PinContainer } from '../../3d-pin/3d-pin'

const News: FC = () => {
	const router = useRouter()

	const handleClick = () => {
		router.push('/news')
	}

  return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='text-center text-6xl font-semibold'>Новости</h1>
			<div className='flex flex-wrap items-center justify-center space-x-24 gap-y-8 mt-16'>
				{newsCard.map(({ id, title, desc, image }) => (
					<div
						key={id}
						className='sm:h-[41rem] h-[32rem] sm:w-[570px] lg:min-h-[32.5rem] flex items-center justify-center w-[80vw]'
					>
						<PinContainer title={title} href={title}>
							<div className='relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] h-[30vh] w-[80vw] overflow-hidden mt-10'>
								<div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#1316d]'>
									<img src='/bg.png' alt='bg-png' />
								</div>
								<img
									src={image}
									alt={title}
									className='z-10 absolute bottom-0'
								/>
							</div>

							<h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
								{title}
							</h1>

							<p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
								{desc}
							</p>
						</PinContainer>
					</div>
				))}
			</div>
			<Link
				href={'/news'}
				onClick={handleClick}
				className='py-4 px-16 text-xl text-center rounded-lg cursor-pointer bg-[#8951ff] hover:bg-[#b68ef1] transition-all duration-300 hover:-translate-y-1.5 mt-12'
			>
				Смотреть все новости
			</Link>
		</div>
	)
}

export default News