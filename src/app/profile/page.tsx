import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import GeneralMain from './general/components/GeneralMain'

export const metadata: Metadata = {
  title: 'Profile',
  ...NO_INDEX_PAGE
}

export default function ProfilePage() {
  return (
		<section className='h-full w-full pt-24'>
			<div
				className='flex flex-col isolate z-[50] px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[140px]'
				style={{
					backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
				<GeneralMain />
			</div>
		</section>
	)
}