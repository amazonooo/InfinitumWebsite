import Hero from '@/components/ui/hero/Hero'
import MainInfo from '@/components/ui/main-info/MainInfo'

export default function Home() {
  return (
		<main className='h-full w-full px-5 sm:px-10 flex flex-col'>
			<div
				className='flex flex-col gap-28 isolate z-[50]'
				style={{
					backdropFilter: 'blur(1.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
				<Hero />
				<MainInfo />
			</div>
		</main>
	)
}
