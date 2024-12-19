import NewsHero from './components/NewsHero'
import News from '@/components/ui/main-info/news/News'

export default function NewsPage() {
  return (
		<section className='h-full w-full flex flex-col overflow-x-clip max-w-[1440px] mx-auto px-5 sm:px-10'>
			<div
				className='flex flex-col items-center justify-center isolate z-[10]'
			>
				<NewsHero />
				<News />
			</div>
		</section>
	)
}