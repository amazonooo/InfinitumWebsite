import MainInfo from '@/components/ui/main-info/MainInfo'
import Hero from './components/Hero'

export default function HomePage() {
  return (
		<main className='h-full w-full flex flex-col max-w-[1440px] mx-auto px-5 sm:px-10'>
			<section className='flex flex-col isolate z-[10]'>
				<Hero />
				<MainInfo />
			</section>
		</main>
	)
}
