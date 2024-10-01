import DonateHero from './components/DonateHero'
import DonateMain from './components/DonateMain'

export default function DonatePage() {
  return (
		<section className='h-full w-full flex flex-col overflow-x-clip px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[8.75rem]'>
			<div className='flex flex-col items-center justify-center isolate z-[10]'>
				<DonateHero />
				<DonateMain />
			</div>
		</section>
	)
}