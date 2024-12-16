import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import GeneralMain from './general/components/GeneralMain'

export const metadata: Metadata = {
  title: 'Profile',
  ...NO_INDEX_PAGE
}

export default function ProfilePage() {
  return (
		<section className='h-full w-full pt-24 flex items-center justify-center px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[8.75rem]'>
			<div
				className='flex flex-col isolate z-[10] ml-auto mr-auto'
			>
				{/* <GeneralMain /> */}
			</div>
		</section>
	)
}