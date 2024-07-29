'use client'

import { FC } from 'react'
import { newsCard } from './newsCard'
import Image from 'next/image'
import Link from 'next/link'

interface ICard {
  image: string
  name: string
  desc: string
}

const Card: FC = () => {
  return (
		<>
			{newsCard.map(news => (
				<article
					key={news.image}
					className='relative z-0 select-none flex flex-col h-[560px] hover:scale-105 transition-transform duration-300 group'
				>
					<Image
						src={news.image}
						alt='news-img'
						width={400}
						height={200}
						className='mb-4 rounded-lg'
					/>
					<div
						style={{
							background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.75))',
						}}
						className='absolute bottom-0 w-full h-full opacity-0 rounded-lg transition-all duration-300 group-hover:opacity-100'
					></div>
					<div className='py-0 px-1 absolute bottom-[0%] opacity-0 transition-all duration-300 group-hover:bottom-[50%] group-hover:opacity-100'>
						<div className='space-y-4'>
							<h1 className='mb-4 text-3xl font-bold'>{news.name}</h1>
							<Link href={'/'} className='bg-[#8951ff]'>
								Читать
							</Link>
						</div>
					</div>
					<p className='text-base font-medium max-w-[299px]'>{news.desc}</p>
				</article>
			))}
		</>
	)
}

export default Card