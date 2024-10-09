import { FC } from 'react'
import NewsHero from './components/NewsHero'

interface INewsDetail {
	params: {
		newsId: string
	}
}

export async function generateStaticParams() {
	const newsIds = ['1', '2', '3']

	return newsIds.map(newsId => ({
		newsId,
	}))
}

export const revalidate = 60

const NewsDetail: FC<INewsDetail> = ({ params }) => {
	return (
		<section className='h-full w-full flex flex-col overflow-x-clip'>
			<div className='flex flex-col isolate z-[10] px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
				<NewsHero />
			</div>
		</section>
	)
}

export default NewsDetail