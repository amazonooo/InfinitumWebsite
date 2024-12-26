import { Metadata } from 'next'
import NewsHero from './components/NewsHero'
import News from '@/components/ui/main-info/news/News'
import { postsService } from '@/services/posts.service'

export const metadata: Metadata = {
	title: 'Новости',
}

async function getPosts(page: number, limit: number) {
	const data = await postsService.getPosts(page, limit)

	return data
}

export default async function NewsPage() {
	const limit = 8
	const initialPosts = await getPosts(limit, 1)

  return (
		<section className='h-full w-full flex flex-col overflow-x-clip max-w-[1440px] mx-auto px-5 sm:px-10'>
			<div
				className='flex flex-col items-center justify-center isolate z-[10]'
			>
				<NewsHero />
				<News limit={limit} initialPosts={initialPosts} />
			</div>
		</section>
	)
}