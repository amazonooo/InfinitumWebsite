'use client'

import Slider from '../components/Slider'

const ServerInfo = () => {
  return (
		<div className='h-screen w-full flex flex-col justify-center overflow-x-clip px-5 sm:px-10 md:px-0'>
			<div
				className='flex flex-col items-center justify-center isolate z-[40]'
			>
				<Slider />
			</div>
		</div>
	)
}

export default ServerInfo