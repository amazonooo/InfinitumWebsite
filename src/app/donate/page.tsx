import { Metadata } from 'next'
import DonateHero from './components/DonateHero'
import DonateMain from './components/DonateMain'

export const metadata: Metadata = {
	title: 'Донат',
}

export default function DonatePage() {
  return (
		<section className='h-full w-full flex flex-col overflow-x-clip max-w-[1440px] mx-auto px-5 sm:px-10'>
			<div className='flex flex-col items-center justify-center isolate z-[10]'>
				<DonateHero />
				<DonateMain />
			</div>
		</section>
	)
}