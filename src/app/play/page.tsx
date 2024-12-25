import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Начать играть',
}

export default function Page() {
  return (
		<section className='h-full w-full flex flex-col items-center justify-center overflow-x-clip max-w-[1440px] mx-auto px-5 sm:px-10'>
			<div className='flex flex-col isolate z-[10] w-full'>
				{/* <PlayHero /> */}
			</div>
		</section>
	)
}
