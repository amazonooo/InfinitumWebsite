import Personalization from '@/components/ui/personalization/Personalization'
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
				<div className='static left-0 top-0'>
					<LayoutLeft />
				</div>
				<ProfileLinks />
				{children}
			</div>
		</div>
	)
}