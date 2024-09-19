'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

interface SlideProps {
	img: string
	title: string
	description: string
	buttonText: string
}

const Slide: React.FC<SlideProps> = ({img, title, description, buttonText}) => {
	return (
		<div className='relative text-center'>
			<Image
				className='pointer-events-none'
				src={img}
				alt='planet'
				width={600}
				height={600}
			/>
			<div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white'>
				<h2 className='text-3xl font-bold mb-4'>{title}</h2>
				<p className='text-lg mb-6'>{description}</p>
				<Button className='px-6 py-2 bg-purple-600 rounded-lg shadow-lg'>
					{buttonText}
				</Button>
			</div>
		</div>
	)
}

export default Slide
