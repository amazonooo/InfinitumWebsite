'use client'

import { Button } from '@/components/ui/button/Button'
import Image from 'next/image'
import React from 'react'

interface SlideProps {
	slide: {
		title: string
		description: string
		buttonText: string
	}
}

const Slide: React.FC<SlideProps> = ({ slide }) => {
	return (
		<div className='relative text-center'>
      <Image className='pointer-events-none' src='/planet-3.png' alt='planet' width={500} height={500} />
			<div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white'>
				<h2 className='text-3xl font-bold mb-4'>{slide.title}</h2>
				<p className='text-lg mb-6'>{slide.description}</p>
				<Button className='px-6 py-2 bg-purple-600 rounded-lg shadow-lg'>
					{slide.buttonText}
				</Button>
			</div>
		</div>
	)
}

export default Slide
