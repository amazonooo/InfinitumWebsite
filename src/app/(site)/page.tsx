import Hero from '@/components/ui/hero/Hero'
import MainInfo from '@/components/ui/main-info/MainInfo'

export default function HomePage() {
  return (
		<main className='h-full w-full flex flex-col'>
			<section
				className='flex flex-col isolate z-[50]'
				style={{
					backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
				<Hero />
				<MainInfo />
			</section>
		</main>
	)
}
