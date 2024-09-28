import MainInfo from '@/components/ui/main-info/MainInfo'
import Hero from './components/Hero'

export default function HomePage() {
  return (
		<main className='h-full w-full flex flex-col'>
			<section
				className='flex flex-col isolate z-[40]'
			>
				<Hero />
				<MainInfo />
			</section>
		</main>
	)
}
