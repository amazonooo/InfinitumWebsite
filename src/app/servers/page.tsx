import {ServerCards} from './components/ServerCards'
import ServerHero from './components/ServerHero'

export default function NewsPage() {
	return (
		<section className='h-full w-full flex flex-col overflow-x-clip'>
			<div
				className='flex flex-col items-center justify-center isolate z-[10]'
			>
        <ServerHero />
        <ServerCards />
			</div>
		</section>
	)
}
