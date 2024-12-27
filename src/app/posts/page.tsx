import { Metadata } from 'next'
import NewsHero from '@/app/news/components/NewsHero'
import News from '@/components/ui/main-info/news/News'

export const metadata: Metadata = {
	title: 'Новости',
}

export default async function PostsPage() {
	return (
		<section className='h-full w-full flex flex-col overflow-x-clip max-w-[1440px] mx-auto px-5 sm:px-10'>
			<div className='flex flex-col items-center justify-center isolate z-[10]'>
				<NewsHero />
				<News />
			</div>
		</section>
	)
}
