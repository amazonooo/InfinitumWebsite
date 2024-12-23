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
			<div className='flex mt-16 lg:mt-40 gap-10'>
				<div className='lg:static lg:left-0 lg:top-0'>
					<LayoutLeft />
				</div>
				<ProfileLinks />
			</div>
		</div>
	)
}