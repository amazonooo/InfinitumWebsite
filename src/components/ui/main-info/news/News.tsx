'use client'

import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { newsCard } from './newsCard'
import { PinContainer } from '../../3d-pin/3d-pin'

const News: FC = () => {
  return (
		<div className='flex flex-col justify-center items-center'>
			<div className='flex flex-wrap items-center justify-center space-x-24 gap-y-8'>
				{newsCard.map(({ id, title, desc, image }) => (
					<div
						key={id}
						className='sm:h-[30rem] h-[22rem] sm:w-[570px] lg:min-h-[32.5rem] flex items-center justify-center w-[80vw]'
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
		</div>
	)
}

export default News