import { FC } from 'react'
import GameProcMain from './components/CommunicationMain'
import ServerRulMain from './components/CommunicationMain'
import CommunicationMain from './components/CommunicationMain'

const page: FC = () => {
	return (
		<section className='h-full w-full pt-16'>
			<div
				className='flex flex-col isolate z-[50] px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'
				style={{
					backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
				<CommunicationMain />
			</div>
		</section>
	)
}

export default page