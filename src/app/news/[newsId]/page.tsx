import NewsHero from './components/NewsHero'
import { Metadata } from 'next'
import { newsIdData } from './components/newsIdData'
import Image from 'next/image'
import LinkButton from '@/components/ui/link/Link'

interface INews {
	params: { id: string }
}

export const metadata: Metadata = {
	title: 'Новости',
}

async function fetchNewsData(id: string) {
	const numericId = parseInt(id, 6)
	const news = newsIdData.find((news) => news.id === numericId)
	return news || null
}

export async function generateStaticParams() {
	return newsIdData.map(news => ({ id: news.id.toString() }))
}

export default async function NewsDetail({ params }: { params: { newsId: string } }) {
	const news = await fetchNewsData(params.newsId)

	if (!news) {
		return <h1>Новость не найдена</h1>
	}

	return (
		<section className='flex flex-col isolate z-[10] h-full w-full overflow-x-clip'>
			<div className='flex flex-col isolate z-[10] px-5 sm:px-10 md:px-12 lg:px-16 xl:px-[80.5px] 2xl:[100px]'>
				<NewsHero title={news.title} />
				<div className=''>
					<Image
						src={news.image}
						alt={news.title}
						width={1240}
						height={488}
						className='w-full'
					/>
				</div>
				<div className='grid grid-cols-1 xl:grid-cols-2 w-full'>
					<div className='flex flex-col gap-12 max-w-[700px] col-span-4'>
						<h2 className='text-primary-pink text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium'>
							{news.subTitle}
						</h2>
						<p>{news.text}</p>
						<Image
							src={news.middleImg}
							alt={news.title}
							width={711}
							height={400}
						/>
						<p>{news.content}</p>
					</div>
					<div />
					<div className='flex justify-end'>
						<div>
							<p>{news.text}</p>
							<Image
								src={news.footerImage}
								alt={news.title}
								width={711}
								height={400}
							/>
							<p className='mb-14 lg:mb-20'>{news.content}</p>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-center'>
					<LinkButton href={'/news'} text='Все новости' />
				</div>
			</div>
		</section>
	)
}
