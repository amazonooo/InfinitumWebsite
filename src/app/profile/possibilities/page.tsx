import { FC } from 'react'
import PossibillitiesMain from './components/PossibillitiesMain'

const page: FC = () => {
  return (
		<section className='h-full w-full pt-16'>
			<div
				className='flex flex-col isolate z-[10] px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'
			>
				<PossibillitiesMain />
			</div>
		</section>
	)
}

export default page