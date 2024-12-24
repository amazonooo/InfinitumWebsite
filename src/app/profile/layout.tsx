import ProfileLinks from './components/ProfileLinks'
import { ReactNode } from 'react'
import LayoutLeft from './components/LayoutLeft'

export default function ProfileLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
  return (
		<div
			className={`bg-[#09090B] overflow-x-clip h-full max-w-[1440px] mx-auto px-5 sm:px-10`}
		>
			<div className='flex mt-16 lg:mt-40 gap-10 flex-col lg:flex-row'>
				<div className='order-2 lg:order-1'>
					<LayoutLeft />
				</div>
				<div className='flex-1 z-10 order-1 lg:order-2'>
					<ProfileLinks />
				</div>
			</div>
		</div>
	)
}