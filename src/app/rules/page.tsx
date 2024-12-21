import type { Metadata } from 'next'
import RulesMain from './components/RulesMain'

export const metadata: Metadata = {
	title: 'Правила',
}

export default function ProfilePage() {
	return (
		<section className='h-full w-full flex items-center justify-center max-w-[1440px] mx-auto px-5 sm:px-10'>
			<div className='flex flex-col isolate z-[10]'>
				<RulesMain />
			</div>
		</section>
	)
}
