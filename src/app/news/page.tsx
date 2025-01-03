import { Metadata } from 'next'
import NewsHero from './components/NewsHero'
import News from '@/components/ui/main-info/news/News'
import { postsService } from '@/services/posts.service'

export const metadata: Metadata = {
	title: 'Новости',
}

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