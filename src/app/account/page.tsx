import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import News from '@/components/ui/main-info/news/News'
import AccountMain from './components/AccountMain'

export const metadata: Metadata = {
  title: 'Account',
  ...NO_INDEX_PAGE
}

export default function AccountPage() {
  return (
		<div className='h-full w-full flex flex-col overflow-clip'>
			<div
				className='flex flex-col isolate z-[50] items-center justify-center px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'
				style={{
					backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
        <AccountMain />
			</div>
		</div>
	)
}