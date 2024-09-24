'use client'

import Slider from '../components/Slider'

const ServerDetail = ({params}: {
	params: {
		newsId: string
	}
}) => {
  return (
		<div className='h-screen w-full flex flex-col justify-center overflow-x-clip'>
			<div
				className='flex flex-col items-center justify-center isolate z-[40]'
			>
				<Slider />
			</div>
		</div>
	)
}

export default ServerDetail