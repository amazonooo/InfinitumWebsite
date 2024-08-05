import {ServerCards} from './components/ServerCards'
import ServerHero from './components/ServerHero'

export default function NewsPage() {
	return (
		<section className='h-full w-full flex flex-col overflow-clip'>
			<div
				className='flex flex-col items-center justify-center isolate z-[50]'
				style={{
					backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
        <ServerHero />
        <ServerCards />
			</div>
		</section>
	)
}
