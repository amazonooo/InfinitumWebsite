'use client'

import { ICardData, newsCard } from '@/components/ui/main-info/news/newsCard'
import CardDetail from '../components/CardDetail'

interface ICardProps {
	params: { id: string }
}

const NewsDetail = ({ params }: ICardProps) => {
	const news: ICardData | undefined = newsCard.find((c) => c.id === params.id)

	if(!news) {
		<div>Что то пошло не так</div>
		return null
	}

  return (
		<div className='h-screen w-full flex flex-col justify-center overflow-clip'>
			<div
				className='flex flex-col items-center justify-center isolate z-[50]'
				style={{
          backdropFilter: 'blur(.5px)',
					transition: '0.45s cubic-bezier(0.6, 0.6, 0, 1) box-shadow',
				}}
        >
					<CardDetail card={news} />
			</div>
		</div>
	)
}

export default NewsDetail