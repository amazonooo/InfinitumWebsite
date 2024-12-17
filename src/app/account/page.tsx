import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import AccountMain from './components/AccountMain'

export const metadata: Metadata = {
  title: 'Account',
  ...NO_INDEX_PAGE
}

export default function AccountPage() {
  return (
		<section className='h-full w-full flex flex-col overflow-x-clip'>
			<div
				className='flex flex-col z-[10] items-center justify-center px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'
			>
        <AccountMain />
			</div>
		</section>
	)
}