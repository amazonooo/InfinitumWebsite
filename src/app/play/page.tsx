import PlayHero from './components/PlayHero'

export default function PlayPage() {
  return (
		<section className='h-full w-full flex flex-col overflow-x-clip'>
			<div className='flex flex-col items-center justify-center isolate z-[10]'>
        <PlayHero />
			</div>
		</section>
	)
}