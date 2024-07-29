'use client'

import { FC } from 'react'
import HeroContent from './HeroContent'

const Hero: FC = () => {
  return (
		<div className='relative flex flex-col w-full h-full'>
			{/* <video
				autoPlay
				muted
				loop
				className='rotate-180 absolute top-[-320px] left-0 z-[1] w-full h-full object-cover'
			>
				<source src='/space/blackhole.webm' type='video/webm' />
			</video> */}
			<HeroContent />
		</div>
	)
}

export default Hero