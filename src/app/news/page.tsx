import NewsHero from './components/NewsHero'
import News from '@/components/ui/main-info/news/News'

export default function NewsPage() {
  return (
		<section className='h-full w-full flex flex-col overflow-x-clip'>
			<div
				className='flex flex-col items-center justify-center isolate z-[50]'
				style={{
					backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
			>
				<NewsHero />
				<News />
			</div>
		</section>
	)
}