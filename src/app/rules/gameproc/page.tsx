import { FC } from 'react'
import GameProcMain from './components/GameProcMain'

const page: FC = () => {
	return (
		<section className='h-full w-full pt-16'>
			<div
				className='flex flex-col isolate z-[40] px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'
			>
				<GameProcMain />
			</div>
		</section>
	)
}

export default page
