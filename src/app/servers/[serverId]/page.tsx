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
				className='flex flex-col items-center justify-center isolate z-[50]'
				style={{
					backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
				<Slider />
			</div>
		</div>
	)
}

export default ServerDetail