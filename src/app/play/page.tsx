import { Metadata } from 'next'
import PlayHero from './components/PlayHero'

export const metadata: Metadata = {
	title: 'Установка',
}

export default function PlayPage() {
  return (
		<section className='h-full w-full flex flex-col items-center justify-center overflow-x-clip'>
			<div className='flex flex-col isolate z-[10] w-full'>
				<PlayHero />
			</div>
		</section>
	)
}