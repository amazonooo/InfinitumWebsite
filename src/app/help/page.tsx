import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Помощь',
}

export default function Page() {
  return (
		<section className='h-full w-full flex flex-col items-center justify-center overflow-x-clip bg-[#000000]'>
			<div className='flex flex-col isolate z-[10] w-full'>
				{/* <HelpHero /> */}
			</div>
		</section>
	)
}
