'use client'

import { FC } from 'react'
import NewsHeroContent from './NewsHeroContent'

const NewsHero: FC = () => {
	return (
		<div className='relative flex flex-col w-full h-full'>
			<NewsHeroContent />
		</div>
	)
}

export default NewsHero
