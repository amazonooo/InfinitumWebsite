import { FC } from 'react'
import PrivilegeMain from './components/PrivilegeMain'

const page: FC = () => {
  return (
		<div className='h-full w-full py-8 sm:py-10 md:py-12 lg:py-16'>
			<div
				className='flex flex-col isolate z-[50] px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'
				style={{
					backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
				<PrivilegeMain />
			</div>
		</div>
	)
}

export default page