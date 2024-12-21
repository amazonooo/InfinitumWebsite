import type { Metadata } from 'next'
import AccountMain from './components/AccountMain'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	...NO_INDEX_PAGE,
  title: 'Личный кабинет',
}

export default function AccountPage() {
  return (
		<section className='h-full w-full flex flex-col overflow-x-clip max-w-[1440px] mx-auto px-5 sm:px-10'>
			<div className='flex flex-col z-[10] items-center justify-center'>
				<AccountMain />
			</div>
		</section>
	)
}