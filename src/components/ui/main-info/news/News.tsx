'use client'

import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { newsCard } from './newsCard'
import Image from 'next/image'

const News: FC = () => {
  return (
		<div className='flex flex-col justify-center items-center'>
			<div className='grid grid-cols-1 sm:grid-cols-2 space-x-24 gap-y-8'>
				{newsCard.map((card) => (
					<article key={card.id} className='bg-[rgba(0,0,0,.7)] max-w-[350px]'
						style={{
							backdropFilter: 'blur(16px)'
						}}
					>
						<div className='flex flex-col p-4'>
							<div>
								<Image src={card.image} alt='card' width={300} height={200} />
							</div>
							<h1>
								{card.title}
							</h1>
							<p>
								{card.desc}
							</p>
						</div>
					</article>
				))}
			</div>
		</div>
	)
}

export default News