import NewsHero from './components/NewsHero'
import { Metadata } from 'next'
import { newsIdData } from './components/newsIdData'
import Image from 'next/image'

interface INews {
	params: { id: string }
}

async function fetchNewsData(id: string) {
	const numericId = parseInt(id, 6)
	const news = newsIdData.find((news) => news.id === numericId)
	return news || null
}

export async function generateMetadata({ params }: INews): Promise<Metadata> {
	const news = await fetchNewsData(params.id)

	if(!news) {
		return {
			title: 'Новость не найдена'
		}
	}

	return {
		title: news.subTitle,
		description: news.subTitle
	}
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
		<section className='h-full w-full flex flex-col overflow-x-clip'>
			<div className='flex flex-col isolate z-[10] px-5 sm:px-10 md:px-15 lg:px-28 xl:px-[182.5px]'>
				<NewsHero title={news.title} />
			</div>
			<div className='mt-10'>
				<h1 className='text-4xl font-bold'>{news.title}</h1>
				<h2 className='text-2xl font-semibold'>{news.subTitle}</h2>
				<Image
					src={news.image}
					alt={news.title}
					width={200}
					height={200}
					className='my-4'
				/>
				<p>{news?.content}</p>

				<div className='my-8'>
					<h3 className='text-2xl font-semibold'>
						Дополнительные изображения:
					</h3>
					<div className='flex gap-4'>
						{news.additionalImages.map((image, idx) => (
							<Image key={idx} src={image} alt='доп' width={100} height={100} />
						))}
					</div>
				</div>
			</div>
			<Image src={news.footerImage} alt='footer' width={150} height={200} />
		</section>
	)
}
